import React from 'react'

const Services = () => {
  const divisions = [
    {
      title: "EARTHWORK & SITE PREPARATION",
      description: "Professional earthwork and site preparation services for all types of construction projects",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      services: [
        {
          name: "Demolition & Asbestos Abatement",
          description: "Safe and efficient demolition services with proper asbestos handling and disposal",
          icon: "🏗️"
        },
        {
          name: "Bulk Excavation",
          description: "Large-scale excavation services for commercial and residential projects",
          icon: "⛏️"
        },
        {
          name: "Dewatering",
          description: "Professional dewatering solutions to manage groundwater during construction",
          icon: "💧"
        },
        {
          name: "Land Clearing",
          description: "Complete land clearing and site preparation for new developments",
          icon: "🌲"
        },
        {
          name: "Utility Installation",
          description: "Underground utility installation and infrastructure development",
          icon: "🔌"
        },
        {
          name: "Hardscaping",
          description: "Landscape construction including driveways, walkways, and retaining walls",
          icon: "🏡"
        }
      ]
    },
    {
      title: "CONSTRUCTION MANAGEMENT",
      description: "Comprehensive construction management services from planning to completion",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      services: [
        {
          name: "Commercial & Institutional Construction",
          description: "Full-service construction for commercial buildings and institutional facilities",
          icon: "🏢"
        },
        {
          name: "Commercial Renovation",
          description: "Modernization and renovation of existing commercial properties",
          icon: "🔨"
        },
        {
          name: "General Contracting",
          description: "Complete project management and coordination of all construction activities",
          icon: "📋"
        },
        {
          name: "Interior Demolition",
          description: "Selective interior demolition for renovation and remodeling projects",
          icon: "🏚️"
        },
        {
          name: "Design-Build",
          description: "Integrated design and construction services for streamlined project delivery",
          icon: "✏️"
        }
      ]
    }
  ]

  const features = [
    {
      title: "EXPERIENCED TEAM",
      description: "Skilled in complex site conditions with years of industry expertise",
      icon: "👥"
    },
    {
      title: "SAFETY-FIRST APPROACH",
      description: "Strict adherence to safety standards ensuring project security",
      icon: "🛡️"
    },
    {
      title: "TIMELY DELIVERY",
      description: "Avoiding delays to keep projects on schedule and within budget",
      icon: "⏰"
    },
    {
      title: "ENVIRONMENTALLY RESPONSIBLE",
      description: "Soil disposal and erosion control with minimal environmental impact",
      icon: "🌱"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Divisions
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100">
              Reliable, High-Quality Solutions for Homeowners, Developers, and General Contractors
            </p>
          </div>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Two Specialized Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              JKCE PROBUILD specializes in construction services with two key divisions serving Western Canada
            </p>
          </div>

          <div className="space-y-20">
            {divisions.map((division, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-primary-600 mr-4">
                      {division.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {division.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {division.description}
                  </p>

                  <div className="grid gap-6">
                    {division.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start space-x-4">
                        <div className="text-2xl flex-shrink-0">{service.icon}</div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {service.name}
                          </h4>
                          <p className="text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <div className="text-white text-3xl">
                          {index === 0 ? '🏗️' : '📊'}
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        {division.title.split(' ')[0]}
                      </h4>
                      <p className="text-gray-600 mb-6">
                        {division.description}
                      </p>
                      <button className="bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering quality construction services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600">
                Initial meeting to understand your project requirements and objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600">
                Detailed project planning and resource allocation for optimal execution
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Execution</h3>
              <p className="text-gray-600">
                Professional implementation with strict quality control and safety measures
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Completion</h3>
              <p className="text-gray-600">
                Final inspection and handover with ongoing support and maintenance options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-500 transition-colors text-lg">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 