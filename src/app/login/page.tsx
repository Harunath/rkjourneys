"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await signIn("credentials", {
			redirect: false,
			email: credentials.email,
			password: credentials.password,
		});

		if (result?.error) {
			if (result.error === "User not found") {
				router.push(`/register?email=${encodeURIComponent(credentials.email)}`);
			} else {
				alert(result.error);
			}
		} else {
			router.push("/profile");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
				<h2 className="text-3xl font-bold text-center">Login</h2>

				<button
					onClick={() => signIn("google")}
					className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 flex items-center justify-center gap-2">
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
					</svg>
					Continue with Google
				</button>

				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-300"></div>
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-2 bg-white text-gray-500">Or</span>
					</div>
				</div>

				<form className="space-y-6" onSubmit={handleLogin}>
					<div>
						<label className="block mb-2">Email</label>
						<input
							type="email"
							required
							className="w-full p-2 border rounded"
							value={credentials.email}
							onChange={(e) =>
								setCredentials({ ...credentials, email: e.target.value })
							}
						/>
					</div>
					<div>
						<label className="block mb-2">Password</label>
						<input
							type="password"
							required
							className="w-full p-2 border rounded"
							value={credentials.password}
							onChange={(e) =>
								setCredentials({ ...credentials, password: e.target.value })
							}
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
						Login
					</button>
				</form>

				<div className="text-center">
					<Link href="/register" className="text-blue-600 hover:underline">
						Create New Account
					</Link>
				</div>
			</div>
		</div>
	);
}
