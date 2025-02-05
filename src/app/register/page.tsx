"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
	const searchParams = useSearchParams();
	const [formData, setFormData] = useState({
		name: "",
		email: searchParams.get("email") || "",
		password: "",
	});
	const router = useRouter();

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				router.push("/login");
			} else {
				const error = await response.json();
				alert(error.error);
			}
		} catch (error) {
			console.log(error);
			alert("Registration failed. Please try again.");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
				<h2 className="text-3xl font-bold text-center">Create Account</h2>
				<form className="mt-8 space-y-6" onSubmit={handleRegister}>
					<div>
						<label className="block mb-2">Name</label>
						<input
							type="text"
							required
							className="w-full p-2 border rounded"
							value={formData.name}
							onChange={(e) =>
								setFormData({ ...formData, name: e.target.value })
							}
						/>
					</div>
					<div>
						<label className="block mb-2">Email</label>
						<input
							type="email"
							required
							className="w-full p-2 border rounded"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
						/>
					</div>
					<div>
						<label className="block mb-2">Password</label>
						<input
							type="password"
							required
							className="w-full p-2 border rounded"
							value={formData.password}
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
						Register
					</button>
				</form>
				<div className="text-center">
					<span className="text-gray-600">Already have an account? </span>
					<Link href="/login" className="text-blue-600 hover:underline">
						Login here
					</Link>
				</div>
			</div>
		</div>
	);
}
