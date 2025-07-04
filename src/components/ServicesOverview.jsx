import React from 'react'

const text = {
  en: {
    title: 'OUR DIVISIONS',
    subtitle: 'Reliable, High-Quality Solutions for Homeowners, Developers, and General Contractors',
    services: [
      {
        title: "EARTHWORK & SITE PREPARATION",
        description: "Professional earthwork and site preparation services, including demolition, excavation, dewatering, and land clearing",
        features: [
          "Demolition & Asbestos Abatement",
          "Bulk excavation",
          "Dewatering",
          "Land clearing",
          "Utility installation",
          "Hardscaping"
        ]
      },
      {
        title: "CONSTRUCTION MANAGEMENT",
        description: "Comprehensive construction management services, from commercial buildings to institutional construction, providing one-stop solutions",
        features: [
          "Commercial & Institutional construction",
          "Commercial Renovation",
          "General contracting",
          "Interior demolition",
          "Design – build"
        ]
      }
    ],
    features: [
      {
        title: "EXPERIENCED TEAM",
        description: "Skilled in complex site conditions"
      },
      {
        title: "SAFETY-FIRST APPROACH",
        description: "Strict adherence to safety standards"
      },
      {
        title: "TIMELY DELIVERY",
        description: "Avoiding delays to keep projects on schedule"
      },
      {
        title: "ENVIRONMENTALLY RESPONSIBLE",
        description: "Soil disposal and erosion control with minimal environmental impact"
      }
    ]
  },
  zh: {
    title: '我们的部门',
    subtitle: '为业主、开发商和总承包商提供可靠、高质量的解决方案',
    services: [
      {
        title: "土方工程与场地准备",
        description: "专业的土方工程和场地准备服务，包括拆除、挖掘、排水和土地清理等",
        features: [
          "拆除与石棉清除",
          "大规模挖掘",
          "排水工程",
          "土地清理",
          "公用设施安装",
          "硬景观工程"
        ]
      },
      {
        title: "施工管理",
        description: "全面的施工管理服务，从商业建筑到机构建设，提供一站式解决方案",
        features: [
          "商业与机构建筑",
          "商业翻新",
          "总承包服务",
          "内部拆除",
          "设计建造"
        ]
      }
    ],
    features: [
      {
        title: "经验丰富的团队",
        description: "擅长处理复杂场地条件"
      },
      {
        title: "安全第一理念",
        description: "严格遵守安全标准"
      },
      {
        title: "按时交付",
        description: "避免延误，确保项目按计划进行"
      },
      {
        title: "环保责任",
        description: "土壤处理和侵蚀控制，最小化环境影响"
      }
    ]
  }
}

const ServicesOverview = ({ language = 'en' }) => {
  const t = text[language] || text.en

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(120deg,rgba(59,130,246,0.06) 0%,rgba(59,130,246,0.12) 100%)'}}></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {t.services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-2xl p-10 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.18)] transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-primary-600 mr-4">
                  {index === 0 ? (
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  ) : (
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview 