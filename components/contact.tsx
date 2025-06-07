"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "./language-provider";

export function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
          phone: "",
        });
        toast.success(t.toast.contactSuccess.title, {
          description: t.toast.contactSuccess.description,
        });
      } else {
        setSubmitStatus("error");
        toast.error(t.toast.contactError.title, {
          description: t.toast.contactError.description,
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      toast.error(t.toast.contactError.title, {
        description: t.toast.contactError.description,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.info.email,
      value: "contact@redstiq.com",
      link: "mailto:contact@redstiq.com",
    },
    {
      icon: Phone,
      title: t.contact.info.phone,
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: t.contact.info.location,
      value: t.contact.info.locationValue,
      link: "/#",
    },
  ];

  const services = [
    t.services.items.customWebsite.title,
    t.services.items.ecommerce.title,
    t.services.items.mobileFirst.title,
    t.services.items.backend.title,
    t.services.items.cms.title,
    t.services.items.maintenance.title,
    "Other",
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="w-24 h-1 bg-minecraft-redstone mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="minecraft-container"
          >
            <h3 className="font-pixel text-xl mb-6 text-minecraft-gold dark:text-minecraft-emerald">
              {t.contact.form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-pixel text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t.contact.form.name}{" "}
                  <span className="text-minecraft-redstone">
                    {t.contact.form.required}
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="minecraft-input w-full"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-pixel text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t.contact.form.email}{" "}
                  <span className="text-minecraft-redstone">
                    {t.contact.form.required}
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="minecraft-input w-full"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-pixel text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t.contact.form.phone}{" "}
                  <span className="text-minecraft-redstone">
                    {t.contact.form.required}
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="minecraft-input w-full"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block font-pixel text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="minecraft-input w-full"
                  placeholder={t.contact.form.companyPlaceholder}
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block font-pixel text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t.contact.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="minecraft-input w-full"
                >
                  <option value="">{t.contact.form.selectService}</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-pixel text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t.contact.form.message}{" "}
                  <span className="text-minecraft-redstone">
                    {t.contact.form.required}
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="minecraft-input w-full resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="minecraft-button w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>{t.contact.form.sending}</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{t.contact.form.send}</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-minecraft-emerald/20 border-2 border-minecraft-emerald text-center">
                  <p className="font-pixel text-sm text-gray-700 dark:text-gray-300">
                    {t.contact.success.title} {t.contact.success.message}
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-minecraft-redstone/20 border-2 border-minecraft-redstone text-center">
                  <p className="font-pixel text-sm text-gray-700 dark:text-gray-300">
                    {t.contact.error.title} {t.contact.error.message}
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="minecraft-container">
              <h3 className="font-pixel text-xl mb-6 text-minecraft-gold dark:text-minecraft-emerald">
                {t.contact.info.title}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center">
                      <info.icon size={20} className="text-gray-900" />
                    </div>
                    <div>
                      <p className="font-pixel text-sm text-gray-600 dark:text-gray-400">
                        {info.title}
                      </p>
                      <a
                        href={info.link}
                        className="text-gray-900 dark:text-white hover:text-minecraft-gold dark:hover:text-minecraft-emerald transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="minecraft-container">
              <h4 className="font-pixel text-lg mb-4 text-minecraft-gold dark:text-minecraft-emerald">
                {t.contact.why.title}
              </h4>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                {t.contact.why.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-minecraft-gold border border-minecraft-darkGrass mt-2 flex-shrink-0"></div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
