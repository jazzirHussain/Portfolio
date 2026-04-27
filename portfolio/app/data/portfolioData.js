export const stats = [
  { num: "600", label: "Daily active users", suffix: "+" },
  { num: "8", label: "Production projects", suffix: "+" },
  { num: "5", label: "Person team led" },
  { num: "1", label: "App on Play Store" },
];

export const skillsTicker = [
  "React", "Next.js", "TypeScript", "Node.js", "React Native", "AWS EC2",
  "Lambda", "S3", "CloudFront", "Nginx", "Firebase", "PostgreSQL",
  "MongoDB", "MQTT", "OpenAI API", "Razorpay", "RFID", "PL/SQL",
  "Docker", "Figma"
];

export const skillLayers = [
  {
    label: "Layer 01",
    name: "Frontend",
    desc: "Pixel-perfect UIs from Figma to live. Responsive, fast, accessible.",
    color: "blue",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Figma → Code"]
  },
  {
    label: "Layer 02",
    name: "Backend & APIs",
    desc: "REST APIs, microservices, real-time systems, government API integrations.",
    color: "green",
    tags: ["Node.js", "Express", "Firebase Functions", "MQTT", "Microservices"]
  },
  {
    label: "Layer 03",
    name: "Cloud & DevOps",
    desc: "Deploy and maintain real production infrastructure. Not just \"push to Vercel.\"",
    color: "amber",
    tags: ["AWS EC2", "Lambda", "S3", "CloudFront", "Nginx"]
  },
  {
    label: "Layer 04",
    name: "Mobile",
    desc: "Cross-platform apps deployed to production. Live on the Play Store.",
    color: "purple",
    tags: ["React Native", "Expo", "Play Store", "Push Notifications"]
  },
  {
    label: "Layer 05",
    name: "Databases",
    desc: "Schema design, time-series data, real-time sync, enterprise PL/SQL.",
    color: "teal",
    tags: ["PostgreSQL", "Firestore", "MongoDB", "PL/SQL"]
  },
  {
    label: "Layer 06",
    name: "Integrations",
    desc: "Payments, AI, IoT, government APIs — I've wired them all into production.",
    color: "coral",
    tags: ["OpenAI API", "Razorpay", "Govt e-Invoice API", "RFID", "IoT / MQTT"]
  }
];

export const projects = [
  {
    title: "Construction Management App",
    type: "Mobile · Android · Real-time",
    desc: "End-to-end mobile platform for tracking construction project progress, live on the Play Store.",
    highlights: [
      "Real-time camera streaming from job sites",
      "Budget tracking and financial overview",
      "Activity feed with live updates",
      "Gallery management and documentation",
      "Deployed and live on Google Play Store"
    ],
    stack: ["React Native", "Firebase", "Real-time Streaming", "Play Store"],
    featured: true,
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.riolivings.app.twa&pcampaignid=web_share",
      github: "https://github.com/jazzirHussain/Construction-Management-App",
      video: "#"
    }
  },
  {
    title: "AI Business Valuation Tool",
    type: "SaaS · Multi-tenant · AI · Payments",
    badge: "100+ daily active users",
    desc: "Generates detailed company valuation reports using AI — applying DCF, Berkus, and Venture Capital methods automatically. Live with paying customers.",
    highlights: [
      "Integrated OpenAI API for AI-powered analysis",
      "Multiple valuation methodologies (DCF, Berkus, VC)",
      "Razorpay payment gateway — real paying users",
      "Detailed PDF report generation",
      "Business metrics input and processing"
    ],
    stack: ["React", "Node.js", "OpenAI API", "Razorpay", "PDF Generation"],
    featured: true,
    links: {
      demo: "https://ghcvaluation.vercel.app/",
      github: "https://github.com/jazzirHussain/AI-Business-Valuation-Product",
      video: "#"
    }
  },
  {
    title: "School Management Platform",
    type: "Enterprise · Multi-branch · RFID",
    badge: "500+ daily active users",
    desc: "Full-scale school ERP with complex scheduling, RFID attendance, payroll, and multi-branch support.",
    highlights: [
      "RFID-based student attendance system",
      "Complex slot booking and rescheduling engine",
      "Staff payroll and management",
      "Multi-branch, multi-role access control",
      "Project tracking with submission review rounds"
    ],
    stack: ["React", "Node.js", "RFID", "PostgreSQL"],
    featured: true,
    links: {
      github: "https://github.com/SophiseTech/Aethens_Dashboard_Frontend.git",
      github: "https://github.com/SophiseTech/Aethens_Dashboard_Backend.git",
      video: "#"
    }
  },
  {
    title: "IoT Analytics Dashboard",
    type: "IoT · Analytics · AWS",
    desc: "Real-time analytics platform where users register IoT devices that stream time-series data for visualization.",
    highlights: [
      "MQTT broker for device communication",
      "Time-series data processing and storage",
      "Real-time graphs and insights",
      "Full AWS deployment — EC2, CloudFront",
      "Device onboarding and management"
    ],
    stack: ["MQTT", "AWS EC2", "CloudFront", "Time-series DB"],
    links: {
      github: "https://github.com/jazzirHussain/IoT-Analytics-Dashboard",
      video: "#"
    }
  },
  {
    title: "Billing Automation Software",
    type: "SaaS · Govt API · Automation",
    desc: "Eliminates double-entry for plywood manufacturers by generating e-Invoice and e-Waybill simultaneously from a single form.",
    highlights: [
      "Integrated official Government e-Invoice API",
      "e-Waybill generation in same workflow",
      "Reduced billing time from 20 mins to under 2",
      "PDF report download for both documents"
    ],
    stack: ["React", "Govt API", "Node.js", "PDF"],
    links: {
      github: "#",
      video: "#"
    }
  },
  {
    title: "E-Commerce Platform",
    type: "E-commerce · Full stack",
    desc: "Full-featured e-commerce platform with product management, cart, checkout, and payment integration.",
    highlights: [
      "Product catalog and inventory management",
      "Cart and checkout flow",
      "Payment gateway integration",
      "Order management and tracking"
    ],
    stack: ["React", "Node.js", "Razorpay", "MongoDB"],
    links: {
      github: "#",
      video: "#"
    }
  }
];

