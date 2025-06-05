import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";

// This would typically come from a database or CMS
const projects = {
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A comprehensive online store solution with advanced features",
    longDescription: `This e-commerce platform represents the pinnacle of modern online retail technology. Built with scalability and user experience in mind, it features a robust backend system capable of handling thousands of concurrent users while maintaining lightning-fast performance.

The platform includes advanced inventory management, real-time analytics, multi-payment gateway integration, and a sophisticated admin dashboard. The frontend delivers a seamless shopping experience with intuitive navigation, advanced search and filtering, and a streamlined checkout process.

Key technical achievements include implementing a microservices architecture for better scalability, integrating machine learning for personalized product recommendations, and achieving 99.9% uptime through robust error handling and monitoring systems.`,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Prisma",
    ],
    category: "E-commerce",
    client: "TechStore Inc.",
    duration: "4 months",
    team: ["Jawhar Hmidi", "Naim Bouchrika"],
    challenges: [
      "Implementing real-time inventory synchronization across multiple warehouses",
      "Creating a scalable architecture to handle Black Friday traffic spikes",
      "Integrating multiple payment gateways with different APIs and requirements",
      "Building a comprehensive admin dashboard with advanced analytics",
    ],
    solutions: [
      "Developed a custom inventory management system with WebSocket connections for real-time updates",
      "Implemented auto-scaling infrastructure with load balancing and CDN optimization",
      "Created a unified payment abstraction layer to handle different gateway implementations",
      "Built interactive dashboards using Chart.js with real-time data visualization",
    ],
    results: [
      "300% increase in conversion rate compared to the previous platform",
      "50% reduction in page load times through optimization",
      "99.9% uptime during peak shopping seasons",
      "40% increase in average order value through improved UX",
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/redstiq/ecommerce-platform",
    featured: true,
  },
  "portfolio-website": {
    id: "portfolio-website",
    title: "Creative Portfolio",
    description: "A stunning portfolio website for a digital artist",
    longDescription: `This creative portfolio showcases the work of a renowned digital artist through an immersive, interactive experience. The website features smooth animations, dynamic galleries, and innovative navigation that reflects the artist's creative vision.

The project challenged us to create a platform that not only displays artwork beautifully but also tells the artist's story through engaging interactions and seamless user experience. We implemented custom animations, parallax scrolling effects, and an innovative grid system that adapts to different artwork dimensions.

The content management system allows the artist to easily update their portfolio, manage exhibitions, and connect with potential clients through an integrated contact system.`,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: [
      "React",
      "Framer Motion",
      "Sanity CMS",
      "Vercel",
      "GSAP",
      "Three.js",
    ],
    category: "Portfolio",
    client: "Alexandra Chen - Digital Artist",
    duration: "2 months",
    team: ["Jawhar Hmidi"],
    challenges: [
      "Creating smooth animations that work across all devices",
      "Optimizing high-resolution artwork for web display",
      "Building an intuitive CMS for non-technical users",
      "Implementing 3D elements without affecting performance",
    ],
    solutions: [
      "Used Framer Motion with optimized animation techniques and reduced motion preferences",
      "Implemented progressive image loading with WebP format and lazy loading",
      "Created a custom Sanity CMS setup with visual editing capabilities",
      "Optimized Three.js scenes with LOD (Level of Detail) and efficient rendering",
    ],
    results: [
      "500% increase in portfolio inquiries",
      "90% improvement in user engagement time",
      "Featured in 5 design showcases and awards",
      "100% client satisfaction with easy content management",
    ],
    liveUrl: "https://alexandra-chen-art.com",
    githubUrl: "https://github.com/redstiq/portfolio-website",
    featured: true,
  },
  "dashboard-app": {
    id: "dashboard-app",
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard",
    longDescription: `This comprehensive analytics dashboard provides real-time insights into business performance through interactive charts, customizable widgets, and automated reporting features. Built for a growing SaaS company, it processes millions of data points daily while maintaining responsive performance.

The dashboard features advanced filtering, drill-down capabilities, and export functionality. Users can create custom views, set up alerts, and generate automated reports. The system integrates with multiple data sources and provides both high-level overviews and detailed analytics.

The project showcases our expertise in data visualization, real-time systems, and creating intuitive interfaces for complex data sets.`,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: [
      "Vue.js",
      "D3.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Chart.js",
    ],
    category: "Dashboard",
    client: "DataFlow Analytics",
    duration: "3 months",
    team: ["Naim Bouchrika", "Jawhar Hmidi"],
    challenges: [
      "Processing and visualizing large datasets in real-time",
      "Creating responsive charts that work on all screen sizes",
      "Implementing complex filtering and drill-down functionality",
      "Ensuring data security and user access controls",
    ],
    solutions: [
      "Implemented data streaming with WebSockets and efficient caching strategies",
      "Used responsive D3.js charts with adaptive layouts and touch interactions",
      "Built a flexible query system with MongoDB aggregation pipelines",
      "Implemented role-based access control with JWT authentication",
    ],
    results: [
      "80% reduction in time spent on manual reporting",
      "95% user adoption rate within the first month",
      "60% improvement in data-driven decision making",
      "Zero security incidents with robust access controls",
    ],
    liveUrl: "https://dataflow-dashboard.com",
    githubUrl: "https://github.com/redstiq/analytics-dashboard",
    featured: true,
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id: id,
  }));
}

type PageProps = { params: Promise<{ id: string }> };

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { id } = params;
  const project = projects[id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
