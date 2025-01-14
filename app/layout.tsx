import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./componets/navbar"; // Import the Navbar component
import Footer from "./componets/Footer"; // Import the Footer component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSolution.Co",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        
        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