export const caseStudies = [
  {
    id: "01",
    title: "School Management Platform",
    metrics: [
      { val: "500+", label: "Daily active users" },
      { val: "5+", label: "Branches managed" }
    ],
    desc: "A school needed to manage students, staff, attendance, payroll, and project submissions across multiple branches — all in one platform. The hard part was the RFID attendance system and the complex slot-booking engine that handles rescheduling across branches and roles without conflicts.",
    img: "athens.png",
    links: {
      github: "#",
      video: "#"
    }
  },
  {
    id: "02",
    title: "AI Business Valuation Tool",
    metrics: [
      { val: "100+", label: "Daily active users" },
      { val: "3", label: "Valuation methods" }
    ],
    desc: "Built a SaaS product from scratch — users input business financials and the app generates a full valuation report using DCF, Berkus, and Venture Capital methods powered by OpenAI. Integrated Razorpay for payments, making this a live commercial product with real paying customers.",
    img: "ghc.png",
    reverse: true,
    links: {
      demo: "#",
      github: "#",
      video: "#"
    }
  },
  {
    id: "03",
    title: "Construction Management App",
    metrics: [
      { val: "Live", label: "On Play Store" },
      { val: "RT", label: "Camera streaming" }
    ],
    desc: "A construction company needed field teams and managers to stay in sync in real time. Built a React Native app from scratch with live camera streaming from job sites, budget tracking, activity feeds, and gallery management. Handled end-to-end — from architecture to Play Store deployment.",
    img: "rio.png",
    links: {
      playstore: "#",
      github: "#",
      video: "#"
    }
  }
];

export const experience = [
  {
    period: "2024 –\nPresent",
    role: "Software Developer",
    company: "Tata Consultancy Services (TCS)",
    desc: "Part of the FCSO ECM team managing an enterprise case management platform. Responsible for building and maintaining ETL batch processes that correlate financial risk events from multiple vendors (AML, NS), generate actionable cases, and feed the investigator UI. Working extensively with PL/SQL and enterprise-grade data pipelines."
  },
  {
    period: "2022 –\n2024",
    role: "Co-founder & Lead Developer",
    company: "Nyon — Dev Studio",
    desc: "Founded and ran a small software studio with a team of 5–6 members. Led architecture decisions, client relationships, and end-to-end delivery across 8+ production projects. Built products spanning mobile apps, SaaS platforms, IoT dashboards, and enterprise software — several reaching hundreds of daily active users. Handled cloud deployment, payment integrations, and post-launch support independently."
  },
  {
    period: "2022 –\n2023",
    role: "CTO",
    company: "IEEE & IEDC College Chapters",
    desc: "Led technical initiatives for two prestigious engineering clubs simultaneously. Built the college admission chatbot UI, developed websites for tech festivals, and mentored junior developers. Managed end-to-end technical delivery for events with hundreds of participants."
  },
  {
    period: "2021 –\n2022",
    role: "Remote Web Developer Intern",
    company: "Startup (Remote)",
    desc: "Hired in second year of college. Started at ₹5k/month, grew to ₹15k/month over the year. Implemented Figma designs into production-ready React frontends, deployed on AWS EC2 with Nginx reverse proxy, migrated a Spring Boot backend to AWS Lambda microservices, and worked on Firebase function backends for a mobile game."
  }
];

export const contactInfo = [
  { label: "Email", val: "jazzir@email.com", href: "mailto:jazzir@email.com" },
  { label: "LinkedIn", val: "linkedin.com/in/jazzirhussain", href: "#" },
  { label: "GitHub", val: "github.com/jazzirhussain", href: "#" },
  { label: "Location", val: "India · Open to relocate to Germany 🇩🇪" },
  { label: "Languages", val: "English (fluent) · German (learning · A1)" }
];
