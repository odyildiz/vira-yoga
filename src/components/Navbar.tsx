"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Üyelikler", href: "#memberships" },
    { name: "Program", href: "#schedule" },
    { name: "Dersler", href: "#classes" },
    { name: "Eğitmenler", href: "#teachers" },
    { name: "Hakkımızda", href: "#about" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        id="desktop-nav"
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out hidden md:block ${
          isScrolled
            ? "bg-surface-container/95 backdrop-blur-md text-on-background shadow-sm border-b border-outline-variant/30"
            : "bg-transparent text-white"
        }`}
      >
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
          <Link
            href="#"
            id="nav-logo"
            className={`text-2xl font-serif tracking-widest hover:text-primary transition-colors duration-300 drop-shadow-md font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            VİRA YOGA
          </Link>
          <div id="nav-links" className="flex items-center space-x-8 font-bold">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`transition-colors duration-300 px-2 py-1 rounded drop-shadow-sm nav-item ${
                  isScrolled
                    ? "text-on-surface-variant hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-6 font-bold">
            <Link
              href="#contact"
              className="inline-block text-center bg-primary text-on-primary font-button text-button px-6 py-3 rounded-full hover:bg-surface-tint transition-colors duration-300 shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
            >
              Yogaya Yeni Başlayanlar
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        id="mobile-nav"
        className={`md:hidden fixed w-full top-0 z-50 transition-all duration-300 ease-in-out flex flex-col font-bold ${
          isScrolled || isMobileMenuOpen
            ? "bg-surface-container/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30"
            : "bg-transparent"
        }`}
      >
        <div className="py-4 px-6 flex justify-between items-center w-full">
          <Link
            href="#"
            id="mobile-logo"
            className={`font-h3 text-h3 drop-shadow-md transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            VİRA YOGA
          </Link>
          <button
            id="mobile-icon"
            className={`drop-shadow-md transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="flex flex-col px-6 pb-6 pt-2 space-y-4 bg-surface-container/95 backdrop-blur-md text-on-background border-t border-outline-variant/30">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-block text-center bg-primary text-on-primary font-button text-button px-6 py-3 rounded-full hover:bg-surface-tint transition-colors duration-300 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Yogaya Yeni Başlayanlar
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
