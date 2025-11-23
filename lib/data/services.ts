export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "ai-solutions-lab",
    title: "AI Solutions Lab",
    category: "AI Services",
    description: "Custom AI development, intelligent agents, chatbots, and automation solutions.",
    fullDescription: "We build and integrate AI-powered systems that transform your business operations and enhance decision-making. From intelligent chatbots to autonomous AI agents, we create solutions that learn, adapt, and deliver measurable results.",
    icon: "psychology",
    features: [
      "Custom AI model development",
      "AI agents and chatbots",
      "Machine learning integration",
      "Natural language processing",
      "AI automation workflows",
      "Predictive analytics"
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "Hugging Face"]
  },
  {
    id: "bizcore",
    title: "BizCore",
    category: "Software Development",
    description: "Customizable enterprise application tailored to your business needs.",
    fullDescription: "Streamline operations, improve efficiency, and scale your business with our robust software solutions. We develop enterprise-grade applications that integrate seamlessly with your existing systems and grow with your business.",
    icon: "business_center",
    features: [
      "Custom enterprise software",
      "Business process automation",
      "System integration",
      "Scalable architecture",
      "Cloud-native development",
      "Real-time data processing"
    ],
    technologies: ["React", "Node.js", "Java", "PostgreSQL", "AWS"]
  },
  {
    id: "mobilehub",
    title: "MobileHub",
    category: "Mobile Development",
    description: "Cross-platform mobile application development for iOS and Android.",
    fullDescription: "Create engaging mobile experiences that connect with your customers anytime, anywhere. Our mobile solutions are built with performance, security, and user experience in mind, ensuring your app stands out in the marketplace.",
    icon: "phone_android",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "Native performance",
      "Offline functionality",
      "Push notifications",
      "App store optimization"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  {
    id: "architectpro",
    title: "ArchitectPro",
    category: "Solution Architecture",
    description: "Professional solution architecture design and technology consulting.",
    fullDescription: "We design scalable, secure, and future-proof system architectures aligned with your business goals. Our architects bring years of experience to help you make the right technology decisions and build systems that last.",
    icon: "architecture",
    features: [
      "System architecture design",
      "Technology stack selection",
      "Scalability planning",
      "Security architecture",
      "Performance optimization",
      "Disaster recovery planning"
    ],
    technologies: ["Microservices", "Docker", "Kubernetes", "AWS", "Azure"]
  },
  {
    id: "cloudops",
    title: "CloudOps",
    category: "Solution Architecture",
    description: "Cloud migration, infrastructure management, and optimization services.",
    fullDescription: "Leverage the power of cloud computing to reduce costs, improve performance, and ensure business continuity. We handle everything from cloud migration to ongoing infrastructure management and optimization.",
    icon: "cloud",
    features: [
      "Cloud migration strategy",
      "Infrastructure as code",
      "Cost optimization",
      "DevOps automation",
      "24/7 monitoring",
      "Auto-scaling configuration"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Jenkins"]
  },
  {
    id: "supportpro",
    title: "SupportPro",
    category: "Maintenance & Support",
    description: "Comprehensive solution upgradation and maintenance services.",
    fullDescription: "Keep your systems running smoothly with proactive monitoring, regular updates, and 24/7 technical support. We ensure your applications stay secure, performant, and up-to-date with the latest technologies.",
    icon: "support_agent",
    features: [
      "24/7 technical support",
      "Proactive monitoring",
      "Regular updates and patches",
      "Performance optimization",
      "Security audits",
      "Incident response management"
    ],
    technologies: ["Monitoring Tools", "CI/CD", "Security Tools", "Analytics"]
  }
];
