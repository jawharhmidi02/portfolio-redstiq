"use client";

import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "./language-provider";
import { languages } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:shadow-pixel transition-all duration-200 hover:-translate-y-1"
        aria-label={t.common.changeLanguage}
      >
        <Globe size={16} className="hidden sm:block" />
        <span className="block sm:hidden">{currentLanguage?.flag}</span>
        <span className="font-pixel text-xs hidden sm:block">
          {currentLanguage?.name}
        </span>
        <ChevronDown
          size={12}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border-2 border-minecraft-darkGrass shadow-pixel-lg z-50 min-w-[150px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-minecraft-gold/20 transition-colors ${
                  language === lang.code ? "bg-minecraft-gold/30" : ""
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-pixel text-xs text-gray-900 dark:text-white">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
