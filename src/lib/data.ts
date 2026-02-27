// Portfolio Data - Typed with TypeScript

export type ProjectCategory = "web-development" | "data-analyst";

export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  image: string;
  year: string;
  link?: string;
  category: ProjectCategory;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialLink?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

// Personal Info
export const personalInfo = {
  name: "Dimas Rizki",
  role: "Frontend Developer & Data Analyst",
  tagline: "Crafting Digital Experiences",
  email: "dimassrizkii704@gmail.com",
  location: "Indonesia, Bogor",
  yearsExperience: "3+",
  about: {
    intro: "I'm a data-driven Information Systems student with a strong foundation in data analysis and web development, focused on building impactful digital solutions.",
    highlight: "Turning raw data into actionable insights — and transforming those insights into functional web systems.",
    philosophy: "Data provides direction, and technology brings it to life. I believe every system should be built on structured logic, meaningful analysis, and intuitive user experience.",
    focus: "My focus lies in analyzing datasets, developing analytical dashboards, and building modern web applications that are not only visually clean and responsive, but also powered by accurate, insight-driven decision making.",
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "20+", label: "Projects Completed" },
      { value: "15+", label: "Certificates" },
      { value: "2", label: "Specializations" }
    ],
    specialties: [
      "React & Next.js",
      "TypeScript",
      "Data Visualization",
      "Python & SQL",
      "UI/UX Design",
      "Performance Optimization"
    ]
  },
  social: {
    linkedin: "https://www.linkedin.com/in/dimas-rizki-dwi-saputra/",
    github: "https://github.com/ymoricode",
    instagram: "https://www.instagram.com/dimasrizkids/"
  }
};

// Projects Data
export const projects: Project[] = [
  // === Web Development Projects ===
  {
    id: 1,
    title: "MyFinance",
    role: "Full-stack Development",
    description: "A comprehensive financial management dashboard with real-time analytics, budget tracking, and intuitive data visualization.",
    image: "/images/projek1.png",
    year: "2026",
    link: "https://github.com/ymoricode/noteflow-app",
    category: "web-development"
  },
  {
    id: 2,
    title: "Menu Digital Warung Bakso Putra Solo",
    role: "Full-stack Development",
    description: "Restaurant digital menu solution with QR integration, order management, and payment processing via Xendit.",
    image: "/images/projekk3.png",
    year: "2026",
    link: "https://github.com/ymoricode/menu-digital",
    category: "web-development"
  },
  {
    id: 3,
    title: "Plant Diagnosis AI",
    role: "Full-stack Development & AI Integration",
    description: "AI-powered plant health diagnosis tool using Gemini AI for accurate disease detection and treatment recommendations.",
    image: "/images/projek5.png",
    year: "2025",
    link: "https://github.com/ymoricode/Plantcare-ai",
    category: "web-development"
  },
    {
    id: 4,
    title: "Mori AI",
    role: "Full-stack Development & AI Integration",
    description: "This project is an AI-based web application built with ReactJS, TailwindCSS, and Appwrite for user authentication and data management. The app leverages the Gemini API for AI-powered functionalities.",
    image: "/images/projek4.png",
    year: "2025",
    link: "https://github.com/ymoricode/MoriAI-react",
    category: "web-development"
  },
      {
    id: 5,
    title: "Portfolio Website",
    role: "Full-stack Development",
    description: "This project is an AI-based web application built with ReactJS, TailwindCSS, and Appwrite for user authentication and data management. The app leverages the Gemini API for AI-powered functionalities.",
    image: "/images/projekk2.png",
    year: "2026",
    link: "https://github.com/ymoricode/MoriAI-react",
    category: "web-development"
  },
  // === Data Analyst Projects ===
  {
    id: 6,
    title: "Sales Performance Dashboard",
    role: "Data Analysis & Visualization",
    description: "Interactive sales analytics dashboard built with Python and Tableau, featuring trend analysis, forecasting, and KPI tracking across multiple regions.",
    image: "/images/projek-da1.png",
    year: "2025",
    link: "#",
    category: "data-analyst"
  },
  {
    id: 7,
    title: "Customer Segmentation Analysis",
    role: "Data Science & Machine Learning",
    description: "Customer behavior analysis using K-Means clustering and RFM analysis to identify key segments and optimize marketing strategies.",
    image: "/images/projek-da2.png",
    year: "2025",
    link: "#",
    category: "data-analyst"
  },
  {
    id: 8,
    title: "E-Commerce Data Pipeline",
    role: "Data Engineering & Analysis",
    description: "End-to-end data pipeline for e-commerce analytics using Python, SQL, and Power BI with automated ETL processes and real-time reporting.",
    image: "/images/projek-da3.png",
    year: "2025",
    link: "#",
    category: "data-analyst"
  }
];

