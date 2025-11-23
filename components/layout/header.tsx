"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
];

export function Header({ onQuoteClick }: { onQuoteClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#333333] bg-[#1a1a1a]/95 backdrop-blur">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="TECNITY" width={200} height={50} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#a8a8a8] transition-colors hover:text-[#e8e8e8]"
            >
              {item.name}
            </Link>
          ))}
          <Button onClick={onQuoteClick} size="sm" className="bg-[#f5f5f5] text-[#1a1a1a] hover:bg-[#e8e8e8]">
            Request Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#e8e8e8]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#333333]">
          <nav className="container mx-auto px-4 flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#a8a8a8] transition-colors hover:text-[#e8e8e8]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button onClick={onQuoteClick} size="sm" className="w-full bg-[#f5f5f5] text-[#1a1a1a] hover:bg-[#e8e8e8]">
              Request Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
