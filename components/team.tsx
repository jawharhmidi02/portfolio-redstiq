"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Team() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t.team.members.jawhar.name,
      role: t.team.members.jawhar.role,
      image: "/placeholder.svg?height=200&width=200",
      bio: t.team.members.jawhar.bio,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      social: {
        github: "github.com/jawharhmidi02",
        linkedin: "https://www.linkedin.com/in/jawharhmidi",
        email: "jawharhmidi01@gmail.com",
      },
    },
    {
      name: t.team.members.naim.name,
      role: t.team.members.naim.role,
      image: "/placeholder.svg?height=200&width=200",
      bio: t.team.members.naim.bio,
      skills: ["Node.js", "PostgreSQL", "MongoDB", "Express.js"],
      social: {
        github: "https://www.github.com/naimb24",
        linkedin: "https://www.linkedin.com/in/naim-bouchrika",
        email: "naim.bouchrika@outlook.com",
      },
    },
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.team.title}</h2>
          <div className="w-24 h-1 bg-minecraft-emerald mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="team-card"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto border-4 border-minecraft-darkGrass shadow-pixel overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative pixels */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-minecraft-gold border-2 border-minecraft-darkGrass"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-minecraft-emerald border-2 border-minecraft-darkGrass"></div>
              </div>

              {/* Member Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-pixel text-lg text-minecraft-gold dark:text-minecraft-emerald mb-1">
                    {member.name}
                  </h3>
                  <p className="font-pixel text-sm text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="font-pixel text-xs text-gray-600 dark:text-gray-400">
                    {t.team.skills}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-minecraft-gold/20 border border-minecraft-gold text-xs text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:bg-minecraft-emerald hover:shadow-pixel transition-all duration-200"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:bg-minecraft-emerald hover:shadow-pixel transition-all duration-200"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm hover:bg-minecraft-emerald hover:shadow-pixel transition-all duration-200"
                    aria-label={`${t.contact.info.email} ${member.name}`}
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
