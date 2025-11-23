import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333333]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image src="/logo.svg" alt="TECNITY" width={180} height={45} className="h-9 w-auto mb-4" />
            <p className="text-sm text-[#a8a8a8] mb-3">
              Your Trusted Partner in Digital Innovation and Growth
            </p>
            <p className="text-sm text-[#a8a8a8]">
              We deliver cutting-edge technology solutions that transform businesses and drive success in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e8e8e8]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">About</Link></li>
              <li><Link href="/services" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">Services</Link></li>
              <li><Link href="/products" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">Products</Link></li>
              <li><Link href="/portfolio" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e8e8e8]">Services</h4>
            <ul className="space-y-2 text-sm text-[#a8a8a8]">
              <li>Solution Architecture</li>
              <li>Software Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e8e8e8]">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-[#a8a8a8]">
                <Mail size={16} />
                <a href="mailto:info@tecnity.com" className="hover:text-[#e8e8e8] transition-colors">
                  info@tecnity.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#a8a8a8]">
                <Phone size={16} />
                <a href="tel:+8801913946907" className="hover:text-[#e8e8e8] transition-colors">
                  +880 1913 946907
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#a8a8a8]">
                <MapPin size={16} className="mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/tecnity" target="_blank" rel="noopener noreferrer" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#a8a8a8] hover:text-[#e8e8e8] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#333333] mt-8 pt-8 text-center text-sm text-[#a8a8a8]">
          <p>&copy; {new Date().getFullYear()} Tecnity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
