import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Twintura",
  description: "Modern software solutions",
  openGraph: {
    title: "Twintura",
    description: "Modern software solutions",
    url: "https://twintura.com",
    siteName: "Twintura",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: {
    icon: '/logo_simple.svg',
  },

};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}