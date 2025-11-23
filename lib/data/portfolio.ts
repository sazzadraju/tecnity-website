export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Redesign",
    client: "RetailCo",
    description: "Complete redesign and development of a modern e-commerce platform.",
    challenge: "The client's existing platform was outdated, slow, and had poor user experience leading to high cart abandonment rates.",
    solution: "We rebuilt the platform using Next.js and implemented a modern UI/UX design with optimized checkout flow.",
    results: [
      "40% increase in conversion rate",
      "60% faster page load times",
      "25% reduction in cart abandonment"
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "Web Development"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management App",
    client: "MediCare Solutions",
    description: "Mobile application for patient management and telemedicine services.",
    challenge: "Healthcare providers needed a secure, HIPAA-compliant solution for remote patient consultations.",
    solution: "Developed a cross-platform mobile app with video consultation, appointment scheduling, and secure messaging.",
    results: [
      "10,000+ active users in first 6 months",
      "95% patient satisfaction rate",
      "50% reduction in no-shows"
    ],
    technologies: ["React Native", "Node.js", "WebRTC", "AWS"],
    category: "Mobile Development"
  },
  {
    id: "fintech-dashboard",
    title: "Financial Analytics Dashboard",
    client: "FinanceHub",
    description: "Real-time financial analytics and reporting dashboard for investment firms.",
    challenge: "Complex financial data needed to be visualized in an intuitive, real-time dashboard.",
    solution: "Created a responsive dashboard with real-time data visualization and customizable reports.",
    results: [
      "Real-time data processing",
      "30% faster decision making",
      "Improved data accuracy"
    ],
    technologies: ["React", "D3.js", "Python", "Redis"],
    category: "Data Analytics"
  },
  {
    id: "logistics-system",
    title: "Logistics Management System",
    client: "ShipFast Logistics",
    description: "Comprehensive logistics and fleet management solution.",
    challenge: "Manual tracking processes led to inefficiencies and delivery delays.",
    solution: "Implemented an automated system with GPS tracking, route optimization, and real-time updates.",
    results: [
      "35% improvement in delivery times",
      "20% reduction in fuel costs",
      "Enhanced customer satisfaction"
    ],
    technologies: ["Java", "Spring Boot", "Google Maps API", "MySQL"],
    category: "Enterprise Software"
  }
];
