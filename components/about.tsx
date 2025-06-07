"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import { useLanguage } from "./language-provider";

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t.about.features.cleanCode.title,
      description: t.about.features.cleanCode.description,
    },
    {
      icon: Palette,
      title: t.about.features.creativeDesign.title,
      description: t.about.features.creativeDesign.description,
    },
    {
      icon: Zap,
      title: t.about.features.fastPerformance.title,
      description: t.about.features.fastPerformance.description,
    },
    {
      icon: Users,
      title: t.about.features.teamCollaboration.title,
      description: t.about.features.teamCollaboration.description,
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.about.title}</h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="minecraft-container">
              <h3 className="font-pixel text-xl mb-4 text-minecraft-gold dark:text-minecraft-emerald">
                {t.about.mission}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t.about.missionText}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </motion.div>

          {/* Right side - Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="minecraft-container text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center group-hover:bg-minecraft-emerald transition-colors duration-300">
                  <feature.icon size={20} className="text-gray-900" />
                </div>
                <h4 className="font-pixel text-sm mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
