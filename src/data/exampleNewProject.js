// 示例：如何快速添加新项目
// 复制下面的代码块，修改内容，然后粘贴到 projects.js 文件中

const newProjectExample = {
  id: 7, // 修改为下一个可用ID
  title: "Residential Complex Development",
  category: "residential", // 可选: "earthwork", "commercial", "institutional", "residential"
  location: "Vancouver, BC",
  description: "Modern residential complex with sustainable design and community amenities.",
  image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  features: [
    "Site Preparation", 
    "Foundation Work", 
    "Structural Construction", 
    "Interior Finishing"
  ],
  detailedDescription: "A comprehensive residential development featuring 150 modern apartments with sustainable design principles. The project included extensive site preparation, foundation work, structural construction, and interior finishing. All units feature energy-efficient systems and modern amenities.",
  timeline: "16 months",
  teamSize: "35+ professionals",
  challenges: [
    "Complex site conditions",
    "Sustainability requirements", 
    "Community noise concerns"
  ],
  solutions: [
    "Advanced construction techniques",
    "LEED certification compliance", 
    "Community communication program"
  ],
  year: "2024"
}

// 使用步骤：
// 1. 复制上面的代码块
// 2. 修改所有字段为你的实际项目信息
// 3. 打开 src/data/projects.js
// 4. 在 projects 数组的末尾添加新项目对象
// 5. 保存文件并刷新浏览器

// 快速修改指南：
// - 修改 id: 确保是唯一的数字
// - 修改 title: 项目标题
// - 修改 category: 项目类别
// - 修改 location: 项目地点
// - 修改 description: 简短描述
// - 修改 image: 项目图片URL
// - 修改 features: 项目特性数组
// - 修改 detailedDescription: 详细描述
// - 修改 timeline: 项目时间
// - 修改 teamSize: 团队规模
// - 修改 challenges: 挑战数组
// - 修改 solutions: 解决方案数组
// - 修改 year: 项目年份 