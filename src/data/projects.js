export const projects = [
  {
    id: 1,
    title: "Commercial Development Site Preparation",
    category: "earthwork",
    location: "Richmond, BC",
    description: "Large-scale site preparation including demolition, excavation, and utility installation for a major commercial development.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Demolition", "Bulk Excavation", "Utility Installation", "Dewatering"],
    detailedDescription: "This comprehensive commercial development project involved extensive site preparation work across a 50-acre property in Richmond, BC. Our team successfully completed demolition of existing structures, bulk excavation of over 100,000 cubic meters of soil, installation of underground utilities including water, sewer, and electrical systems, and implemented advanced dewatering solutions to manage groundwater levels during construction.",
    timeline: "8 months",
    teamSize: "25+ professionals",
    challenges: ["Complex soil conditions", "Tight timeline", "Environmental regulations"],
    solutions: ["Advanced soil stabilization techniques", "24/7 construction schedule", "Comprehensive environmental monitoring"],
    year: "2024"
  },
  {
    id: 2,
    title: "Institutional Building Construction",
    category: "institutional",
    location: "Vancouver, BC",
    description: "Complete construction management for a modern institutional facility with advanced design-build approach.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Design-Build", "General Contracting", "Quality Control", "Timely Delivery"],
    detailedDescription: "A state-of-the-art institutional facility featuring modern architecture and sustainable design principles. This project showcased our design-build expertise, combining architectural vision with practical construction solutions. The facility includes advanced HVAC systems, energy-efficient lighting, and smart building technologies.",
    timeline: "18 months",
    teamSize: "40+ professionals",
    challenges: ["Complex architectural design", "Sustainability requirements", "Budget constraints"],
    solutions: ["Integrated design-build approach", "LEED certification compliance", "Value engineering optimization"],
    year: "2024"
  },
  {
    id: 3,
    title: "Land Clearing and Site Development",
    category: "earthwork",
    location: "Surrey, BC",
    description: "Comprehensive land clearing and site development for residential community expansion.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Land Clearing", "Site Preparation", "Environmental Protection", "Hardscaping"],
    detailedDescription: "Large-scale land clearing and site development project for a residential community expansion. Our team carefully managed environmental considerations while efficiently clearing vegetation, preparing building pads, and implementing erosion control measures. The project included extensive hardscaping and landscaping elements.",
    timeline: "6 months",
    teamSize: "20+ professionals",
    challenges: ["Environmental protection requirements", "Wetland preservation", "Community noise concerns"],
    solutions: ["Environmental monitoring protocols", "Selective clearing techniques", "Community communication program"],
    year: "2023"
  },
  {
    id: 4,
    title: "Commercial Renovation Project",
    category: "commercial",
    location: "Burnaby, BC",
    description: "Major commercial renovation including interior demolition and modern facility upgrades.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Interior Demolition", "Commercial Renovation", "Project Management", "Safety Compliance"],
    detailedDescription: "Comprehensive commercial renovation project involving complete interior demolition and modernization of a multi-story office building. The project included structural modifications, MEP system upgrades, and interior finish improvements while maintaining business operations in adjacent areas.",
    timeline: "12 months",
    teamSize: "30+ professionals",
    challenges: ["Phased construction requirements", "Existing building constraints", "Minimal disruption to tenants"],
    solutions: ["Detailed phasing plan", "Structural engineering coordination", "Tenant communication program"],
    year: "2024"
  },
  {
    id: 5,
    title: "Industrial Site Excavation",
    category: "earthwork",
    location: "Delta, BC",
    description: "Complex industrial site excavation with specialized dewatering and soil management.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    features: ["Bulk Excavation", "Dewatering", "Soil Management", "Environmental Compliance"],
    detailedDescription: "Complex industrial site excavation project requiring specialized dewatering systems and soil management techniques. The project involved excavation of over 150,000 cubic meters of soil with high groundwater levels, requiring advanced dewatering solutions and environmental monitoring.",
    timeline: "10 months",
    teamSize: "35+ professionals",
    challenges: ["High groundwater levels", "Soil contamination concerns", "Environmental regulations"],
    solutions: ["Advanced dewatering systems", "Soil remediation protocols", "Environmental compliance monitoring"],
    year: "2023"
  },
  {
    id: 6,
    title: "Educational Facility Construction",
    category: "institutional",
    location: "Coquitlam, BC",
    description: "Modern educational facility construction with sustainable design and energy-efficient systems.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    features: ["Institutional Construction", "Sustainable Design", "Quality Assurance", "Safety Standards"],
    detailedDescription: "Modern educational facility featuring sustainable design principles and energy-efficient systems. The project included specialized classrooms, laboratories, and common areas designed to enhance the learning environment while meeting strict educational facility standards and sustainability requirements.",
    timeline: "20 months",
    teamSize: "45+ professionals",
    challenges: ["Educational facility standards", "Sustainability requirements", "Budget and timeline constraints"],
    solutions: ["Compliance with educational codes", "LEED certification implementation", "Value engineering and efficient project management"],
    year: "2024"
  }
]

// 获取最近的项目（用于首页展示）
export const getRecentProjects = (count = 3) => {
  return projects
    .sort((a, b) => new Date(b.year) - new Date(a.year))
    .slice(0, count)
}

// 按类别筛选项目
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

// 获取所有可用的类别
export const getCategories = () => {
  const categories = [...new Set(projects.map(project => project.category))]
  return categories.map(category => ({
    id: category,
    name: category.charAt(0).toUpperCase() + category.slice(1)
  }))
} 