export type Language = "en" | "it" | "fr";

export interface Translation {
  nav: {
    about: string;
    services: string;
    projects: string;
    team: string;
    contact: string;
  };

  hero: {
    title: string;
    subtitle: string;
    description: string;
    viewWork: string;
    startProject: string;
  };

  about: {
    title: string;
    mission: string;
    missionText: string;
    description: string;
    features: {
      cleanCode: {
        title: string;
        description: string;
      };
      creativeDesign: {
        title: string;
        description: string;
      };
      fastPerformance: {
        title: string;
        description: string;
      };
      teamCollaboration: {
        title: string;
        description: string;
      };
    };
  };

  services: {
    title: string;
    subtitle: string;
    items: {
      customWebsite: {
        title: string;
        description: string;
        features: string[];
      };
      ecommerce: {
        title: string;
        description: string;
        features: string[];
      };
      mobileFirst: {
        title: string;
        description: string;
        features: string[];
      };
      backend: {
        title: string;
        description: string;
        features: string[];
      };
      cms: {
        title: string;
        description: string;
        features: string[];
      };
      maintenance: {
        title: string;
        description: string;
        features: string[];
      };
    };
  };

  projects: {
    title: string;
    subtitle: string;
    featured: string;
    more: string;
    viewDetails: string;
    viewLive: string;
    sourceCode: string;
    categories: {
      ecommerce: string;
      portfolio: string;
      dashboard: string;
      webapp: string;
      cms: string;
      pwa: string;
    };
    items: {
      ecommercePlatform: {
        title: string;
        description: string;
      };
      portfolioWebsite: {
        title: string;
        description: string;
      };
      dashboardApp: {
        title: string;
        description: string;
      };
      bookingSystem: {
        title: string;
        description: string;
      };
      blogPlatform: {
        title: string;
        description: string;
      };
      fitnessApp: {
        title: string;
        description: string;
      };
    };
  };

  team: {
    title: string;
    subtitle: string;
    skills: string;
    members: {
      jawhar: {
        name: string;
        role: string;
        bio: string;
      };
      naim: {
        name: string;
        role: string;
        bio: string;
      };
    };
  };

  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      service: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      selectService: string;
      required: string;
    };
    info: {
      title: string;
      email: string;
      phone: string;
      location: string;
      locationValue: string;
    };
    why: {
      title: string;
      reasons: string[];
    };
    success: {
      title: string;
      message: string;
    };
    error: {
      title: string;
      message: string;
    };
  };

  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    madeWith: string;
    rights: string;
    year: string;
  };

  toast: {
    success: string;
    error: string;
    contactSuccess: {
      title: string;
      description: string;
    };
    contactError: {
      title: string;
      description: string;
    };
  };

  common: {
    backToTop: string;
    loading: string;
    error: string;
    tryAgain: string;
    close: string;
    open: string;
    menu: string;
    toggleTheme: string;
    changeLanguage: string;
  };

  projectDetail: {
    backToProjects: string;
    liveDemo: string;
    sourceCode: string;
    duration: string;
    team: string;
    client: string;
    technologiesUsed: string;
    projectGallery: string;
    projectOverview: string;
    challenges: string;
    solutions: string;
    resultsImpact: string;
    readyToStart: string;
    readyToStartDescription: string;
    startYourProject: string;
  };

  meta: {
    title: string;
    description: string;
    keywords: string;
  };
}
