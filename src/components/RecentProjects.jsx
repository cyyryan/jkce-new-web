import React, { useState } from 'react'
import { projects } from '../data/projects'
import { getFeaturedPosts } from '../data/blogPosts'

const RecentProjects = ({ language = 'en', onPageChange }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const t = {
    en: {
      title: 'Recent Projects',
      subtitle: 'Explore our latest construction achievements',
      viewAll: 'View All Projects',
      viewDetails: 'View Details',
      category: 'Category',
      client: 'Client',
      duration: 'Duration',
      budget: 'Budget',
      close: 'Close',
      blogTitle: 'Latest Insights',
      blogSubtitle: 'Stay updated with industry trends and our expertise',
      readMore: 'Read More',
      viewAllBlog: 'View All Articles'
    },
    zh: {
      title: '最近完成项目',
      subtitle: '探索我们最新的建筑成就',
      viewAll: '查看所有项目',
      viewDetails: '查看详情',
      category: '类别',
      client: '客户',
      duration: '工期',
      budget: '预算',
      close: '关闭',
      blogTitle: '最新见解',
      blogSubtitle: '了解行业趋势和我们的专业知识',
      readMore: '阅读更多',
      viewAllBlog: '查看所有文章'
    }
  }

  const currentText = t[language] || t.en

  // 获取最近的项目
  const recentProjects = projects.slice(0, 3)
  
  // 获取特色博客文章
  const featuredBlogPosts = getFeaturedPosts(language, 2)

  const handleViewProject = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* 项目部分 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentText.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentText.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {recentProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={language === 'zh' ? project.titleZh : project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {language === 'zh' ? project.categoryZh : project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {language === 'zh' ? project.titleZh : project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'zh' ? project.descriptionZh : project.description}
                  </p>
                  <button
                    onClick={() => handleViewProject(project)}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {currentText.viewDetails} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onPageChange('projects')}
              className="bg-primary-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-600 transition-colors"
            >
              {currentText.viewAll}
            </button>
          </div>
        </div>

        {/* 博客预览部分 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentText.blogTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentText.blogSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredBlogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.publishDate}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button
                    onClick={() => onPageChange('blog')}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {currentText.readMore} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onPageChange('blog')}
              className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors"
            >
              {currentText.viewAllBlog}
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={language === 'zh' ? selectedProject.titleZh : selectedProject.title}
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
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'zh' ? selectedProject.titleZh : selectedProject.title}
              </h1>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{currentText.category}</h3>
                  <p className="text-gray-600">{language === 'zh' ? selectedProject.categoryZh : selectedProject.category}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{currentText.client}</h3>
                  <p className="text-gray-600">{selectedProject.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{currentText.duration}</h3>
                  <p className="text-gray-600">{selectedProject.duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{currentText.budget}</h3>
                  <p className="text-gray-600">{selectedProject.budget}</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'zh' ? selectedProject.descriptionZh : selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default RecentProjects 