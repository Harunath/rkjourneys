"use client";

import { useState } from "react";

const servicesData = [
	{
		id: 1,
		title: "Tour Planning & Booking",
		description:
			"Customized travel itineraries and seamless booking experience",
		icon: "✈️",
		details: {
			includes: [
				"Personalized itinerary creation",
				"Hotel and flight bookings",
				"Local transportation arrangements",
				"24/7 travel support",
			],
			priceRange: "$500 - $5000",
		},
	},
	{
		id: 2,
		title: "Visa Assistance",
		description: "Expert guidance for visa applications and documentation",
		icon: "🛂",
		details: {
			includes: [
				"Visa requirement analysis",
				"Document preparation",
				"Application submission",
				"Follow-up and tracking",
			],
			priceRange: "$100 - $300",
		},
	},
	{
		id: 3,
		title: "Passport Services",
		description: "Assistance with passport applications and renewals",
		icon: "📘",
		details: {
			includes: [
				"New passport applications",
				"Passport renewals",
				"Lost passport replacement",
				"Expedited processing",
			],
			priceRange: "$50 - $200",
		},
	},
	{
		id: 4,
		title: "Travel Insurance",
		description: "Comprehensive travel insurance plans",
		icon: "🛡️",
		details: {
			includes: [
				"Medical coverage",
				"Trip cancellation protection",
				"Baggage protection",
				"24/7 emergency assistance",
			],
			priceRange: "$30 - $300",
		},
	},
];

export default function ServicesPage() {
	const [selectedService, setSelectedService] = useState<number | null>(null);
	const [inquiryForm, setInquiryForm] = useState({
		name: "",
		email: "",
		service: "",
		message: "",
	});

	const handleServiceClick = (id: number) => {
		setSelectedService(selectedService === id ? null : id);
	};

	const handleInquirySubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/services/inquiry", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inquiryForm),
			});
			if (response.ok) {
				alert("Inquiry submitted successfully!");
				setInquiryForm({
					name: "",
					email: "",
					service: "",
					message: "",
				});
			}
		} catch (error) {
			console.error("Error submitting inquiry:", error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{servicesData.map((service) => (
						<div
							key={service.id}
							className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all ${
								selectedService === service.id ? "ring-2 ring-blue-500" : ""
							}`}
							onClick={() => {
								handleServiceClick(service.id);
								setInquiryForm((prev) => ({
									...prev,
									service: service.title,
								}));
							}}>
							<div className="text-4xl mb-4">{service.icon}</div>
							<h2 className="text-xl font-bold mb-2">{service.title}</h2>
							<p className="text-gray-600 mb-4">{service.description}</p>

							{selectedService === service.id && (
								<div className="mt-4 space-y-2">
									<h3 className="font-semibold">Includes:</h3>
									<ul className="list-disc list-inside">
										{service.details.includes.map((item, index) => (
											<li key={index} className="text-gray-600">
												{item}
											</li>
										))}
									</ul>
									<p className="text-gray-600">
										<span className="font-semibold">Price Range:</span>{" "}
										{service.details.priceRange}
									</p>
								</div>
							)}
						</div>
					))}
				</div>

				<div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
					<h2 className="text-2xl font-bold mb-6">Service Inquiry</h2>
					<form onSubmit={handleInquirySubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label className="block mb-2 font-medium">Name</label>
								<input
									type="text"
									required
									className="w-full p-2 border rounded-lg"
									value={inquiryForm.name}
									onChange={(e) =>
										setInquiryForm({ ...inquiryForm, name: e.target.value })
									}
								/>
							</div>
							<div>
								<label className="block mb-2 font-medium">Email</label>
								<input
									type="email"
									required
									className="w-full p-2 border rounded-lg"
									value={inquiryForm.email}
									onChange={(e) =>
										setInquiryForm({ ...inquiryForm, email: e.target.value })
									}
								/>
							</div>
						</div>

						<div>
							<label className="block mb-2 font-medium">Service</label>
							<select
								required
								className="w-full p-2 border rounded-lg"
								value={inquiryForm.service}
								onChange={(e) =>
									setInquiryForm({ ...inquiryForm, service: e.target.value })
								}>
								<option value="">Select a service</option>
								{servicesData.map((service) => (
									<option key={service.id} value={service.title}>
										{service.title}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block mb-2 font-medium">Message</label>
							<textarea
								required
								className="w-full p-2 border rounded-lg min-h-[120px]"
								value={inquiryForm.message}
								onChange={(e) =>
									setInquiryForm({ ...inquiryForm, message: e.target.value })
								}
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
							Submit Inquiry
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
