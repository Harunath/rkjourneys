"use client";

import { useState } from "react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		if (response.ok) {
			alert("Message sent successfully!");
			setFormData({ name: "", email: "", message: "" });
		}
	};

	return (
		<div className="min-h-screen container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Contact Us</h1>
			<form onSubmit={handleSubmit} className="max-w-lg space-y-6">
				<div>
					<label className="block mb-2">Name</label>
					<input
						type="text"
						required
						className="w-full p-2 border rounded"
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
					<label className="block mb-2">Message</label>
					<textarea
						required
						className="w-full p-2 border rounded h-32"
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
					Send Message
				</button>
			</form>
		</div>
	);
}
