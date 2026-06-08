import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shyam Natarajan",
  description: "Shyam Natarajan – Platform Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <SidebarWrapper />
          <div className="flex flex-1 flex-col bg-bg">
            <main className="flex-1 p-10 lg:p-14">{children}</main>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
