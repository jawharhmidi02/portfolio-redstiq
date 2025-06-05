import { en } from "./en";
import { it } from "./it";
import { fr } from "./fr";
import type { Language } from "../types";

export const translations = {
  en,
  it,
  fr,
} as const;

export const getTranslation = (language: Language) => {
  return translations[language] || translations.en;
};

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "it" as Language, name: "Italiano", flag: "🇮🇹" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
];
