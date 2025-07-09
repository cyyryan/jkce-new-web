import React, { useState } from 'react'
import { projects, getCategories } from '../data/projects'

const text = {
  en: {
    heroTitle: 'Our Work',
    heroSubtitle: 'Showcasing our projects across Western Canada, from earthwork to construction management',
    stats: {
      projectsCompleted: 'Projects Completed',
      yearsExperience: 'Years Experience',
      canadaCoverage: 'Canada Coverage',
      clientSatisfaction: 'Client Satisfaction'
    },
    allProjects: 'All Projects',
    viewDetails: 'View Details',
    projectApproachTitle: 'Our Project Approach',
    projectApproachSubtitle: 'We follow a systematic approach to ensure every project meets the highest standards of quality and safety',
    approachSteps: [
      {
        title: 'Assessment',
        description: 'Comprehensive site assessment and project requirements analysis'
      },
      {
        title: 'Planning',
        description: 'Detailed project planning with timeline and resource allocation'
      },
      {
        title: 'Execution',
        description: 'Professional execution with strict quality and safety standards'
      },
      {
        title: 'Delivery',
        description: 'Final inspection and project handover with ongoing support'
      }
    ],
    ctaTitle: 'Ready to Start Your Project?',
    ctaSubtitle: 'Contact us today to discuss your project requirements and get a free consultation.',
    ctaButton: 'Get Free Quote'
  },
  zh: {
    heroTitle: '工程案例',
    heroSubtitle: '展示我们在加拿大西部的项目，从土方工程到施工管理',
    stats: {
      projectsCompleted: '完成项目',
      yearsExperience: '年行业经验',
      canadaCoverage: '加拿大覆盖',
      clientSatisfaction: '客户满意度'
    },
    allProjects: '所有项目',
    viewDetails: '查看详情',
    projectApproachTitle: '我们的项目流程',
    projectApproachSubtitle: '我们遵循系统化的方法，确保每个项目都达到最高的质量和安全标准',
    approachSteps: [
      {
        title: '评估',
        description: '全面的现场评估和项目需求分析'
      },
      {
        title: '规划',
        description: '详细的项目规划，包括时间安排和资源分配'
      },
      {
        title: '执行',
        description: '专业执行，严格遵守质量和安全标准'
      },
      {
        title: '交付',
        description: '最终检查和项目交接，提供持续支持'
      }
    ],
    ctaTitle: '准备开始您的项目了吗？',
    ctaSubtitle: '今天就联系我们讨论您的项目需求，获取免费咨询。',
    ctaButton: '获取免费报价'
  }
}

const Projects = ({ language = 'en' }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const t = text[language] || text.en

  const filters = [
    { id: 'all', name: t.allProjects },
    ...getCategories().map(cat => ({
      id: cat.id,
      name: language === 'en' ? cat.name : cat.nameZh || cat.name
    }))
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">{t.stats.projectsCompleted}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">{t.stats.yearsExperience}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">Western</div>
              <div className="text-gray-600">{t.stats.canadaCoverage}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">{t.stats.clientSatisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-200 hover:border-primary-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {language === 'en' ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : project.categoryZh || project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {language === 'en' ? project.title : project.titleZh || project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-primary-600 font-medium text-sm">
                        {project.location}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {language === 'en' ? project.description : project.descriptionZh || project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(language === 'en' ? project.features : project.featuresZh || project.features).slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 px-3 py-1.5 rounded-full text-xs font-medium border border-primary-200"
                        >
                          {feature}
                        </span>
                      ))}
                      {(language === 'en' ? project.features : project.featuresZh || project.features).length > 3 && (
                        <span className="bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full text-xs font-medium">
                          +{(language === 'en' ? project.features : project.featuresZh || project.features).length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleViewDetails(project)}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 mt-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t.viewDetails}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.projectApproachTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.projectApproachSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.approachSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <button className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            {t.ctaButton}
          </button>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? selectedProject.title : selectedProject.titleZh || selectedProject.title}
              </h2>
              <p className="text-primary-600 font-medium mb-4">
                📍 {selectedProject.location}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === 'en' ? selectedProject.description : selectedProject.descriptionZh || selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'en' ? 'Project Features' : '项目特色'}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {(language === 'en' ? selectedProject.features : selectedProject.featuresZh || selectedProject.features).map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  {language === 'en' ? 'Close' : '关闭'}
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                  {language === 'en' ? 'Contact Us' : '联系我们'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects 