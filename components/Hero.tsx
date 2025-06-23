'use client'

import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleScrollDown()
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
              Dev
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            안녕하세요, <span className="text-primary-600">신입 백엔드 개발자 배민서</span>입니다
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          새로운 기술에 대한 도전을 두려워하지 않고, 함께 성장하는 커뮤니케이션 중심의 개발자입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary">
              프로젝트 보기
            </button>
            <button className="btn-secondary">
              이력서 다운로드
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/minseoBae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="GitHub 프로필 보기"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="LinkedIn 프로필 보기"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="이메일 보내기"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={handleScrollDown}
            onKeyDown={handleKeyDown}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 transition-colors duration-200 animate-bounce"
            aria-label="아래로 스크롤"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero 