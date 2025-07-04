import React from 'react'

const text = {
  en: {
    heroTitle: 'About JKCE PROBUILD',
    heroDesc: 'A Richmond, BC – based construction company turning blueprints into reality across Western Canada',
    storyTitle: 'Our Story',
    story: [
      'Welcome to JKCE PROBUILD, a Richmond, BC – based construction company that has been serving Western Canada with excellence and reliability. We specialize in construction services with two key divisions: Earthwork & Site Preparation & Construction Management.',
      'Our projects span Western Canada, providing reliable, high-quality solutions for homeowners, developers, and general contractors. We take pride in our experienced team, safety-first approach, timely delivery, and environmentally responsible practices.',
      'At JKCE PROBUILD, we turn your blueprints into reality, ensuring every project meets the highest standards of quality and professionalism.'
    ],
    missionTitle: 'Our Mission & Values',
    missionDesc: 'We are committed to delivering exceptional construction services while maintaining the highest standards of safety and environmental responsibility.',
    mission: [
      { title: 'Excellence', desc: 'We strive for excellence in every project, ensuring the highest quality standards and customer satisfaction.' },
      { title: 'Safety', desc: 'Safety is our top priority. We maintain strict adherence to safety standards on every project.' },
      { title: 'Reliability', desc: 'We deliver projects on time and within budget, building trust through consistent performance.' }
    ],
    teamTitle: 'Our Team',
    teamDesc: 'Our experienced team is skilled in complex site conditions and committed to delivering exceptional results.',
    journeyTitle: 'Our Journey',
    journeyDesc: "Key milestones in our company's growth and development",
    ctaTitle: 'Ready to Work With Us?',
    ctaDesc: `Let's discuss your project requirements and turn your blueprints into reality.`,
    ctaBtn: 'Contact Us Today',
    milestones: [
      { year: '2009', title: 'Company Founded', desc: 'JKCE Probuild Contracting Corp. established in Richmond, BC' },
      { year: '2015', title: 'Division Expansion', desc: 'Launched specialized Earthwork & Site Preparation division' },
      { year: '2018', title: 'Western Canada Growth', desc: 'Expanded services across Western Canada provinces' },
      { year: '2024', title: 'Industry Recognition', desc: 'BBB Accredited Business with proven track record' }
    ],
    teamMembers: [
      { name: 'Management Team', role: 'Leadership', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80', desc: 'Experienced leadership team with decades of construction expertise' },
      { name: 'Earthwork Division', role: 'Site Preparation Specialists', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', desc: 'Skilled professionals in demolition, excavation, and land clearing' },
      { name: 'Construction Management', role: 'Project Management', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', desc: 'Expert project managers ensuring quality and timely delivery' }
    ]
  },
  zh: {
    heroTitle: '关于JKCE PROBUILD',
    heroDesc: '总部位于加拿大列治文，服务西部加拿大的专业建筑公司，让蓝图成为现实',
    storyTitle: '公司故事',
    story: [
      '欢迎来到JKCE PROBUILD，我们是一家位于加拿大列治文的建筑公司，专注于土方工程、场地准备和施工管理两大板块。',
      '我们的项目遍布西部加拿大，为业主、开发商和总承包商提供可靠高质量的解决方案。我们以经验丰富的团队、安全第一、按时交付和环保责任为傲。',
      '在JKCE PROBUILD，我们让蓝图成为现实，确保每个项目都达到最高的质量和专业标准。'
    ],
    missionTitle: '我们的使命与价值观',
    missionDesc: '我们致力于为客户提供卓越的建筑服务，并始终坚持最高的安全与环保标准。',
    mission: [
      { title: '卓越', desc: '我们追求每一个项目的卓越，确保最高质量标准和客户满意度。' },
      { title: '安全', desc: '安全是我们的首要任务。每个项目都严格遵守安全标准。' },
      { title: '可靠', desc: '我们按时按预算交付项目，以持续的高标准赢得信任。' }
    ],
    teamTitle: '核心团队',
    teamDesc: '我们的团队经验丰富，擅长复杂场地条件，致力于为客户交付卓越成果。',
    journeyTitle: '发展历程',
    journeyDesc: '公司成长与发展的重要里程碑',
    ctaTitle: '准备好与我们合作了吗？',
    ctaDesc: '欢迎联系我们，讨论您的项目需求，让蓝图成为现实。',
    ctaBtn: '立即联系',
    milestones: [
      { year: '2009', title: '公司成立', desc: 'JKCE Probuild Contracting Corp. 在列治文成立' },
      { year: '2015', title: '部门扩展', desc: '成立专业土方工程与场地准备部门' },
      { year: '2018', title: '业务拓展', desc: '服务范围扩展至西部加拿大各省' },
      { year: '2024', title: '行业认可', desc: '获得BBB认证，业绩卓越' }
    ],
    teamMembers: [
      { name: '管理团队', role: '领导层', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80', desc: '拥有数十年建筑行业经验的管理团队' },
      { name: '土方工程部', role: '场地准备专家', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', desc: '专业从事拆除、挖掘和土地清理的技术团队' },
      { name: '施工管理部', role: '项目管理', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', desc: '确保项目高质量按时交付的管理专家' }
    ]
  }
}

const About = ({ language = 'en' }) => {
  const t = text[language] || text.en

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.storyTitle}
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                {t.story.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction Site"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">{language === 'en' ? 'Years Experience' : '年行业经验'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.missionTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.missionDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.mission.map((m, i) => (
              <div className="bg-white rounded-xl p-8 shadow-lg" key={i}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{m.title}</h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.teamTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.teamDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.journeyTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.journeyDesc}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {t.milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-12">
                <div className="flex-shrink-0 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {milestone.year}
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <button className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  )
}

export default About 