"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useLanguage } from "./language-provider";

export function BackToTop() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel hover:bg-minecraft-emerald hover:shadow-pixel-lg transition-all duration-200 z-50"
      aria-label={t.common.backToTop}
    >
      <ChevronUp size={20} className="text-gray-900" />
    </button>
  );
}
