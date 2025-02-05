import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
	try {
		const body = await request.json();
		console.log(body);
		// Check if user already exists
		const existingUser = await prisma.user.findUnique({
			where: { email: body.email },
		});

		if (existingUser) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 }
			);
		}

		// Create new user
		const newUser = await prisma.user.create({
			data: {
				name: body.name,
				email: body.email,
				password: body.password,
			},
		});
		if (newUser)
			return NextResponse.json({ message: "Registration successful" });
		else throw new Error("Failed to create user");
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: "Registration failed" }, { status: 500 });
	}
}
