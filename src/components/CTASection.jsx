import React from 'react'

const text = {
  en: {
    title: 'Ready to Start Your Project?',
    subtitle: 'Contact our professional team for free project consultation and quotes. We look forward to working with you to create outstanding architectural works.',
    getQuote: 'Get Free Quote',
    contactUs: 'Contact Us'
  },
  zh: {
    title: '准备开始您的项目了吗？',
    subtitle: '联系我们的专业团队，获取免费的项目咨询和报价。我们期待与您合作，共同创造卓越的建筑作品。',
    getQuote: '获取免费报价',
    contactUs: '联系我们'
  }
}

const CTASection = ({ language = 'en' }) => {
  const t = text[language] || text.en

  return (
    <section className="bg-white text-gray-900 py-20 w-full shadow-2xl relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none" style={{background: 'linear-gradient(180deg,rgba(59,130,246,0.08) 0%,rgba(59,130,246,0.00) 100%)'}}></div>
      <div className="container-custom text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {t.title}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-lg font-semibold transition-colors">
            {t.getQuote}
          </button>
          <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            {t.contactUs}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection 