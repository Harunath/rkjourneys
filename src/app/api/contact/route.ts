import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
	try {
		const body = await request.json();
		await prisma.visitorContact.create({
			data: {
				name: body.name,
				email: body.email,
				message: body.message,
			},
		});
		return NextResponse.json({ message: "Message sent successfully" });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
