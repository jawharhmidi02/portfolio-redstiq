"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import type { Language, Translation } from "@/lib/i18n/types";
import { getTranslation } from "@/lib/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved language from localStorage or detect from browser
    const savedLanguage = localStorage.getItem("language") as Language;
    const browserLanguage = navigator.language.split("-")[0] as Language;
    const supportedLanguages: Language[] = ["en", "it", "fr"];

    const initialLanguage =
      savedLanguage ||
      (supportedLanguages.includes(browserLanguage) ? browserLanguage : "en");

    setLanguageState(initialLanguage);
    setMounted(true);
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const t = getTranslation(language);

  // Update document language when language changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