// Certificates Data
export const certificates: Certificate[] = [
  {
    id: 1,
    title: "React Developer Certificate",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certi-1.png",
    credentialLink: "#"
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certi-2.png",
    credentialLink: "#"
  },
  {
    id: 3,
    title: "Frontend Web Development",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certi-3.png",
    credentialLink: "#"
  },
  {
    id: 4,
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certi-4.png",
    credentialLink: "#"
  },
  {
    id: 5,
    title: "Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certi-5.png",
    credentialLink: "#"
  },
  {
    id: 6,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certi-6.png",
    credentialLink: "#"
  },
  {
    id: 7,
    title: "Belajar Dasar SQL",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/images/certi-6.2.png",
    credentialLink: "#"
  },
  {
    id: 8,
    title: "Belajar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certi-6.3.png",
    credentialLink: "#"
  },
  {
    id: 9,
    title: "Belajar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    year: "2025",
    image: "/images/certi-6.4.png",
    credentialLink: "#"
  },
  {
    id: 10,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    image: "/images/certi-7.png",
    credentialLink: "#"
  },
  {
    id: 11,
    title: "Front End Development Liblaries",
    issuer: "freeCodeCamp",
    year: "2023",
    image: "/images/certi-8.png",
    credentialLink: "#"
  },
  {
    id: 12,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    image: "/images/certi-9.png",
    credentialLink: "#"
  },
  {
    id: 13,
    title: "Frontend Javascript",
    issuer: "MySkill",
    year: "2023",
    image: "/images/certi-10.png",
    credentialLink: "#"
  },
  {
    id: 14,
    title: "Frontend React",
    issuer: "MySkill",
    year: "2023",
    image: "/images/certi-11.png",
    credentialLink: "#"
  },
  {
    id: 15,
    title: "Belajar PHP",
    issuer: "Always Ngoding",
    year: "2023",
    image: "/images/certi-12.png",
    credentialLink: "#"
  },
  {
    id: 16,
    title: "Belajar Javascript",
    issuer: "Always Ngoding",
    year: "2023",
    image: "/images/certi-13.png",
    credentialLink: "#"
  },
  {
    id: 17,
    title: "Belajar CSS",
    issuer: "Always Ngoding",
    year: "2023",
    image: "/images/certi-14.png",
    credentialLink: "#"
  },
  {
    id: 18,
    title: "Belajar HTML",
    issuer: "Always Ngoding",
    year: "2023",
    image: "/images/certi-15.png",
    credentialLink: "#"
  },
];

// Services Data
export const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building modern, responsive web applications using React, Next.js, and TypeScript with focus on performance and user experience.",
    icon: "code"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces and seamless user experiences through research-driven design and modern aesthetics.",
    icon: "palette"
  },
  {
    id: 3,
    title: "Web Consulting",
    description: "Strategic guidance on technology choices, architecture decisions, and best practices for your web projects.",
    icon: "lightbulb"
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Auditing and optimizing web applications for speed, accessibility, and search engine visibility.",
    icon: "rocket"
  }
];

// Process Steps
export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    description: "Understanding your vision, goals, and requirements through in-depth consultation and research."
  },
  {
    id: 2,
    step: "02",
    title: "Strategy",
    description: "Developing a comprehensive plan including user flows, wireframes, and technical architecture."
  },
  {
    id: 3,
    step: "03",
    title: "Design",
    description: "Creating visual designs that align with your brand while ensuring optimal user experience."
  },
  {
    id: 4,
    step: "04",
    title: "Development",
    description: "Building your project with clean, maintainable code and modern best practices."
  },
  {
    id: 5,
    step: "05",
    title: "Launch & Support",
    description: "Deploying your project and providing ongoing support to ensure continued success."
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager, TechCorp",
    quote: "Working with Dimas was a game-changer. His attention to detail and understanding of user experience transformed our product."
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Founder, StartupXYZ",
    quote: "The quality of work exceeded our expectations. Dimas delivered a website that truly represents our brand's vision."
  },
  {
    id: 3,
    name: "Emily Park",
    role: "Creative Director, DesignHub",
    quote: "Exceptional frontend skills combined with a designer's eye. Rare to find someone who excels at both."
  }
];

// Navigation
export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#work" },
  { name: "Certificate", href: "#certificates" },
  { name: "Contact", href: "#contact" }
];
