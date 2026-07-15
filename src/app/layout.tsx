import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/FooterLink";

const merianda = Merienda({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillForge - Your Learning Roadmap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merianda.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          <Toaster />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
