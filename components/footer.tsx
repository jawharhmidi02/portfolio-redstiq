"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/redstiq",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/redstiq",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:contact@redstiq.com",
      label: t.contact.info.email,
    },
  ];

  const quickLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#team", label: t.nav.team },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-black/80 border-t-4 border-minecraft-darkGrass py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-minecraft-redstone border-2 border-minecraft-darkGrass shadow-pixel-sm">
                <div className="w-full h-full bg-gradient-to-b from-minecraft-gold to-minecraft-redstone"></div>
              </div>
              <span className="font-pixel text-lg text-white">
                {t.hero.title}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-pixel text-sm text-minecraft-gold">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-pixel text-sm text-minecraft-gold">
              {t.footer.contact}
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>contact@redstiq.com</p>
              <p>{t.contact.info.locationValue}</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:bg-minecraft-emerald hover:shadow-pixel transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="text-gray-900" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-minecraft-darkGrass pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {t.footer.year} {t.footer.rights}
          </p>

          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>{t.footer.madeWith.split("and")[0]}</span>
            <Heart size={14} className="text-minecraft-redstone fill-current" />
            <span>{t.footer.madeWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
