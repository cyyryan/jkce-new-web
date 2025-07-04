'use client'

import React, { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar({ onPageChange, language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (page) => {
    onPageChange(page)
    setIsOpen(false)
  }

  // 切换语言
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  // 导航栏菜单多语言
  const navText = {
    en: [
      { name: 'Home', page: 'home' },
      { name: 'Our Work', page: 'projects' },
      { name: 'Divisions', page: 'services' },
      { name: 'Blog', page: 'about' },
      { name: 'Contact', page: 'contact' }
    ],
    zh: [
      { name: '首页', page: 'home' },
      { name: '工程案例', page: 'projects' },
      { name: '业务板块', page: 'services' },
      { name: '博客', page: 'about' },
      { name: '联系我们', page: 'contact' }
    ]
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('home')}
              className="text-2xl font-bold text-gray-900 transition-colors duration-300"
            >
              JKCE PROBUILD
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navText[language].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.page)}
                className="font-medium text-gray-900 transition-colors duration-300 hover:text-primary-600"
              >
                {item.name}
              </button>
            ))}
            {/* 语言切换按钮 - 桌面端 */}
            <div className="ml-6 relative">
              <button
                onClick={toggleLanguage}
                className="group flex items-center space-x-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary-50 to-gray-50 border border-primary-200 text-primary-700 hover:from-primary-100 hover:to-gray-100 hover:border-primary-300 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                {/* 语言图标 */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.83-6.99l2.53 2.52c.39.39.39 1.02 0 1.41zM18.84 15.19c-.39-.39-1.02-.39-1.41 0l-2.53-2.52c-2.34-1.18-5.05-.91-6.99.83l-.03-.03-2.51-2.54c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l2.51 2.54.03.03c-1.74 1.94-2.01 4.65-.83 6.99l2.53 2.52c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z"/>
                </svg>
                {/* 当前语言 */}
                <span className="font-medium text-sm">
                  {language === 'en' ? 'EN' : '中'}
                </span>
                {/* 切换指示器 */}
                <svg className="w-3 h-3 transform transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {/* 悬停提示 */}
              <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {language === 'en' ? '切换到中文' : 'Switch to English'}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            {/* 语言切换按钮（移动端） */}
            <div className="mr-3 relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-primary-50 to-gray-50 border border-primary-200 text-primary-700 hover:from-primary-100 hover:to-gray-100 hover:border-primary-300 transition-all duration-300 transform hover:scale-105"
              >
                {/* 语言图标 */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.83-6.99l2.53 2.52c.39.39.39 1.02 0 1.41zM18.84 15.19c-.39-.39-1.02-.39-1.41 0l-2.53-2.52c-2.34-1.18-5.05-.91-6.99.83l-.03-.03-2.51-2.54c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l2.51 2.54.03.03c-1.74 1.94-2.01 4.65-.83 6.99l2.53 2.52c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z"/>
                </svg>
                {/* 当前语言 */}
                <span className="font-medium text-xs">
                  {language === 'en' ? 'EN' : '中'}
                </span>
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-900 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-lg mt-2 mb-4">
            <div className="px-4 py-2 space-y-2">
              {navText[language].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.page)}
                  className="block w-full text-left px-4 py-2 text-gray-900 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 