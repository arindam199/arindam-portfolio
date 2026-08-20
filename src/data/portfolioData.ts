import { Brain, Code, Cpu, Database, Layout, LineChart, Network, Server, Terminal, Wrench } from 'lucide-react';

export const personalInfo = {
  name: "Arindam Banerjee",
  role: "Software Engineer | Full-Stack Developer | AI & IoT Enthusiast",
  email: "banerjeearindam888@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/arindam-banerjee-0a1627290",
    leetcode: "https://leetcode.com/u/arindam25737",
    github: "https://github.com/arindam199",
    email: "mailto:banerjeearindam888@gmail.com"
  },
  education: {
    university: "Vellore Institute of Technology (VIT)",
    degree: "Bachelor of Technology in Computer Science",
    specialization: "Blockchain Technology",
    timeline: "2023 – 2027"
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
    role: "Software Engineer AI Intern",
    company: "CGI",
    timeline: "June 2026 – July 2026",
    details: [
      "Analyzed and mapped application architecture using CAST Imaging, identifying key structural dependencies across the codebase to support a broader AI-driven application initiative.",
      "Built and queried a Neo4j graph database to model application components and their relationships, translating static code analysis into a graph-based representation for clearer visualization of system dependencies.",
      "Collaborated with the engineering team over a 2-month internship to turn code-analysis findings into actionable insights for architecture review."
    ],
    tech: ["CAST Imaging", "Neo4j", "Graph Databases", "Architecture Analysis"],
    highlight: true
  },
  {
    role: "Management Head",
    company: "Alkyataan VIT",
    timeline: "Feb 2025 – Feb 2026",
    details: [
      "Led a 20+ member team to plan and execute technical events for 500+ participants, coordinating logistics, budget, and scheduling.",
      "Designed structured workflows across event planning stages, improving operational efficiency and reducing coordination overhead.",
      "Partnered with faculty and student teams to align event goals with department objectives and ensure smooth execution."
    ],
    tech: ["Leadership", "Project Management", "Team Coordination", "Workflow Design"],
    highlight: false
  },
  {
    role: "IoT & AI Intern",
    company: "Tata Steel",
    timeline: "Jun 2024 – Aug 2024",
    details: [
      "Developed AI-based solutions supporting industrial automation systems for real-time plant monitoring.",
      "Built IoT-enabled prototypes to capture sensor data and enable real-time monitoring of equipment parameters.",
      "Collaborated with cross-functional engineering teams on deployment and testing of automation prototypes."
    ],
    tech: ["Python", "IoT", "AI", "Industrial Automation", "Sensors"],
    highlight: false
  }
];

export const projects = [
  {
    title: "AI Soil Analyzer",
    description: "Developed a Random Forest model achieving 95% accuracy for crop recommendation based on soil characteristics.",
    features: [
      "Soil data processing",
      "pH and moisture analysis",
      "Nutrient-level analysis",
      "Feature engineering",
      "Crop recommendation",
      "Machine learning model"
    ],
    tech: ["Python", "Machine Learning", "Random Forest", "Data Processing"],
    highlight: "95% Model Accuracy",
    codeLink: "",
    liveLink: ""
  },
  {
    title: "Full-Stack Shopping Cart Application",
    description: "Built a full-stack e-commerce application with authentication, shopping cart, and order processing.",
    features: [
      "User authentication",
      "Shopping cart",
      "Order processing",
      "REST APIs",
      "SQL database",
      "Persistent user/order data"
    ],
    tech: ["React.js", "Node.js", "Express.js", "SQL"],
    codeLink: "",
    liveLink: ""
  },
  {
    title: "Career Boost Website",
    description: "Developed a responsive career-guidance website designed to support early-career job seekers.",
    features: [
      "Responsive UI",
      "Career guidance",
      "Resume tips",
      "Job insights",
      "Early-career resources"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    codeLink: "",
    liveLink: ""
  }
];

export const skills = {
  "Programming Languages": {
    icon: Terminal,
    items: ["Java", "C++", "JavaScript", "Python"]
  },
  "Frontend Development": {
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript", "React.js"]
  },
  "Backend Development": {
    icon: Server,
    items: ["Node.js", "Express.js"]
  },
  "Databases": {
    icon: Database,
    items: ["SQL", "Neo4j", "Graph Database"]
  },
  "Tools": {
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Terminal", "CAST Imaging"]
  },
  "Technical Skills": {
    icon: LineChart,
    items: ["Data Analytics", "Machine Learning", "Graph Data Modeling"]
  },
  "Computer Science Fundamentals": {
    icon: Network,
    items: ["Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks", "Data Structures and Algorithms"]
  }
};

export const impacts = [
  { value: "20+", label: "Team Members Led" },
  { value: "500+", label: "Event Participants" },
  { value: "95%", label: "AI Soil Analyzer Accuracy" },
  { value: "3", label: "Professional Experiences" }
];
