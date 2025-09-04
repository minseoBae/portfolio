'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
      return
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const handleToggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      return
    }
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleMenu()
    }
  }

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: '소개' },
    { id: 'skills', label: '기술스택' },
    { id: 'projects', label: '프로젝트' },
    { id: 'contact', label: '연락처' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="container-max px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary-600">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors duration-200 font-medium"
                aria-label={`${item.label} 섹션으로 이동`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleToggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="테마 토글"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors duration-200"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleToggleTheme}
                className="text-left flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-colors duration-200 font-medium py-2"
                aria-label="테마 토글"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                <span>테마 전환</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header 