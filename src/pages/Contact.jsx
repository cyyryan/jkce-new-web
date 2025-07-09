import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const text = {
  en: {
    heroTitle: 'Contact Us',
    heroSubtitle: 'Ready to turn your blueprints into reality? Let\'s discuss your project requirements.',
    formTitle: 'Get In Touch',
    nameLabel: 'Full Name *',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email Address *',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '(604) 123-4567',
    companyLabel: 'Company',
    companyPlaceholder: 'Your company name',
    projectTypeLabel: 'Project Type',
    projectTypePlaceholder: 'Select a project type',
    projectTypeOptions: {
      earthwork: 'Earthwork & Site Preparation',
      construction: 'Construction Management',
      commercial: 'Commercial Construction',
      institutional: 'Institutional Construction',
      demolition: 'Demolition & Asbestos Abatement',
      other: 'Other'
    },
    messageLabel: 'Project Details *',
    messagePlaceholder: 'Please describe your project requirements, timeline, and any specific details...',
    sendButton: 'Send Message',
    sendingButton: 'Sending...',
    successMessage: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
    errorMessage: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
    contactInfoTitle: 'Contact Information',
    servicesTitle: 'Our Services',
    locationTitle: 'Our Location',
    locationSubtitle: 'Visit our office in Richmond, BC or contact us for on-site consultations',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Common questions about our services and processes',
    faqs: [
      {
        question: 'What areas do you serve?',
        answer: 'We serve Western Canada, with our headquarters in Richmond, BC. We work on projects throughout British Columbia and neighboring provinces.'
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on scope and complexity. We provide detailed timelines during the consultation phase and maintain strict adherence to schedules.'
      },
      {
        question: 'Do you provide free consultations?',
        answer: 'Yes, we offer free initial consultations to discuss your project requirements and provide preliminary assessments.'
      },
      {
        question: 'What safety standards do you follow?',
        answer: 'We maintain strict adherence to all provincial and federal safety standards, with regular training and safety protocols for all team members.'
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Yes, we are fully licensed, bonded, and insured. We also maintain BBB accreditation and follow all industry best practices.'
      },
      {
        question: 'How do you handle environmental concerns?',
        answer: 'We are committed to environmentally responsible practices, including proper soil disposal, erosion control, and minimal environmental impact on all projects.'
      }
    ],
    ctaTitle: 'Ready to Start Your Project?',
    ctaSubtitle: 'Contact us today for a free consultation and let\'s discuss how we can help turn your vision into reality.',
    callButton: 'Call Now: (604) 729 6583',
    emailButton: 'Email Us'
  },
  zh: {
    heroTitle: '联系我们',
    heroSubtitle: '准备将您的蓝图变为现实？让我们讨论您的项目需求。',
    formTitle: '获取联系',
    nameLabel: '姓名 *',
    namePlaceholder: '您的姓名',
    emailLabel: '邮箱地址 *',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: '电话号码',
    phonePlaceholder: '(604) 123-4567',
    companyLabel: '公司',
    companyPlaceholder: '您的公司名称',
    projectTypeLabel: '项目类型',
    projectTypePlaceholder: '选择项目类型',
    projectTypeOptions: {
      earthwork: '土方工程与场地准备',
      construction: '施工管理',
      commercial: '商业建筑',
      institutional: '机构建筑',
      demolition: '拆除与石棉清除',
      other: '其他'
    },
    messageLabel: '项目详情 *',
    messagePlaceholder: '请描述您的项目需求、时间安排和具体细节...',
    sendButton: '发送消息',
    sendingButton: '发送中...',
    successMessage: '谢谢！您的消息已成功发送。我们会尽快回复您。',
    errorMessage: '抱歉，发送消息时出现错误。请重试或直接联系我们。',
    contactInfoTitle: '联系信息',
    servicesTitle: '我们的服务',
    locationTitle: '我们的位置',
    locationSubtitle: '访问我们在列治文的办公室，或联系我们进行现场咨询',
    faqTitle: '常见问题',
    faqSubtitle: '关于我们服务和流程的常见问题',
    faqs: [
      {
        question: '您们服务哪些地区？',
        answer: '我们服务加拿大西部，总部位于不列颠哥伦比亚省列治文。我们在不列颠哥伦比亚省和邻近省份开展项目。'
      },
      {
        question: '一个典型项目需要多长时间？',
        answer: '项目时间因范围和复杂性而异。我们在咨询阶段提供详细的时间安排，并严格遵守进度计划。'
      },
      {
        question: '您们提供免费咨询吗？',
        answer: '是的，我们提供免费初步咨询，讨论您的项目需求并提供初步评估。'
      },
      {
        question: '您们遵循哪些安全标准？',
        answer: '我们严格遵守所有省级和联邦安全标准，定期培训并为所有团队成员制定安全协议。'
      },
      {
        question: '您们有执照和保险吗？',
        answer: '是的，我们完全获得执照、担保和保险。我们还保持BBB认证并遵循所有行业最佳实践。'
      },
      {
        question: '您们如何处理环境问题？',
        answer: '我们致力于环保责任实践，包括适当的土壤处理、侵蚀控制，并在所有项目中最小化环境影响。'
      }
    ],
    ctaTitle: '准备开始您的项目了吗？',
    ctaSubtitle: '今天就联系我们进行免费咨询，让我们讨论如何帮助您将愿景变为现实。',
    callButton: '立即致电：(604) 729 6583',
    emailButton: '发送邮件'
  }
}

