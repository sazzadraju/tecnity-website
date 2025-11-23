export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  link?: string;
}

export const products: Product[] = [
  {
    id: "oncompose",
    title: "Oncompose",
    description: "A powerful composition platform for creating and managing digital content with ease.",
    icon: "edit_note",
    features: [
      "Drag-and-drop interface",
      "Real-time collaboration",
      "Template library",
      "Version control",
      "Export to multiple formats"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebSocket"]
  },
  {
    id: "phoenix",
    title: "Phoenix",
    description: "Enterprise resource planning solution designed to streamline business operations.",
    icon: "business_center",
    features: [
      "Inventory management",
      "Financial tracking",
      "HR management",
      "Reporting and analytics",
      "Multi-location support"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular"]
  },
  {
    id: "posspot",
    title: "PosSpot",
    description: "Modern point-of-sale system for retail and hospitality businesses.",
    icon: "point_of_sale",
    features: [
      "Quick checkout",
      "Inventory tracking",
      "Sales analytics",
      "Customer management",
      "Payment integration"
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Node.js"]
  },
  {
    id: "tinyagora",
    title: "TinyAgora",
    description: "Marketplace platform connecting buyers and sellers in a seamless ecosystem.",
    icon: "store",
    features: [
      "Vendor management",
      "Product listings",
      "Secure payments",
      "Rating and reviews",
      "Order tracking"
    ],
    technologies: ["Next.js", "Express", "MySQL", "Redis"]
  }
];
