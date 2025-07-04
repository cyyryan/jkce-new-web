import React from 'react'

const text = {
  en: {
    title: 'WHY CHOOSE JKCE PROBUILD?',
    subtitle: 'Our projects span Western Canada, providing reliable, high-quality solutions for homeowners, developers, and general contractors.',
    reasons: [
      {
        title: "EXPERIENCED TEAM",
        description: "Skilled in complex site conditions with years of industry expertise"
      },
      {
        title: "SAFETY-FIRST APPROACH",
        description: "Strict adherence to safety standards ensuring project security"
      },
      {
        title: "TIMELY DELIVERY",
        description: "Avoiding delays to keep projects on schedule and within budget"
      },
      {
        title: "ENVIRONMENTALLY RESPONSIBLE",
        description: "Soil disposal and erosion control with minimal environmental impact"
      }
    ],
    additional: {
      title: "Serving Western Canada",
      description: "With our headquarters in Richmond, BC, we serve clients across Western Canada, bringing our expertise in earthwork and construction management to every project.",
      features: [
        "Richmond, BC based operations",
        "Two specialized divisions",
        "Comprehensive construction services"
      ],
      cta: {
        title: "Ready to Start?",
        description: "Let's discuss your project requirements and turn your blueprints into reality.",
        button: "Get Free Quote"
      }
    }
  },
  zh: {
    title: '为什么选择JKCE PROBUILD？',
    subtitle: '我们的项目遍布加拿大西部，为业主、开发商和总承包商提供可靠、高质量的解决方案。',
    reasons: [
      {
        title: "经验丰富的团队",
        description: "拥有多年行业经验，擅长处理复杂场地条件"
      },
      {
        title: "安全第一理念",
        description: "严格遵守安全标准，确保项目安全"
      },
      {
        title: "按时交付",
        description: "避免延误，确保项目按计划并在预算内完成"
      },
      {
        title: "环保责任",
        description: "土壤处理和侵蚀控制，最小化环境影响"
      }
    ],
    additional: {
      title: "服务加拿大西部",
      description: "我们总部位于不列颠哥伦比亚省列治文，为加拿大西部各地的客户提供服务，将我们在土方工程和施工管理方面的专业知识带到每个项目中。",
      features: [
        "总部位于列治文，不列颠哥伦比亚省",
        "两个专业部门",
        "全面的建筑服务"
      ],
      cta: {
        title: "准备开始了吗？",
        description: "让我们讨论您的项目需求，将您的蓝图变为现实。",
        button: "获取免费报价"
      }
    }
  }
}

const WhyChooseUs = ({ language = 'en' }) => {
  const t = text[language] || text.en

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(45deg,rgba(240,180,41,0.10) 0%,rgba(240,180,41,0.03) 100%)'}}></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.reasons.map((reason, index) => (
            <div key={index} className="text-center group bg-gray-50 rounded-2xl shadow-2xl p-8 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.18)] transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <div className="text-primary-500">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t.additional.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t.additional.description}
              </p>
              <div className="space-y-4">
                {t.additional.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-primary-500 text-white rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">{t.additional.cta.title}</h4>
                <p className="text-primary-100 mb-6">
                  {t.additional.cta.description}
                </p>
                <button className="bg-white text-primary-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  {t.additional.cta.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 