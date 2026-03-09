"use client";
import { PORTFOLIO_NAME } from "@/utils/data/navbarData";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./navbar.css";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 -mx-6 sm:-mx-12 px-6 sm:px-12 py-4 backdrop-blur-xl bg-[#0d1224]/70 border-b border-white/5 transition-all duration-300">
      <div className="flex items-center justify-between max-w-[92rem] mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight gradient-text hover:opacity-80 transition-opacity"
        >
          {PORTFOLIO_NAME}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="nav-item">
              <Link
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
      >
        <div className="glass-card p-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;