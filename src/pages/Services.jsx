import React from 'react'

const Services = () => {
  const services = [
    {
      id: 'residential',
      title: '住宅建设',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: '从别墅到公寓，我们提供全方位的住宅建设服务，确保每个家庭都能拥有理想的居住环境。',
      features: [
        '个性化设计定制',
        '高质量建筑材料',
        '专业施工团队',
        '全程质量监控',
        '按时交付保证',
        '售后服务支持'
      ],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80'
    },
    {
      id: 'commercial',
      title: '商业建筑',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      description: '办公楼、商场、酒店等商业建筑项目，我们拥有丰富的经验和专业的团队。',
      features: [
        '商业空间规划',
        '智能建筑系统',
        '高效施工管理',
        '成本控制优化',
        '商业价值提升',
        '长期维护服务'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'infrastructure',
      title: '基础设施',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: '道路、桥梁、隧道等基础设施建设项目，为城市发展提供坚实支撑。',
      features: [
        '先进工程技术',
        '安全施工标准',
        '质量检测体系',
        '环保施工方案',
        '长期维护计划',
        '应急响应机制'
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'renovation',
      title: '装修工程',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: '室内外装修、翻新改造，让您的空间焕然一新，提升生活品质。',
      features: [
        '创意设计方案',
        '环保材料选择',
        '精细施工工艺',
        '个性化定制',
        '质量保证体系',
        '后期维护服务'
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">服务项目</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              我们提供全方位的建筑服务，从住宅建设到商业建筑，从基础设施到装修工程，
              每个项目都体现着我们的专业水准和服务质量。
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-secondary-600">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating Card */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-secondary-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">15年</div>
                      <div className="text-sm text-secondary-600">专业经验</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              服务流程
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              我们采用标准化的服务流程，确保每个项目都能按时高质量完成。
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '需求沟通',
                description: '深入了解客户需求，制定个性化方案'
              },
              {
                step: '02',
                title: '方案设计',
                description: '专业团队进行详细设计和规划'
              },
              {
                step: '03',
                title: '施工执行',
                description: '严格按照设计方案进行施工'
              },
              {
                step: '04',
                title: '验收交付',
                description: '质量检查合格后交付使用'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-secondary-600">
                  {process.description}
                </p>
              </div>
            ))}
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

export default Services 