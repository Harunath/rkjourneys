import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen">
			<main className="container mx-auto px-4 py-8">
				<section className="text-center py-20">
					<h1 className="text-4xl font-bold mb-6">Your Journey Begins Here</h1>
					<p className="text-xl mb-8">Professional Travel Planning Services</p>
					<Link
						href="/services"
						className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
						Explore Services
					</Link>
				</section>

				<section className="grid md:grid-cols-3 gap-8 py-12">
					<div className="p-6 border rounded-lg">
						<h3 className="text-xl font-bold mb-4">Tour Planning</h3>
						<p>Customized travel itineraries tailored to your preferences</p>
					</div>
					<div className="p-6 border rounded-lg">
						<h3 className="text-xl font-bold mb-4">Visa Assistance</h3>
						<p>Expert guidance for visa applications and documentation</p>
					</div>
					<div className="p-6 border rounded-lg">
						<h3 className="text-xl font-bold mb-4">24/7 Support</h3>
						<p>Round-the-clock assistance during your travels</p>
					</div>
				</section>
			</main>
		</div>
	);
}
