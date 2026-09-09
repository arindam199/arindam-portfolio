import { Brain, Code, Cpu, Database, Layout, Network, Terminal, Wrench } from 'lucide-react';

export const personalInfo = {
  name: "Arindam Banerjee",
  role: "Software Engineer | Full-Stack Developer | AI & IoT Enthusiast",
  email: "banerjeearindam888@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/arindam-banerjee-0a1627290",
    leetcode: "https://leetcode.com/u/arindamd25737",
    github: "https://github.com/arindam199",
    email: "mailto:banerjeearindam888@gmail.com"
  },
  education: {
    university: "Vellore Institute of Technology (VIT)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    specialization: "Blockchain Technology",
    timeline: "2023 - 2027"
  }
};

export const aboutHighlights = [
  {
    title: "Software Engineering",
    description: "Building scalable and practical software solutions.",
    icon: Code
  },
  {
    title: "AI & Data",
    description: "Machine learning, data processing, analytics, and intelligent systems.",
    icon: Brain
  },
  {
    title: "IoT & Systems",
    description: "Connected systems, industrial monitoring, and hardware-software integration.",
    icon: Cpu
  }
];

export const experience = [
  {
    role: "Software Engineer - AI Intern",
    company: "CGI",
    timeline: "June 2026 - July 2026",
    details: [
      "Analyzed and mapped application architecture using CAST Imaging, identifying structural dependencies across the codebase to support AI-driven software development initiatives.",
      "Built and queried a Neo4j graph database to model application components and relationships, converting static code analysis into a graph-based representation for application dependency visualization.",
      "Collaborated with engineering teams to translate code-analysis findings into actionable insights for application architecture review."
    ],
    tech: ["CAST Imaging", "Neo4j", "Graph Databases", "Architecture Analysis"],
    highlight: true
  },
  {
    role: "IoT & AI Intern",
    company: "Tata Steel",
    timeline: "June 2024 - August 2024",
    details: [
      "Developed AI-based solutions supporting industrial automation systems and real-time plant monitoring.",
      "Built IoT-enabled prototypes to capture sensor data and enable real-time monitoring of equipment parameters.",
      "Collaborated with cross-functional engineering teams on deployment and testing of automation prototypes."
    ],
    tech: ["Python", "IoT", "AI", "Industrial Automation", "Sensors"],
    highlight: false
  },
  {
    role: "Leadership & Achievements",
    company: "VIT",
    timeline: "2024 - 2026",
    details: [
      "Coordinated Revira 2024-25, supporting event planning and execution.",
      "Served as West Bengal State Coordinator for Aikya 2025-26."
    ],
    tech: ["Leadership", "Event Planning", "Team Coordination"],
    highlight: false
  }
];

export const projects = [
  {
    title: "AI Soil Analyzer",
    description: "Developed a Random Forest machine learning model achieving 95% accuracy for crop recommendation based on soil characteristics.",
    features: [
      "Processed soil data including pH, moisture, and nutrient levels",
      "Engineered features and applied preprocessing for missing values",
      "Input normalization for ML model"
    ],
    tech: ["Python", "Machine Learning", "Random Forest", "Data Processing"],
    highlight: "95% Accuracy",
    codeLink: "",
    liveLink: ""
  },
  {
    title: "Wi-Fi Controlled Road Fixing Car",
    description: "Engineered a Wi-Fi-enabled robotic vehicle for real-time pothole detection, automated material dispensing, and surface restoration.",
    features: [
      "Real-time pothole detection",
      "Automated material dispensing",
      "Surface restoration",
      "Onboard compaction roller for leveling"
    ],
    tech: ["IoT", "Hardware", "Sensors", "Robotics"],
    codeLink: "",
    liveLink: ""
  },
  {
    title: "Blockchain-Based Certificate Validation System",
    description: "Developed a certificate validation website using Ethereum and Solidity smart contracts for secure and tamper-resistant verification.",
    features: [
      "Ethereum and Solidity smart contracts",
      "Secure and tamper-resistant verification",
      "Blockchain-based certificate storage",
      "Simple web interface"
    ],
    tech: ["Ethereum", "Solidity", "Blockchain", "Web3"],
    codeLink: "",
    liveLink: ""
  },
  {
    title: "Full-Stack Shopping Cart Application",
    description: "Built a full-stack e-commerce application using React.js, Node.js, and Express.js with authentication, shopping cart, and order-processing functionality.",
    features: [
      "User authentication",
      "Shopping cart & order processing",
      "REST APIs",
      "SQL database integration",
      "Persistent user and order data"
    ],
    tech: ["React.js", "Node.js", "Express.js", "SQL"],
    codeLink: "",
    liveLink: ""
  }
];

export const skills = {
  "Languages": {
    icon: Terminal,
    items: ["Python", "C++", "JavaScript"]
  },
  "Development": {
    icon: Layout,
    items: ["React.js", "Node.js", "REST APIs", "HTML", "CSS"]
  },
  "Data & AI": {
    icon: Database,
    items: ["Machine Learning", "Data Analytics", "SQL", "Neo4j"]
  },
  "Tools": {
    icon: Wrench,
    items: ["GitHub", "VS Code", "CAST Imaging", "Power BI", "Excel", "Jupyter Notebook"]
  },
  "CS Fundamentals": {
    icon: Network,
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"]
  }
};

export const impacts = [
  { value: "4", label: "Technical Projects" },
  { value: "2", label: "Major Internships" },
  { value: "95%", label: "AI Soil Analyzer Accuracy" },
  { value: "2", label: "Leadership Roles" }
];
