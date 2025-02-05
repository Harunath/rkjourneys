// app/gallery/page.tsx
"use client";

import Image from "next/image";

const popularDestinations = [
	{
		id: 1,
		title: "Eiffel Tower, Paris",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738667800/eiffieltower.jpg",
		description: "Experience the city of love with breathtaking views",
	},
	{
		id: 2,
		title: "Santorini, Greece",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668065/sdh7xqgxlrsz2ohph1e7.jpg",
		description: "White-washed buildings with stunning sunsets",
	},
	{
		id: 3,
		title: "Great Wall of China",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668111/the-great-wall-of-china_wvgcki.jpg",
		description: "Walk through ancient history",
	},
	{
		id: 4,
		title: "Taj Mahal, India",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668183/asMq6cVwZsckf8sGUaRJU4-1200-80_k8djbj.jpg",
		description: "Marvel at this architectural wonder",
	},
	{
		id: 5,
		title: "Machu Picchu, Peru",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668228/640px-Machu_Picchu_2C_Peru_bnzovy.jpg",
		description: "Ancient Incan city in the clouds",
	},
	{
		id: 6,
		title: "Grand Canyon, USA",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668257/mather-point-2021_cqc01b.jpg",
		description: "Nature's magnificent masterpiece",
	},
	{
		id: 7,
		title: "Northern Lights, Iceland",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668306/northern_lights_above_glacier_lagoon_v2osk_unsplash_7d39ca647f_pioiev.jpg",
		description: "Witness nature's light show",
	},
	{
		id: 8,
		title: "Pyramids of Giza, Egypt",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668341/2Fmethode_2Ftimes_2Fprod_2Fweb_2Fbin_2F2d250f66-5edf-4074-a5fa-b939b570f613_l4g91k.jpg",
		description: "Step back in time to ancient Egypt",
	},
	{
		id: 9,
		title: "Sydney Opera House, Australia",
		image:
			"https://res.cloudinary.com/dlj0o7ydz/image/upload/v1738668388/GettyImages-982774858_syq2qf.jpg",
		description: "Iconic architecture down under",
	},
];

export default function GalleryPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold text-center mb-8">
					Popular Destinations
				</h1>
				<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
					Explore our curated collection of world-famous destinations visited by
					travelers from around the globe
				</p>

				<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
					{popularDestinations.map((destination) => (
						<div
							key={destination.id}
							className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<Image
								src={destination.image}
								alt={destination.title}
								width={800}
								height={600}
								className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
									<h3 className="text-xl font-bold mb-2">
										{destination.title}
									</h3>
									<p className="text-sm">{destination.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
