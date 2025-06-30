import React from 'react'

const About = () => {
  const teamMembers = [
    {
      name: '张总',
      position: '总经理',
      experience: '20年',
      description: '拥有丰富的建筑行业经验，曾参与多个大型项目的管理和执行。',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: '李工程师',
      position: '技术总监',
      experience: '15年',
      description: '资深结构工程师，专注于建筑结构设计和施工技术管理。',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: '王设计师',
      position: '设计总监',
      experience: '12年',
      description: '专业建筑设计师，擅长现代建筑风格和空间规划。',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ]

  const milestones = [
    { year: '2008', title: '公司成立', description: 'JKCE承建商正式成立，开始承接小型建筑项目。' },
    { year: '2012', title: '业务扩展', description: '成功完成首个大型商业项目，业务范围扩展到商业建筑领域。' },
    { year: '2015', title: '技术升级', description: '引进先进的建筑技术和设备，提升施工质量和效率。' },
    { year: '2018', title: '规模扩大', description: '团队规模达到50人，年营业额突破5000万。' },
    { year: '2021', title: '品牌建设', description: '获得行业多项荣誉，成为区域知名建筑企业。' },
    { year: '2023', title: '创新发展', description: '开始涉足智能建筑和绿色建筑领域，引领行业发展。' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              JKCE承建商成立于2008年，是一家专业的建筑工程服务提供商。
              15年来，我们始终坚持"质量第一、客户至上"的服务理念，为数千个家庭和企业提供了优质的建筑服务。
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                专业建筑服务专家
              </h2>
              <p className="text-lg text-secondary-600">
                JKCE承建商专注于住宅建设、商业建筑、基础设施和装修工程等领域，
                拥有专业的团队和丰富的项目经验。我们致力于为客户提供高品质、
                高效率的建筑解决方案。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-secondary-600">完成项目</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">15年</div>
                  <div className="text-secondary-600">行业经验</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-secondary-600">专业团队</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-secondary-600">客户满意度</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="aspect-video bg-white rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">我们的使命</h3>
              <p className="text-secondary-600">
                为客户提供高品质的建筑服务，创造安全、舒适、美观的建筑空间，
                让每个项目都成为精品工程，为城市发展贡献力量。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">我们的愿景</h3>
              <p className="text-secondary-600">
                成为行业领先的建筑服务提供商，以创新技术和优质服务，
                打造更多标志性建筑，为社会发展创造更大价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              核心团队
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              我们的团队由经验丰富的专业人士组成，每个成员都在各自的领域拥有深厚的专业知识和丰富的实践经验。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-secondary-600 mb-3">
                    经验: {member.experience}
                  </p>
                  <p className="text-secondary-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              发展历程
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              15年的发展历程，见证了我们的成长和进步，也记录了我们对建筑事业的执着追求。
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-secondary-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 