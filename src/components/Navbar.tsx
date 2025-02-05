"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
	const { data: session } = useSession();

	return (
		<nav className="bg-white shadow">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold text-blue-600">
					<Image
						src={
							"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668723/logo_no3iso.png"
						}
						height={60}
						width={80}
						alt="logo"
					/>
				</Link>
				<div className="hidden md:flex space-x-6">
					<Link href="/services" className="hover:text-blue-600">
						Services
					</Link>
					<Link href="/gallery" className="hover:text-blue-600">
						Gallery
					</Link>
					<Link href="/contact" className="hover:text-blue-600">
						Contact
					</Link>
					{session ? (
						<Link href="/profile" className="hover:text-blue-600">
							Profile
						</Link>
					) : (
						<Link href="/login" className="hover:text-blue-600">
							Login
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
}
