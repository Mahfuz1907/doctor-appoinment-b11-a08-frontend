'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlus, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

  const pathName = usePathname()
  const validRoutes = ['/', '/bookings', '/doctor']
  const isValidRoutes = validRoutes.some((route) => pathName === route || (route !== '/' && pathName.startsWith(route)))

  if(!isValidRoutes){
    return null
  }
  
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-10 px-4 font-sans" id="footer">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <Link href="/" className="flex items-center gap-2 mb-6 group">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">
            <FaPlus />
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Phudu
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-8 mb-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/bookings" className="hover:text-blue-600 transition-colors">
            My-Bookings
          </Link>
          <a href="#blogs" className="hover:text-blue-600 transition-colors cursor-pointer">
            Blogs
          </a>
          <a href="#footer" className="hover:text-blue-600 transition-colors">
            Contact Us
          </a>
        </nav>

        <div className="w-full max-w-2xl border-t border-gray-200/60 mb-8" />

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="text-sm" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-sm" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label="YouTube"
          >
            <FaYoutube className="text-sm" />
          </a>
        </div>

      </div>
    </footer>
  );
}