import React from 'react'

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '专业团队',
      description: '拥有50+名专业工程师和技术人员，平均行业经验超过10年。'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '按时交付',
      description: '严格的项目管理流程，确保每个项目都能按时高质量完成。'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: '价格透明',
      description: '提供详细的报价清单，无隐藏费用，让您清楚了解每一笔支出。'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: '贴心服务',
      description: '从项目开始到结束，提供全程贴心服务，让您省心省力。'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '质量保证',
      description: '所有项目都经过严格的质量检查，确保符合国家标准和客户要求。'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '快速响应',
      description: '24小时客服热线，快速响应客户需求，及时解决问题。'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                为什么选择
                <span className="text-primary-600"> JKCE承建商</span>
              </h2>
              <p className="text-lg text-secondary-600">
                15年来，我们始终坚持"质量第一、客户至上"的服务理念，为数千个家庭和企业提供了优质的建筑服务。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">
                    行业领先
                  </h3>
                  <p className="text-sm text-secondary-600">
                    连续5年获得"优秀建筑企业"称号，是您值得信赖的合作伙伴。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">我们的成就</h3>
                  <p className="text-primary-100">
                    15年专业经验，500+成功项目
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-primary-200 text-sm">完成项目</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15年</div>
                    <div className="text-primary-200 text-sm">行业经验</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-primary-200 text-sm">客户满意度</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-primary-200 text-sm">专业团队</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-100">ISO9001质量认证</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-lg p-4 border border-secondary-200">
              <div className="text-sm font-medium text-secondary-900">专业资质</div>
              <div className="text-xs text-secondary-600">建筑一级资质</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-4 border border-secondary-200">
              <div className="text-sm font-medium text-secondary-900">服务保障</div>
              <div className="text-xs text-secondary-600">终身保修</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 