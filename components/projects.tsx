"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: "ecommerce-platform",
      title: t.projects.items.ecommercePlatform.title,
      description: t.projects.items.ecommercePlatform.description,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: t.projects.categories.ecommerce,
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "portfolio-website",
      title: t.projects.items.portfolioWebsite.title,
      description: t.projects.items.portfolioWebsite.description,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Framer Motion", "Sanity CMS", "Vercel"],
      category: t.projects.categories.portfolio,
      featured: true,
      liveUrl: "#",
      githubUrl: "https://github.com/RedStiQ",
    },
    {
      id: "dashboard-app",
      title: t.projects.items.dashboardApp.title,
      description: t.projects.items.dashboardApp.description,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      category: t.projects.categories.dashboard,
      featured: true,
      liveUrl: "#",
      githubUrl: "https://github.com/RedStiQ",
    },
    {
      id: "booking-system",
      title: t.projects.items.bookingSystem.title,
      description: t.projects.items.bookingSystem.description,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Express.js", "MySQL", "Socket.io"],
      category: t.projects.categories.webapp,
      featured: false,
      liveUrl: "#",
      githubUrl: "https://github.com/RedStiQ",
    },
    {
      id: "blog-platform",
      title: t.projects.items.blogPlatform.title,
      description: t.projects.items.blogPlatform.description,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "MDX", "Prisma", "NextAuth"],
      category: t.projects.categories.cms,
      featured: false,
      liveUrl: "#",
      githubUrl: "https://github.com/RedStiQ",
    },
    {
      id: "fitness-app",
      title: t.projects.items.fitnessApp.title,
      description: t.projects.items.fitnessApp.description,
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "PWA", "Firebase", "Chart.js"],
      category: t.projects.categories.pwa,
      featured: false,
      liveUrl: "#",
      githubUrl: "https://github.com/RedStiQ",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="w-24 h-1 bg-minecraft-diamond mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="font-pixel text-xl text-minecraft-gold dark:text-minecraft-emerald mb-8 text-center">
            {t.projects.featured}
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden mb-4 border-2 border-minecraft-darkGrass shadow-pixel-sm">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:bg-minecraft-emerald transition-colors"
                      aria-label={t.projects.viewLive}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:bg-minecraft-emerald transition-colors"
                      aria-label={t.projects.sourceCode}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-pixel text-lg text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <span className="px-2 py-1 bg-minecraft-emerald border border-minecraft-darkGrass text-xs font-pixel text-gray-900">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-minecraft-gold/20 border border-minecraft-gold text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block minecraft-button text-xs mt-4"
                  >
                    {t.projects.viewDetails}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="font-pixel text-xl text-minecraft-gold dark:text-minecraft-emerald mb-8 text-center">
            {t.projects.more}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="minecraft-container group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-pixel text-sm text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <span className="px-2 py-1 bg-minecraft-emerald border border-minecraft-darkGrass text-xs font-pixel text-gray-900">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-minecraft-gold/20 border border-minecraft-gold text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs text-minecraft-gold hover:text-minecraft-emerald transition-colors font-pixel"
                  >
                    {t.projects.viewDetails} →
                  </Link>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-1 bg-minecraft-gold border border-minecraft-darkGrass hover:bg-minecraft-emerald transition-colors"
                      aria-label={t.projects.viewLive}
                    >
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-1 bg-minecraft-gold border border-minecraft-darkGrass hover:bg-minecraft-emerald transition-colors"
                      aria-label={t.projects.sourceCode}
                    >
                      <Github size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
