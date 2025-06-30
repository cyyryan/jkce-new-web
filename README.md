# JKCE承建商官方网站

一个现代化的承建商公司网站，使用 React + Tailwind CSS 构建。

## 项目特色

- 🎨 **现代化设计** - 采用 Tailwind CSS 构建的响应式设计
- ⚡ **高性能** - 基于 Vite 构建，快速开发和构建
- 📱 **移动端友好** - 完全响应式设计，支持各种设备
- 🚀 **SEO 优化** - 良好的页面结构和元数据
- 🎯 **用户体验** - 直观的导航和交互设计

## 技术栈

- **前端框架**: React 18
- **样式框架**: Tailwind CSS
- **构建工具**: Vite
- **路由**: React Router DOM
- **字体**: Inter (Google Fonts)

## 项目结构

```
jkce-new-web/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 可复用组件
│   │   ├── Navbar.jsx     # 导航栏
│   │   ├── Footer.jsx     # 页脚
│   │   ├── HeroSection.jsx # 英雄区域
│   │   ├── ServicesOverview.jsx # 服务概览
│   │   ├── WhyChooseUs.jsx # 为什么选择我们
│   │   ├── RecentProjects.jsx # 最近项目
│   │   ├── Testimonials.jsx # 客户评价
│   │   └── CTASection.jsx  # 行动号召
│   ├── pages/             # 页面组件
│   │   ├── Home.jsx       # 首页
│   │   ├── About.jsx      # 关于我们
│   │   ├── Services.jsx   # 服务项目
│   │   ├── Projects.jsx   # 工程案例
│   │   └── Contact.jsx    # 联系我们
│   ├── App.jsx            # 主应用组件
│   ├── main.jsx           # 应用入口
│   └── index.css          # 全局样式
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── vite.config.js         # Vite 配置
├── tailwind.config.js     # Tailwind 配置
└── postcss.config.js      # PostCSS 配置
```

## 页面功能

### 首页 (/)
- 英雄区域展示公司核心价值
- 服务项目概览
- 公司优势介绍
- 最新工程案例
- 客户评价展示
- 行动号召区域

### 关于我们 (/about)
- 公司简介
- 使命和愿景
- 核心团队介绍
- 发展历程时间线

### 服务项目 (/services)
- 详细服务介绍
- 服务流程说明
- 各类型项目展示

### 工程案例 (/projects)
- 项目案例展示
- 分类筛选功能
- 项目详情信息

### 联系我们 (/contact)
- 联系信息展示
- 在线咨询表单
- 公司位置信息
- 服务时间说明

## 安装和运行

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
项目将在 http://localhost:3000 启动

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 自定义配置

### 颜色主题
在 `tailwind.config.js` 中修改颜色配置：
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... 其他色阶
  },
  secondary: {
    // ... 次要颜色
  }
}
```

### 字体
在 `tailwind.config.js` 中修改字体配置：
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## 部署

### 静态部署
构建完成后，`dist` 文件夹中的文件可以直接部署到任何静态文件服务器。

### 推荐部署平台
- Vercel
- Netlify
- GitHub Pages
- 阿里云 OSS
- 腾讯云 COS

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有任何问题或建议，请通过以下方式联系：

- 邮箱: info@jkce.com
- 电话: 400-888-8888
- 地址: 深圳市南山区科技园

---

© 2024 JKCE承建商. 保留所有权利.