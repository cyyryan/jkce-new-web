import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                专业建筑
                <span className="block text-primary-200">服务专家</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-lg">
                JKCE承建商致力于为客户提供高品质的建筑服务，从设计到施工，从住宅到商业，我们用心打造每一个项目。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                免费咨询
              </Link>
              <Link to="/projects" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
                查看案例
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-500">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-primary-200">完成项目</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15年</div>
                <div className="text-primary-200">行业经验</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-primary-200">客户满意度</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-32 h-32 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <div className="text-sm font-medium">专业团队</div>
              <div className="text-xs text-primary-200">50+ 工程师</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <div className="text-sm font-medium">质量保证</div>
              <div className="text-xs text-primary-200">ISO认证</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 