const Contact = ({ language = 'en' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const t = text[language] || text.en

  // 初始化 EmailJS
  useEffect(() => {
    emailjs.init("YLsFyrbnnW54_reNK")
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // 发送邮件
      const result = await emailjs.send(
        'service_44b3a9r',
        'template_pngskco',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_company: formData.company,
          project_type: formData.projectType,
          message: formData.message,
          to_email: 'info@jkceprobuild.com' // 接收邮件的邮箱
        },
        'YLsFyrbnnW54_reNK'
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      
      // 清空表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      title: language === 'en' ? "Email" : "邮箱",
      value: "info@jkceprobuild.com",
      link: "mailto:info@jkceprobuild.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      ),
      title: language === 'en' ? "Phone" : "电话",
      value: "(604) 729 6583",
      link: "tel:+16047296583"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
      ),
      title: language === 'en' ? "Address" : "地址",
      value: "3600 Viking Way, Richmond, BC, V6V 1N6",
      link: "https://maps.google.com/?q=3600+Viking+Way+Richmond+BC"
    }
  ]

  const services = language === 'en' ? [
    "Earthwork & Site Preparation",
    "Construction Management",
    "Commercial Construction",
    "Institutional Construction",
    "Demolition & Asbestos Abatement",
    "Bulk Excavation",
    "Dewatering",
    "Land Clearing",
    "Utility Installation",
    "Hardscaping",
    "Commercial Renovation",
    "General Contracting",
    "Interior Demolition",
    "Design-Build"
  ] : [
    "土方工程与场地准备",
    "施工管理",
    "商业建筑",
    "机构建筑",
    "拆除与石棉清除",
    "大规模挖掘",
    "排水工程",
    "土地清理",
    "公用设施安装",
    "硬景观工程",
    "商业翻新",
    "总承包服务",
    "内部拆除",
    "设计建造"
  ]

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
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t.formTitle}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.companyLabel}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t.companyPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.projectTypeLabel}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">{t.projectTypePlaceholder}</option>
                    <option value="earthwork">{t.projectTypeOptions.earthwork}</option>
                    <option value="construction">{t.projectTypeOptions.construction}</option>
                    <option value="commercial">{t.projectTypeOptions.commercial}</option>
                    <option value="institutional">{t.projectTypeOptions.institutional}</option>
                    <option value="demolition">{t.projectTypeOptions.demolition}</option>
                    <option value="other">{t.projectTypeOptions.other}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-8 rounded-lg transition-colors text-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary-500 hover:bg-primary-600 text-white'
                  }`}
                >
                  {isSubmitting ? t.sendingButton : t.sendButton}
                </button>

                {/* 成功/错误提示 */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t.successMessage}
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {t.errorMessage}
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t.contactInfoTitle}
              </h2>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t.servicesTitle}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.locationTitle}
            </h2>
            <p className="text-gray-600">
              {t.locationSubtitle}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.1234567890123!2d-123.12345678901234!3d49.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA3JzM0LjQiTiAxMjPCsDA3JzM0LjQiVw!5e0!3m2!1sen!2sca!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JKCE PROBUILD Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.faqTitle}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {t.faqs.slice(0, 3).map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {t.faqs.slice(3, 6).map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
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
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16047296583"
              className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              {t.callButton}
            </a>
            <a
              href="mailto:info@jkceprobuild.com"
              className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-500 transition-colors text-lg"
            >
              {t.emailButton}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 