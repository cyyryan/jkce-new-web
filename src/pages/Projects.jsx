import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: '全部项目' },
    { id: 'residential', name: '住宅建设' },
    { id: 'commercial', name: '商业建筑' },
    { id: 'infrastructure', name: '基础设施' },
    { id: 'renovation', name: '装修工程' }
  ]

  const projects = [
    {
      id: 1,
      title: '现代别墅群',
      category: 'residential',
      location: '深圳南山',
      area: '2000㎡',
      duration: '12个月',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
      description: '高端别墅群项目，采用现代简约设计风格，注重空间布局和居住体验。',
      features: ['现代简约风格', '智能家居系统', '环保材料', '景观设计']
    },
    {
      id: 2,
      title: '商业综合体',
      category: 'commercial',
      location: '广州天河',
      area: '15000㎡',
      duration: '18个月',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: '集购物、办公、娱乐为一体的现代化商业综合体，成为区域地标建筑。',
      features: ['商业综合体', '智能建筑', '绿色节能', '多功能空间']
    },
    {
      id: 3,
      title: '智能办公楼',
      category: 'commercial',
      location: '北京朝阳',
      area: '8000㎡',
      duration: '15个月',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: '采用智能建筑技术，配备先进的办公设施，提供舒适高效的工作环境。',
      features: ['智能办公', '节能环保', '现代设计', '高效空间']
    },
    {
      id: 4,
      title: '豪华公寓',
      category: 'residential',
      location: '上海浦东',
      area: '12000㎡',
      duration: '20个月',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80',
      description: '高端公寓项目，配备完善的配套设施，为业主提供高品质的居住体验。',
      features: ['豪华公寓', '配套设施', '品质生活', '社区服务']
    },
    {
      id: 5,
      title: '城市桥梁',
      category: 'infrastructure',
      location: '杭州西湖',
      area: '5000㎡',
      duration: '24个月',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: '现代化城市桥梁项目，采用先进工程技术，确保安全性和美观性。',
      features: ['桥梁工程', '安全设计', '美观造型', '耐久性']
    },
    {
      id: 6,
      title: '精品酒店装修',
      category: 'renovation',
      location: '成都锦江',
      area: '3000㎡',
      duration: '8个月',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      description: '精品酒店装修项目，融合现代设计理念，打造独特的住宿体验。',
      features: ['精品装修', '现代设计', '舒适体验', '品质服务']
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">工程案例</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              展示我们完成的优秀项目，每一个案例都体现了我们的专业水准和服务质量，
              见证了我们15年来的成长与进步。
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded">
                      {filters.find(f => f.id === project.category)?.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-white/90 text-secondary-900 text-xs px-2 py-1 rounded font-medium">
                      {project.year}
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

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block bg-secondary-100 text-secondary-700 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full btn-primary">
                    查看详情
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-secondary-400 text-lg">暂无相关项目</div>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-secondary-600">完成项目</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">15年</div>
              <div className="text-secondary-600">行业经验</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-secondary-600">客户满意度</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-secondary-600">专业团队</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备开始您的项目？
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            联系我们的专业团队，获取免费咨询和详细报价。我们期待与您合作，共同打造完美的建筑作品。
          </p>
          <button className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            立即咨询
          </button>
        </div>
      </section>
    </div>
  )
}

export default Projects 