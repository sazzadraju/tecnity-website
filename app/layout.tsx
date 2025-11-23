"use client";

import { Outfit } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { QuoteModal } from "@/components/modals/quote-modal";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Tecnity - Your Trusted Partner in Digital Innovation</title>
        <meta name="description" content="Tecnity provides comprehensive digital solutions including software development, mobile apps, UI/UX design, and digital marketing." />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Header onQuoteClick={() => setQuoteModalOpen(true)} />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
        <Toaster />
      </body>
    </html>
  );
}
