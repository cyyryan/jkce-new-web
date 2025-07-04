import React, { useState } from 'react'
import { getRecentProjects } from '../data/projects'

const text = {
  en: {
    title: 'Recent Completed Projects',
    subtitle: 'Some of our recently completed representative projects, showcasing our professional capabilities and construction quality',
    viewDetails: 'View Details →',
    viewAllProjects: 'View All Projects'
  },
  zh: {
    title: '最近完成的项目',
    subtitle: '我们最近完成的一些代表性项目，展示了我们的专业能力和施工质量',
    viewDetails: '查看详情 →',
    viewAllProjects: '查看所有项目'
  }
}

const RecentProjects = ({ language = 'en', onPageChange }) => {
  const t = text[language] || text.en
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 获取最近的项目（默认3个）
  const recentProjects = getRecentProjects(3)

  const handleViewAllProjects = () => {
    if (onPageChange) {
      onPageChange('projects')
    }
  }

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(90deg,rgba(59,130,246,0.08) 0%,rgba(59,130,246,0.02) 100%)'}}></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {recentProjects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-xl shadow-2xl hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.18)] transition-shadow flex flex-col h-[530px] w-[384px]">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <div className="text-sm text-primary-600 font-medium mb-2">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 min-h-[48px]">
                  {project.features && project.features.map((feature, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => handleViewDetails(project)}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors w-full mt-auto"
                >
                  {t.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllProjects}
            className="btn-primary"
          >
            {t.viewAllProjects}
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image */}
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Details</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><span className="font-medium">Location:</span> {selectedProject.location}</p>
                      <p><span className="font-medium">Category:</span> {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}</p>
                      <p><span className="font-medium">Timeline:</span> {selectedProject.timeline}</p>
                      <p><span className="font-medium">Team Size:</span> {selectedProject.teamSize}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.detailedDescription}</p>
                </div>

                {/* Challenges and Solutions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solutions</h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end p-6 border-t bg-gray-50">
                <button
                  onClick={closeModal}
                  className="bg-primary-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default RecentProjects 