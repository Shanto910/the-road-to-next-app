import './globals.css';
import { LucideKanban } from 'lucide-react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { homePath, ticketsPath } from '@/paths';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'The Next Level App',
	description: 'My Road to Next App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<nav className="supports-backdrop-blur:bg-background/60 fixed top-0 left-0 right-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
					<div>
						<Link href={homePath()} className={buttonVariants({ variant: 'ghost' })}>
							<LucideKanban />
							<h1 className="text-lg font-semibold">TicketBounty</h1>
						</Link>
					</div>
					<div>
						<Link
							href={ticketsPath()}
							className={buttonVariants({ variant: 'default' })}>
							Tickets
						</Link>
					</div>
				</nav>
				<main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
					{children}
				</main>
			</body>
		</html>
	);
}
