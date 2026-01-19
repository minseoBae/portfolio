'use client'

import { ChevronDown, Github, Linkedin, Mail, BookOpen } from 'lucide-react'
import MotionDiv from './Motion'

const Hero = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

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

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (!projectsSection) return
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    const resumePath = `${basePath}/resume.pdf`
    const anchor = document.createElement('a')
    anchor.href = resumePath
    anchor.download = 'Bae_Minseo_Resume.pdf'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-max section-padding text-center">
        <MotionDiv
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Profile Image */}
          <div className="mb-8">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4"
            >
              Dev
            </MotionDiv>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            안녕하세요, <span className="text-primary-600">신입 백엔드 개발자 배민서</span>입니다
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            새로운 기술에 대한 도전을 두려워하지 않고, 함께 성장하는 커뮤니케이션 중심의 개발자입니다.
          </p>

          {/* CTA Buttons */}
          <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          >
            <button
              className="btn-primary"
              onClick={handleViewProjects}
              aria-label="프로젝트 섹션으로 이동"
            >
              프로젝트 보기
            </button>
            <button
              className="btn-secondary"
              onClick={handleDownloadResume}
              aria-label="이력서 다운로드"
            >
              이력서 다운로드
            </button>
          </MotionDiv>

          {/* Social Links */}
          <MotionDiv
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
          >
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
              href="https://www.linkedin.com/in/minseobae03151999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="LinkedIn 프로필 보기"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:baejjae8218@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="이메일 보내기"
            >
              <Mail size={24} />
            </a>

            {/* Notion 링크로 변경 */}
            <a
              href="https://electric-note-712.notion.site/285d12b24bbc8087a8e4d204accaee01?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="개발 학습 정리 노션 페이지"
              title="개발 학습 정리 노션 (CS · 백엔드 · DevOps)"
            >
              <BookOpen size={24} />
            </a>
          </MotionDiv>

          {/* Scroll Down Indicator */}
          <button
            onClick={handleScrollDown}
            onKeyDown={handleKeyDown}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 transition-colors duration-200 animate-bounce"
            aria-label="아래로 스크롤"
          >
            <ChevronDown size={32} />
          </button>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Hero
