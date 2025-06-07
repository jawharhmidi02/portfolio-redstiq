"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  team: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 minecraft-button"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="minecraft-container mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <div className="flex sm:items-center sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                <h1 className="font-pixel text-3xl text-gray-900 dark:text-white">
                  {project.title}
                </h1>
                <span className="px-3 py-1 bg-minecraft-emerald border-2 w-fit border-minecraft-darkGrass font-pixel text-sm text-gray-900">
                  {project.category}
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col min-[480px]:flex-row space-y-2 min-[480px]:space-y-0 min-[480px]:space-x-4 ">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-button flex items-center space-x-2"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-button bg-minecraft-emerald hover:bg-minecraft-gold flex items-center space-x-2"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Project Meta */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center">
                <Calendar size={20} className="text-gray-900" />
              </div>
              <div>
                <p className="font-pixel text-xs text-gray-600 dark:text-gray-400">
                  Duration
                </p>
                <p className="text-gray-900 dark:text-white">
                  {project.duration}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center">
                <Users size={20} className="text-gray-900" />
              </div>
              <div>
                <p className="font-pixel text-xs text-gray-600 dark:text-gray-400">
                  Team
                </p>
                <p className="text-gray-900 dark:text-white">
                  {project.team.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center">
                <Target size={20} className="text-gray-900" />
              </div>
              <div>
                <p className="font-pixel text-xs text-gray-600 dark:text-gray-400">
                  Client
                </p>
                <p className="text-gray-900 dark:text-white">
                  {project.client}
                </p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-pixel text-lg mb-4 text-minecraft-gold dark:text-minecraft-emerald">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-minecraft-gold/20 border border-minecraft-gold text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="minecraft-container mb-12"
        >
          <h3 className="font-pixel text-lg mb-6 text-minecraft-gold dark:text-minecraft-emerald">
            Project Gallery
          </h3>

          {/* Main Image */}
          <div className="mb-6">
            <img
              src={project.images[selectedImage] || "/placeholder.svg"}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className="w-full h-96 object-cover border-4 border-minecraft-darkGrass shadow-pixel"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 gap-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden border-2 shadow-pixel-sm transition-all duration-200 ${
                  selectedImage === index
                    ? "border-minecraft-gold shadow-pixel"
                    : "border-minecraft-darkGrass hover:border-minecraft-emerald"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="minecraft-container"
          >
            <h3 className="font-pixel text-lg mb-6 text-minecraft-gold dark:text-minecraft-emerald">
              Project Overview
            </h3>
            <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Challenges */}
            <div className="minecraft-container">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-minecraft-redstone border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center">
                  <Target size={16} className="text-white" />
                </div>
                <h3 className="font-pixel text-lg text-minecraft-gold dark:text-minecraft-emerald">
                  Challenges
                </h3>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-minecraft-redstone border border-minecraft-darkGrass mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="minecraft-container">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-minecraft-emerald border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center">
                  <Lightbulb size={16} className="text-gray-900" />
                </div>
                <h3 className="font-pixel text-lg text-minecraft-gold dark:text-minecraft-emerald">
                  Solutions
                </h3>
              </div>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-minecraft-emerald border border-minecraft-darkGrass mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="minecraft-container mt-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-minecraft-gold border-2 border-minecraft-darkGrass shadow-pixel-sm flex items-center justify-center">
              <TrendingUp size={16} className="text-gray-900" />
            </div>
            <h3 className="font-pixel text-lg text-minecraft-gold dark:text-minecraft-emerald">
              Results & Impact
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-minecraft-gold border border-minecraft-darkGrass mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {result}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="minecraft-container">
            <h3 className="font-pixel text-xl mb-4 text-minecraft-gold dark:text-minecraft-emerald">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Let's craft something amazing together. Get in touch to discuss
              your next project.
            </p>
            <Link
              href="/#contact"
              className="max-[390px]:px-2 max-[390px]:text-[12px] minecraft-button"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
