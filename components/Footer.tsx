'use client'

import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleScrollToTop()
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              프론트엔드 개발에 대한 열정과 사용자 경험을 향상시키는 것에 대한 깊은 관심을 가지고 있습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label="소개 섹션으로 이동"
                  >
                    소개
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label="기술스택 섹션으로 이동"
                  >
                    기술스택
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label="프로젝트 섹션으로 이동"
                  >
                    프로젝트
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label="연락처 섹션으로 이동"
                  >
                    연락처
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">기술 스택</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">React & Next.js</li>
                <li className="text-gray-400">TypeScript</li>
                <li className="text-gray-400">TailwindCSS</li>
                <li className="text-gray-400">Node.js</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">baejjae8218@gmail.com</li>
                <li className="text-gray-400">+82 10-4107-3358</li>
                <li className="text-gray-400">서울, 대한민국</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-gray-400">
                  © 2024 Portfolio. Made with
                </span>
                <Heart size={16} className="text-red-500" />
                <span className="text-gray-400">
                  by Frontend Developer
                </span>
              </div>

              <button
                onClick={handleScrollToTop}
                onKeyDown={handleKeyDown}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                aria-label="페이지 상단으로 이동"
              >
                <ArrowUp size={16} />
                <span>맨 위로</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 