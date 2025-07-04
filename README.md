# JKCE PROBUILD CONTRACTING CORP - Official Website

A modern construction company website built with React + Tailwind CSS.

## Project Features

- 🎨 **Modern Design** - Responsive design built with Tailwind CSS
- ⚡ **High Performance** - Built with Vite for fast development and build
- 📱 **Mobile Friendly** - Fully responsive design supporting all devices
- 🚀 **SEO Optimized** - Good page structure and metadata
- 🎯 **User Experience** - Intuitive navigation and interactive design

## Tech Stack

- **Frontend Framework**: React 18
- **Styling Framework**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Font**: Inter (Google Fonts)

## Project Structure

```
jkce-new-web/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Footer
│   │   ├── HeroSection.jsx # Hero section
│   │   ├── ServicesOverview.jsx # Services overview
│   │   ├── WhyChooseUs.jsx # Why choose us
│   │   ├── RecentProjects.jsx # Recent projects
│   │   ├── Testimonials.jsx # Customer testimonials
│   │   └── CTASection.jsx  # Call to action
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── About.jsx      # About us
│   │   ├── Services.jsx   # Services
│   │   ├── Projects.jsx   # Project portfolio
│   │   └── Contact.jsx    # Contact us
│   ├── data/              # Data management
│   │   ├── projects.js    # Project data source
│   │   ├── projectTemplate.js # Project template
│   │   └── exampleNewProject.js # Example for adding projects
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project configuration
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── PROJECT_MANAGEMENT_GUIDE.md # Project management guide
```

## Page Features

### Home Page (/)
- Hero section showcasing company core values
- Services overview
- Company advantages
- Latest project cases
- Customer testimonials
- Call to action section

### About Us (/about)
- Company introduction
- Mission and vision
- Core team introduction
- Development timeline

### Services (/services)
- Detailed service introduction
- Service process explanation
- Various project type showcases

### Project Portfolio (/projects)
- Project case showcase
- Category filtering functionality
- Project detail information

### Contact Us (/contact)
- Contact information display
- Online consultation form
- Company location information
- Service hours

## Installation and Setup

### Requirements
- Node.js 16+ 
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Development Mode
```bash
npm run dev
```
Project will start at http://localhost:3000

### Build Production Version
```bash
npm run build
```

### Preview Production Version
```bash
npm run preview
```

## Customization

### Color Theme
Modify color configuration in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#fffbea',
    100: '#fff3c4',
    // ... other color scales
  },
  secondary: {
    // ... secondary colors
  }
}
```

### Fonts
Modify font configuration in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## Deployment

### Static Deployment
After building, files in the `dist` folder can be directly deployed to any static file server.

### Recommended Deployment Platforms
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Google Cloud Storage

## Browser Support

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Information

For any questions or suggestions, please contact us:

- **Email**: info@jkceprobuild.com
- **Address**: 240-3600 Viking Way, Richmond, BC V6V 1N6, Canada

---

© 2024 JKCE PROBUILD CONTRACTING CORP. All rights reserved.