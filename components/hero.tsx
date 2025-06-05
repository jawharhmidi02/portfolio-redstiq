"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./language-provider";
import { useMemo } from "react";

export function Hero() {
  const { t } = useLanguage();

  const backgroundElements = useMemo(() => {
    return [...Array(20)].map((_, i) => {
      const initialX =
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1200);
      const initialY =
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 800);

      return {
        id: i,
        initialX,
        initialY,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      };
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-4 h-4 bg-minecraft-gold border border-minecraft-darkGrass"
            initial={{
              x: element.initialX,
              y: element.initialY,
              rotate: 0,
            }}
            animate={{
              y: [element.initialY, element.initialY - 20, element.initialY],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            className="w-24 h-24 mx-auto bg-minecraft-redstone border-4 border-minecraft-darkGrass shadow-pixel-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full bg-gradient-to-b from-minecraft-gold to-minecraft-redstone overflow-hidden">
              <img src="/RedStiQ-removebg-preview.png" alt="LOGO" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="font-pixel text-4xl md:text-6xl text-white drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-pixel text-lg md:text-xl text-minecraft-gold max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="/#projects" className="minecraft-button">
              {t.hero.viewWork}
            </a>
            <a
              href="/#contact"
              className="minecraft-button bg-minecraft-emerald hover:bg-minecraft-gold"
            >
              {t.hero.startProject}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}
