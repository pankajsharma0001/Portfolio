"use client";
import { PORTFOLIO_NAME } from "@/utils/data/navbarData";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./navbar.css";

const NAV_LINKS = [
  { href: "/#about", label: "About", section: "about" },
  { href: "/#experience", label: "Experience", section: "experience" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#education", label: "Education", section: "education" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) => link.section);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 -mx-6 sm:-mx-12 px-6 sm:px-12 py-4 border-b transition-all duration-500 ${scrolled
      ? "bg-[#0d1224] border-white/10 shadow-lg shadow-violet-500/5"
      : "bg-[#0d1224]/90 border-transparent"
      }`}>
      <div className="flex items-center justify-between max-w-[92rem] mx-auto">
        <Link
          href="/"
          className="text-2xl font-display font-bold tracking-tight gradient-text hover:opacity-80 transition-opacity"
        >
          {PORTFOLIO_NAME}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="nav-item">
              <Link
                href={link.href}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-300 no-underline ${activeSection === link.section
                  ? "text-white nav-active"
                  : "text-gray-400 hover:text-white"
                  }`}
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
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 no-underline ${activeSection === link.section
                ? "text-white bg-white/10"
                : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
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