# 项目管理指引

## 📁 文件结构

```
src/
├── data/
│   ├── projects.js          # 统一的项目数据源
│   └── projectTemplate.js   # 项目数据模板
├── pages/
│   └── Projects.jsx         # 项目展示页面
└── components/
    └── RecentProjects.jsx   # 首页最近项目组件
```

## 🆕 如何添加新项目

### 步骤 1: 准备项目信息

在添加新项目之前，请准备以下信息：

- **项目标题** (title)
- **项目类别** (category): `earthwork`, `commercial`, `institutional`
- **项目地点** (location)
- **简短描述** (description): 1-2句话
- **项目图片** (image): 高质量图片URL
- **项目特性** (features): 4个主要特性
- **详细描述** (detailedDescription): 2-3段详细描述
- **项目时间** (timeline)
- **团队规模** (teamSize)
- **项目挑战** (challenges): 3个主要挑战
- **解决方案** (solutions): 3个对应解决方案
- **项目年份** (year)

### 步骤 2: 编辑项目数据文件

打开 `src/data/projects.js` 文件，在 `projects` 数组中添加新项目：

```javascript
// 在 projects 数组末尾添加新项目
{
  id: 7, // 确保ID唯一且递增
  title: "新项目标题",
  category: "earthwork", // 或 "commercial", "institutional"
  location: "项目地点",
  description: "简短的项目描述",
  image: "项目图片URL",
  features: ["特性1", "特性2", "特性3", "特性4"],
  detailedDescription: "详细的项目描述...",
  timeline: "项目时间",
  teamSize: "团队规模",
  challenges: ["挑战1", "挑战2", "挑战3"],
  solutions: ["解决方案1", "解决方案2", "解决方案3"],
  year: "2024"
}
```

### 步骤 3: 验证项目显示

1. 保存文件
2. 刷新浏览器
3. 检查以下页面是否正确显示新项目：
   - 首页的 "Recent Projects" 部分
   - Projects 页面的项目列表
   - 项目详情弹窗

## 📝 项目数据结构详解

### 必需字段

| 字段名 | 类型 | 描述 | 示例 |
|--------|------|------|------|
| `id` | Number | 唯一标识符 | `7` |
| `title` | String | 项目标题 | `"Commercial Development Site Preparation"` |
| `category` | String | 项目类别 | `"earthwork"` |
| `location` | String | 项目地点 | `"Richmond, BC"` |
| `description` | String | 简短描述 | `"Large-scale site preparation..."` |
| `image` | String | 图片URL | `"https://images.unsplash.com/..."` |
| `features` | Array | 项目特性 | `["Demolition", "Bulk Excavation", ...]` |
| `detailedDescription` | String | 详细描述 | `"This comprehensive..."` |
| `timeline` | String | 项目时间 | `"8 months"` |
| `teamSize` | String | 团队规模 | `"25+ professionals"` |
| `challenges` | Array | 项目挑战 | `["Complex soil conditions", ...]` |
| `solutions` | Array | 解决方案 | `["Advanced techniques", ...]` |
| `year` | String | 项目年份 | `"2024"` |

### 项目类别说明

- **earthwork**: 土方工程、场地准备、挖掘等
- **commercial**: 商业建筑、办公楼、零售设施等
- **institutional**: 教育设施、政府建筑、医疗设施等

## 🖼️ 图片要求

### 推荐图片源
- **Unsplash**: 高质量免费图片
- **Pexels**: 免费商用图片
- **自拍项目照片**: 实际项目照片

### 图片规格
- **尺寸**: 建议 1200x800 像素或更高
- **格式**: JPG 或 PNG
- **文件大小**: 建议小于 2MB
- **质量**: 清晰、专业、相关

### 获取 Unsplash 图片
1. 访问 [unsplash.com](https://unsplash.com)
2. 搜索相关关键词（如 "construction", "building", "excavation"）
3. 选择合适图片
4. 复制图片URL（右键图片 → 复制图片地址）

## 🔧 高级功能

### 自定义最近项目数量

在 `RecentProjects.jsx` 中修改：

```javascript
// 修改显示的项目数量（默认3个）
const recentProjects = getRecentProjects(5) // 显示5个最近项目
```

### 按类别筛选项目

使用 `getProjectsByCategory` 函数：

```javascript
import { getProjectsByCategory } from '../data/projects'

// 获取特定类别的项目
const earthworkProjects = getProjectsByCategory('earthwork')
const commercialProjects = getProjectsByCategory('commercial')
```

### 获取所有类别

```javascript
import { getCategories } from '../data/projects'

// 获取所有可用类别
const categories = getCategories()
// 返回: [{id: 'earthwork', name: 'Earthwork'}, ...]
```

## 🚨 常见问题

### Q: 新项目没有显示在首页？
A: 检查 `getRecentProjects` 函数，它按年份排序并返回最新的项目。确保新项目的 `year` 字段是最新的。

### Q: 项目图片不显示？
A: 检查图片URL是否正确，确保图片可以公开访问。

### Q: 项目类别筛选不工作？
A: 确保项目类别与筛选器中的类别名称完全匹配（区分大小写）。

### Q: 弹窗内容显示不完整？
A: 检查所有必需字段是否都已填写，特别是 `challenges` 和 `solutions` 数组。

## 📋 项目模板

参考 `src/data/projectTemplate.js` 文件中的模板来创建新项目：

```javascript
{
  id: 7,
  title: "项目标题",
  category: "earthwork",
  location: "项目地点",
  description: "简短描述",
  image: "图片URL",
  features: ["特性1", "特性2", "特性3", "特性4"],
  detailedDescription: "详细描述",
  timeline: "时间",
  teamSize: "团队规模",
  challenges: ["挑战1", "挑战2", "挑战3"],
  solutions: ["解决方案1", "解决方案2", "解决方案3"],
  year: "2024"
}
```

## 🔄 数据备份

建议定期备份项目数据：

1. 复制 `src/data/projects.js` 文件
2. 重命名为 `projects_backup_YYYYMMDD.js`
3. 保存在安全位置

## 📞 技术支持

如果遇到问题，请检查：
1. 文件语法是否正确
2. 所有必需字段是否已填写
3. 图片URL是否可访问
4. 浏览器控制台是否有错误信息

---

**最后更新**: 2024年12月
**维护者**: 开发团队 