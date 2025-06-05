"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "./language-provider";
import { LanguageSwitcher } from "./language-switcher";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#team", label: t.nav.team },
    { href: "/#contact", label: t.nav.contact },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-sm shadow-pixel"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-minecraft-redstone border-2 border-minecraft-darkGrass shadow-pixel-sm group-hover:shadow-pixel transition-all duration-200">
              <div className="w-full h-full bg-gradient-to-b from-minecraft-gold to-minecraft-redstone">
                <img src="/RedStiQ-removebg-preview.png" alt="LOGO" />
              </div>
            </div>
            <span className="font-pixel text-lg text-white group-hover:text-minecraft-gold transition-colors">
              {t.hero.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-pixel text-sm text-white hover:text-minecraft-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:shadow-pixel transition-all duration-200 hover:-translate-y-1"
              aria-label={t.common.toggleTheme}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm"
              aria-label={t.common.menu}
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm border-t-2 border-minecraft-darkGrass">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block font-pixel text-sm text-white hover:text-minecraft-gold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
