import type { Translation } from "../types";

export const en: Translation = {
  nav: {
    about: "About",
    services: "Services",
    projects: "Projects",
    team: "Team",
    contact: "Contact",
  },
  hero: {
    title: "RedStiQ",
    subtitle: "Mining for Web Solutions, Crafting Your Success",
    description:
      "We craft pixel-perfect digital experiences with the precision of a master builder. From custom websites to complex web applications, we mine the best technologies to build your digital empire.",
    viewWork: "View Our Work",
    startProject: "Start Your Project",
  },
  about: {
    title: "About RedStiQ",
    mission: "Our Mission",
    missionText:
      "RedStiQ Web Solutions is a team of passionate developers who believe in crafting digital experiences with the same attention to detail as a master Minecraft builder. We combine creativity, technical expertise, and a unique aesthetic to deliver solutions that help businesses thrive in the digital world.",
    description:
      "Our approach is collaborative, innovative, and always focused on delivering exceptional results. We don't just build websites – we craft digital experiences that engage, convert, and inspire.",
    features: {
      cleanCode: {
        title: "Clean Code",
        description:
          "We write maintainable, scalable code that stands the test of time.",
      },
      creativeDesign: {
        title: "Creative Design",
        description:
          "Unique designs that capture your brand essence and engage users.",
      },
      fastPerformance: {
        title: "Fast Performance",
        description:
          "Lightning-fast websites optimized for speed and user experience.",
      },
      teamCollaboration: {
        title: "Team Collaboration",
        description:
          "We work closely with you throughout the entire development process.",
      },
    },
  },
  services: {
    title: "Our Services",
    subtitle:
      "We offer comprehensive web development services to bring your digital vision to life",
    items: {
      customWebsite: {
        title: "Custom Website Development",
        description:
          "Tailored websites built from the ground up to match your unique vision and requirements.",
        features: [
          "Responsive Design",
          "SEO Optimized",
          "Fast Loading",
          "Modern Tech Stack",
        ],
      },
      ecommerce: {
        title: "E-commerce Solutions",
        description:
          "Complete online stores with secure payment processing and inventory management.",
        features: [
          "Payment Integration",
          "Inventory Management",
          "Order Tracking",
          "Admin Dashboard",
        ],
      },
      mobileFirst: {
        title: "Mobile-First Design",
        description:
          "Websites that look and perform perfectly on all devices and screen sizes.",
        features: [
          "Touch Optimized",
          "Fast Mobile Loading",
          "App-like Experience",
          "Cross-Platform",
        ],
      },
      backend: {
        title: "Backend Development",
        description:
          "Robust server-side solutions with databases, APIs, and cloud integration.",
        features: [
          "API Development",
          "Database Design",
          "Cloud Hosting",
          "Security Implementation",
        ],
      },
      cms: {
        title: "CMS Development",
        description:
          "Content management systems that make updating your website simple and intuitive.",
        features: [
          "WordPress",
          "Custom CMS",
          "Easy Updates",
          "User Management",
        ],
      },
      maintenance: {
        title: "Maintenance & Support",
        description:
          "Ongoing support to keep your website secure, updated, and performing optimally.",
        features: [
          "Security Updates",
          "24/7 Monitoring",
          "Performance Optimization",
          "Bug Fixes",
        ],
      },
    },
  },
  projects: {
    title: "Our Projects",
    subtitle:
      "Explore our portfolio of successful projects and digital solutions",
    featured: "Featured Projects",
    more: "More Projects",
    viewDetails: "View Details",
    viewLive: "Live Demo",
    sourceCode: "Source Code",
    categories: {
      ecommerce: "E-commerce",
      portfolio: "Portfolio",
      dashboard: "Dashboard",
      webapp: "Web App",
      cms: "CMS",
      pwa: "PWA",
    },
    items: {
      ecommercePlatform: {
        title: "E-commerce Platform",
        description:
          "A full-featured online store with payment processing, inventory management, and admin dashboard.",
      },
      portfolioWebsite: {
        title: "Creative Portfolio",
        description:
          "A stunning portfolio website for a digital artist with interactive galleries and smooth animations.",
      },
      dashboardApp: {
        title: "Analytics Dashboard",
        description:
          "Real-time data visualization dashboard with interactive charts and reporting features.",
      },
      bookingSystem: {
        title: "Booking System",
        description:
          "Complete booking and reservation system for restaurants with table management.",
      },
      blogPlatform: {
        title: "Blog Platform",
        description:
          "Modern blogging platform with markdown support and social features.",
      },
      fitnessApp: {
        title: "Fitness Tracker",
        description:
          "Progressive web app for tracking workouts and fitness goals.",
      },
    },
  },
  team: {
    title: "Meet Our Team",
    subtitle: "The talented individuals behind RedStiQ's success",
    skills: "Skills:",
    members: {
      jawhar: {
        name: "Jawhar Hmidi",
        role: "Full Stack Developer",
        bio: "Passionate Full Stack Developer with expertise in React, Next.js, and modern web technologies. Loves creating pixel-perfect user interfaces.",
      },
      naim: {
        name: "Naim Bouchrika",
        role: "Full Stack Developer",
        bio: "Expert Full Stack Developer specializing in Node.js, databases, and API development. Ensures robust and scalable server-side solutions.",
      },
    },
  },
  contact: {
    title: "Get In Touch",
    subtitle:
      "Ready to start your project? Let's craft something amazing together!",
    form: {
      title: "Start Your Project",
      name: "Name",
      namePlaceholder: "Your Name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      phonePlaceholder: "+12 345 678",
      company: "Company",
      companyPlaceholder: "Your Company (Optional)",
      service: "Service of Interest",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      send: "Send Message",
      sending: "Sending...",
      selectService: "Select a service",
      required: "*",
    },
    info: {
      title: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Remote Worldwide",
    },
    why: {
      title: "Why Choose RedStiQ?",
      reasons: [
        "Unique Minecraft-inspired design approach",
        "Modern technologies and best practices",
        "Collaborative development process",
        "Ongoing support and maintenance",
      ],
    },
    success: {
      title: "Message sent successfully!",
      message: "We'll get back to you soon.",
    },
    error: {
      title: "Failed to send message.",
      message: "Please try again.",
    },
  },
  footer: {
    description:
      "Mining for Web Solutions, Crafting Your Success. We build unique digital experiences with the precision of master builders.",
    quickLinks: "Quick Links",
    contact: "Contact",
    madeWith: "and lots of pixels",
    rights: "RedStiQ Web Solutions. All rights reserved.",
    year: new Date().getFullYear().toString(),
  },
  toast: {
    success: "Success!",
    error: "Error!",
    contactSuccess: {
      title: "Success!",
      description: "Contact Sent Successfully!",
    },
    contactError: {
      title: "Failed!",
      description: "An Error occurred, please try again!",
    },
  },
  common: {
    backToTop: "Back to top",
    loading: "Loading...",
    error: "Error",
    tryAgain: "Try again",
    close: "Close",
    open: "Open",
    menu: "Menu",
    toggleTheme: "Toggle theme",
    changeLanguage: "Change language",
  },
  projectDetail: {
    backToProjects: "Back to Projects",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    duration: "Duration",
    team: "Team",
    client: "Client",
    technologiesUsed: "Technologies Used",
    projectGallery: "Project Gallery",
    projectOverview: "Project Overview",
    challenges: "Challenges",
    solutions: "Solutions",
    resultsImpact: "Results & Impact",
    readyToStart: "Ready to Start Your Project?",
    readyToStartDescription:
      "Let's craft something amazing together. Get in touch to discuss your next project.",
    startYourProject: "Start Your Project",
  },
  meta: {
    title: "RedStiQ - Mining for Web Solutions, Crafting Your Success",
    description:
      "Professional web development services with a unique Minecraft-inspired approach. Custom websites, e-commerce, and digital solutions.",
    keywords:
      "web development, minecraft theme, custom websites, e-commerce, RedStiQ",
  },
};
