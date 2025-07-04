// 项目数据模板 - 复制这个模板来添加新项目

export const projectTemplate = {
  id: 7, // 确保 ID 唯一，递增
  title: "项目标题",
  category: "earthwork", // 可选: "earthwork", "commercial", "institutional"
  location: "项目地点，如 Richmond, BC",
  description: "简短的项目描述（1-2句话）",
  image: "项目图片URL（建议使用 Unsplash 或其他高质量图片）",
  features: [
    "特性1", 
    "特性2", 
    "特性3", 
    "特性4"
  ],
  detailedDescription: "详细的项目描述（2-3段），包括项目规模、技术细节、成果等",
  timeline: "项目时间，如 8 months",
  teamSize: "团队规模，如 25+ professionals",
  challenges: [
    "项目挑战1",
    "项目挑战2", 
    "项目挑战3"
  ],
  solutions: [
    "解决方案1",
    "解决方案2",
    "解决方案3"
  ],
  year: "2024" // 项目年份
}

// 添加新项目的步骤：
// 1. 复制上面的模板
// 2. 修改所有字段为实际项目信息
// 3. 确保 ID 唯一
// 4. 将新项目对象添加到 projects 数组中
// 5. 如果需要，更新 getRecentProjects 函数的逻辑

// 示例：添加新项目
/*
const newProject = {
  id: 7,
  title: "Residential Complex Development",
  category: "residential",
  location: "Vancouver, BC",
  description: "Modern residential complex with sustainable design and community amenities.",
  image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  features: ["Site Preparation", "Foundation Work", "Structural Construction", "Interior Finishing"],
  detailedDescription: "A comprehensive residential development featuring 150 modern apartments with sustainable design principles. The project included extensive site preparation, foundation work, structural construction, and interior finishing. All units feature energy-efficient systems and modern amenities.",
  timeline: "16 months",
  teamSize: "35+ professionals",
  challenges: ["Complex site conditions", "Sustainability requirements", "Community noise concerns"],
  solutions: ["Advanced construction techniques", "LEED certification compliance", "Community communication program"],
  year: "2024"
}

// 然后添加到 projects 数组：
// projects.push(newProject)
*/ 