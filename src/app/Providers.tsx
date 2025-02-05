"use client";

import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<SessionProvider>
			<Navbar />
			{children}
		</SessionProvider>
	);
};

export default Providers;
