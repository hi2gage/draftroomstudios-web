import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gage Halverson - Senior iOS Software Engineer",
  description: "Senior iOS Software Engineer specializing in Swift, SwiftUI, and modern iOS architecture. Currently iOS Modularization Lead at Fetch, building scalable mobile applications.",
  keywords: ["iOS Engineer", "Swift", "SwiftUI", "Mobile Development", "Software Engineer", "DraftRoom Studios"],
  authors: [{ name: "Gage Halverson" }],
  openGraph: {
    title: "Gage Halverson - Senior iOS Software Engineer",
    description: "Senior iOS Software Engineer specializing in Swift, SwiftUI, and modern iOS architecture.",
    url: "https://gagehalverson.dev",
    siteName: "Gage Halverson Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gage Halverson - Senior iOS Software Engineer",
    description: "Senior iOS Software Engineer specializing in Swift, SwiftUI, and modern iOS architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
