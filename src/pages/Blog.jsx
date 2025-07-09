import React, { useState } from 'react'
import { blogPosts, getCategories, searchPosts } from '../data/blogPosts'

const text = {
  en: {
    heroTitle: 'Our Blog',
    heroSubtitle: 'Insights, trends, and expertise from the construction industry',
    searchPlaceholder: 'Search articles...',
    allCategories: 'All Categories',
    readMore: 'Read More',
    publishedBy: 'Published by',
    categories: {
      'design-trends': 'Design Trends',
      'technical-insights': 'Technical Insights',
      'project-management': 'Project Management',
      'industry-news': 'Industry News'
    },
    noResults: 'No articles found matching your search.',
    featuredPost: 'Featured Post',
    latestPosts: 'Latest Posts',
    subscribeTitle: 'Stay Updated',
    subscribeSubtitle: 'Get the latest construction insights delivered to your inbox',
    subscribePlaceholder: 'Enter your email',
    subscribeButton: 'Subscribe',
    ctaTitle: 'Ready to Start Your Project?',
    ctaSubtitle: 'Contact us today to discuss your construction needs.',
    ctaButton: 'Get Free Quote'
  },
  zh: {
    heroTitle: '我们的博客',
    heroSubtitle: '建筑行业的见解、趋势和专业知识',
    searchPlaceholder: '搜索文章...',
    allCategories: '所有类别',
    readMore: '阅读更多',
    publishedBy: '发布者',
    categories: {
      'design-trends': '设计趋势',
      'technical-insights': '技术分享',
      'project-management': '项目管理',
      'industry-news': '行业新闻'
    },
    noResults: '未找到匹配您搜索的文章。',
    featuredPost: '精选文章',
    latestPosts: '最新文章',
    subscribeTitle: '保持更新',
    subscribeSubtitle: '获取最新的建筑见解，直接发送到您的邮箱',
    subscribePlaceholder: '输入您的邮箱',
    subscribeButton: '订阅',
    ctaTitle: '准备开始您的项目了吗？',
    ctaSubtitle: '今天就联系我们讨论您的建筑需求。',
    ctaButton: '获取免费报价'
  }
}

const Blog = ({ language = 'en' }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const t = text[language] || text.en

  // 获取所有类别
  const categories = getCategories(language)

  // 过滤文章
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || searchPosts(searchTerm, language).some(searchPost => searchPost.id === post.id)
    
    const matchesCategory = selectedCategory === 'all' || 
      (language === 'en' ? post.categoryEn : post.category) === selectedCategory

    return matchesSearch && matchesCategory
  }).map(post => ({
    ...post,
    title: language === 'en' ? post.titleEn : post.title,
    excerpt: language === 'en' ? post.excerptEn : post.excerpt,
    category: language === 'en' ? post.categoryEn : post.category,
    tags: language === 'en' ? post.tagsEn : post.tags,
    readTime: language === 'en' ? post.readTimeEn : post.readTime,
    content: language === 'en' ? post.contentEn : post.content
  }))

  const handleViewPost = (post) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

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

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {t.allCategories}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{t.noResults}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.publishDate}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handleViewPost(post)}
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      {t.readMore} →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.subscribeTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.subscribeSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.subscribePlaceholder}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors">
                {t.subscribeButton}
              </button>
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
          <button className="bg-white text-primary-500 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            {t.ctaButton}
          </button>
        </div>
      </section>

      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{selectedPost.publishDate}</span>
                <span className="mx-2">•</span>
                <span>{selectedPost.readTime}</span>
                <span className="mx-2">•</span>
                <span>{t.publishedBy} {selectedPost.author}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog 