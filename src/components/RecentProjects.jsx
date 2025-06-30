import React from 'react'
import { Link } from 'react-router-dom'

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: '现代别墅群',
      category: '住宅建设',
      location: '深圳南山',
      area: '2000㎡',
      duration: '12个月',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
      description: '高端别墅群项目，采用现代简约设计风格，注重空间布局和居住体验。'
    },
    {
      id: 2,
      title: '商业综合体',
      category: '商业建筑',
      location: '广州天河',
      area: '15000㎡',
      duration: '18个月',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: '集购物、办公、娱乐为一体的现代化商业综合体，成为区域地标建筑。'
    },
    {
      id: 3,
      title: '智能办公楼',
      category: '商业建筑',
      location: '北京朝阳',
      area: '8000㎡',
      duration: '15个月',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: '采用智能建筑技术，配备先进的办公设施，提供舒适高效的工作环境。'
    },
    {
      id: 4,
      title: '豪华公寓',
      category: '住宅建设',
      location: '上海浦东',
      area: '12000㎡',
      duration: '20个月',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80',
      description: '高端公寓项目，配备完善的配套设施，为业主提供高品质的居住体验。'
    }
  ]

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            最新工程案例
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            展示我们最近完成的优秀项目，每一个案例都体现了我们的专业水准和服务质量。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-secondary-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex items-center justify-between text-sm text-secondary-600">
                    <span>面积: {project.area}</span>
                    <span>工期: {project.duration}</span>
                  </div>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline"
                >
                  查看详情
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            查看更多案例
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentProjects 