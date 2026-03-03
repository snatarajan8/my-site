import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shyam Natarajan",
  description: "Shyam Natarajan – Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <SidebarWrapper />
          <div className="flex flex-1 flex-col bg-zinc-100">
            <main className="flex-1 p-10">{children}</main>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}