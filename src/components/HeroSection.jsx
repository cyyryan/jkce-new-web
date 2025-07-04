import React, { useRef, useEffect } from 'react'

const text = {
  en: {
    title: 'AT JKCE PROBUILD',
    subtitle: 'WE TURN YOUR BLUEPRINTS INTO REALITY',
    desc: 'Welcome to JKCE PROBUILD, a Richmond, BC – based construction company. We specialize in construction services with two key divisions: Earthwork & Site Preparation & Construction Management.',
    stats: [
      { value: 'Western', label: 'Canada Projects' },
      { value: '2', label: 'Key Divisions' },
      { value: 'Richmond', label: 'BC Based' }
    ],
    btn1: 'OUR WORK',
    btn2: 'CONTACT US'
  },
  zh: {
    title: 'JKCE PROBUILD',
    subtitle: '让蓝图成为现实',
    desc: '欢迎来到JKCE PROBUILD，我们是一家位于加拿大列治文的建筑公司，专注于土方工程、场地准备和施工管理两大板块。',
    stats: [
      { value: '西部', label: '加拿大项目' },
      { value: '2', label: '核心部门' },
      { value: '列治文', label: '总部' }
    ],
    btn1: '工程案例',
    btn2: '联系我们'
  }
}

const HeroSection = ({ language = 'en', onPageChange }) => {
  const videoRef = useRef(null)
  const t = text[language] || text.en

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  // 处理按钮点击事件
  const handleWorkClick = () => {
    if (onPageChange) {
      onPageChange('projects')
    }
  }

  const handleContactClick = () => {
    if (onPageChange) {
      onPageChange('contact')
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/1098913311?autoplay=1&loop=1&background=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full absolute inset-0"
            style={{ objectFit: 'cover' }}
            title="Banner Video"
          ></iframe>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full py-8">
        <div className="text-center text-white max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-4 mt-16 sm:mt-24">
          {/* Main Content */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight break-words">
            {t.title}
            <span className="block text-primary-400 mt-2">{t.subtitle}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
            {t.desc}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {t.stats.map((s, i) => (
              <div className="text-center" key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">{s.value}</div>
                <div className="text-primary-100 text-sm lg:text-base">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWorkClick}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg cursor-pointer"
            >
              {t.btn1}
            </button>
            <button 
              onClick={handleContactClick}
              className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg border border-white border-opacity-30 cursor-pointer"
            >
              {t.btn2}
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator - 移到这里，和内容容器同级 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 