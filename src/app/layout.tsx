import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Memo App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header className="bg-blue-600 text-white">
					<h1>My Memo App</h1>

					<nav>
						<Link href={"/"}>ホームへ</Link>
					</nav>
				</header>

				<main>{children}</main>

				<footer className="bg-blue-600 text-white">
					<small>&copy;2025 My Memo App</small>
				</footer>
			</body>
		</html>
	);
}
