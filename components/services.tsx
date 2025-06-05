"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Database,
  Wrench,
  Code,
} from "lucide-react";
import { useLanguage } from "./language-provider";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t.services.items.customWebsite.title,
      description: t.services.items.customWebsite.description,
      features: t.services.items.customWebsite.features,
    },
    {
      icon: ShoppingCart,
      title: t.services.items.ecommerce.title,
      description: t.services.items.ecommerce.description,
      features: t.services.items.ecommerce.features,
    },
    {
      icon: Smartphone,
      title: t.services.items.mobileFirst.title,
      description: t.services.items.mobileFirst.description,
      features: t.services.items.mobileFirst.features,
    },
    {
      icon: Database,
      title: t.services.items.backend.title,
      description: t.services.items.backend.description,
      features: t.services.items.backend.features,
    },
    {
      icon: Code,
      title: t.services.items.cms.title,
      description: t.services.items.cms.description,
      features: t.services.items.cms.features,
    },
    {
      icon: Wrench,
      title: t.services.items.maintenance.title,
      description: t.services.items.maintenance.description,
      features: t.services.items.maintenance.features,
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.services.title}</h2>
          <div className="w-24 h-1 bg-minecraft-emerald mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="minecraft-container group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-minecraft-emerald border-2 border-minecraft-darkGrass shadow-pixel flex items-center justify-center group-hover:bg-minecraft-gold transition-colors duration-300">
                <service.icon size={24} className="text-gray-900" />
              </div>

              {/* Title */}
              <h3 className="font-pixel text-lg mb-4 text-center text-gray-900 dark:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-minecraft-gold border border-minecraft-darkGrass mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
