import React, { useState } from 'react'

const text = {
  en: {
    title: 'Client Testimonials',
    subtitle: 'Hear what our clients have to say. Real testimonials are the best recognition of our services.',
    testimonials: [
      {
        id: 1,
        name: 'Mr. Zhang',
        position: 'Real Estate Developer',
        company: 'Hengji Group',
        content: 'The professional standards of JKCE Construction impressed me deeply. From project planning to final delivery, every aspect was handled very well. Their team is not only technically strong but also has excellent service attitude. They are partners worth long-term cooperation.',
        rating: 5,
        project: 'Commercial Complex Project'
      },
      {
        id: 2,
        name: 'Ms. Li',
        position: 'Property Owner',
        company: 'Individual Client',
        content: 'Our villa was built by JKCE Construction, and the entire process was very smooth. The designers are professional, and the construction quality is excellent. We have been living here for over a year with no issues. Highly recommended!',
        rating: 5,
        project: 'Private Villa Project'
      },
      {
        id: 3,
        name: 'Mr. Wang',
        position: 'Company Director',
        company: 'Technology Company',
        content: 'After handing over our office building project to JKCE Construction, they completed all work on time with quality exceeding expectations. Especially the integration of smart building systems was done very professionally.',
        rating: 5,
        project: 'Smart Office Building Project'
      },
      {
        id: 4,
        name: 'Mr. Chen',
        position: 'Project Manager',
        company: 'Investment Company',
        content: 'We have collaborated with JKCE Construction on multiple projects, and they have always maintained high-level professional services. Project management is standardized, communication is smooth, and they are trustworthy partners.',
        rating: 5,
        project: 'Apartment Building Project'
      }
    ],
    stats: [
      { value: '98%', label: 'Client Satisfaction' },
      { value: '500+', label: 'Successful Projects' },
      { value: '15 Years', label: 'Industry Experience' }
    ]
  },
  zh: {
    title: '客户评价',
    subtitle: '听听我们的客户怎么说，真实的评价是对我们服务最好的认可。',
    testimonials: [
      {
        id: 1,
        name: '张先生',
        position: '房地产开发商',
        company: '恒基集团',
        content: 'JKCE承建商的专业水准让我印象深刻，从项目规划到最终交付，每个环节都做得非常到位。他们的团队不仅技术过硬，服务态度也很好，是值得长期合作的伙伴。',
        rating: 5,
        project: '商业综合体项目'
      },
      {
        id: 2,
        name: '李女士',
        position: '业主',
        company: '个人客户',
        content: '我们家的别墅就是JKCE承建商建造的，整个过程非常顺利。设计师很专业，施工质量也很好，现在住了一年多，没有任何问题。强烈推荐！',
        rating: 5,
        project: '私人别墅项目'
      },
      {
        id: 3,
        name: '王总',
        position: '企业负责人',
        company: '科技公司',
        content: '我们的办公楼项目交给JKCE承建商后，他们按时完成了所有工作，质量超出预期。特别是智能建筑系统的集成，做得非常专业。',
        rating: 5,
        project: '智能办公楼项目'
      },
      {
        id: 4,
        name: '陈先生',
        position: '项目经理',
        company: '投资公司',
        content: '与JKCE承建商合作过多个项目，他们始终保持着高水准的专业服务。项目管理规范，沟通顺畅，是值得信赖的合作伙伴。',
        rating: 5,
        project: '公寓楼项目'
      }
    ],
    stats: [
      { value: '98%', label: '客户满意度' },
      { value: '500+', label: '成功项目' },
      { value: '15年', label: '行业经验' }
    ]
  }
}

const Testimonials = ({ language = 'en' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = text[language] || text.en

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % t.testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + t.testimonials.length) % t.testimonials.length)
  }

  const currentTestimonial = t.testimonials[currentIndex]

  return (
    <section className="py-20 bg-primary-50 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{background: 'linear-gradient(0deg,rgba(59,130,246,0.10) 0%,rgba(59,130,246,0.00) 100%)'}}></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary-200">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <svg key={index} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm text-primary-600">
                      {currentTestimonial.position} · {currentTestimonial.company}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-primary-600 font-medium">
                  {currentTestimonial.project}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                onClick={prevTestimonial}
                className={`w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors duration-200`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                onClick={nextTestimonial}
                className={`w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors duration-200`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {t.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {t.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 