import { ExternalLink, Github, Calendar, Users } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Next.js와 TypeScript를 사용한 풀스택 이커머스 플랫폼. 결제 시스템, 관리자 대시보드, 반응형 디자인을 포함합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      date: '2024',
      team: 'Solo'
    },
    {
      title: 'Task Management App',
      description: 'React와 Firebase를 활용한 실시간 협업 태스크 관리 애플리케이션. 드래그 앤 드롭, 실시간 업데이트 기능을 제공합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      github: 'https://github.com',
      live: 'https://example.com',
      date: '2023',
      team: '3명'
    },
    {
      title: 'Portfolio Website',
      description: '모던하고 반응형 포트폴리오 웹사이트. SEO 최적화, 다크모드, 애니메이션 효과를 포함합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      date: '2024',
      team: 'Solo'
    },
    {
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보를 제공하는 대시보드. 위치 기반 서비스, 차트 시각화, 알림 기능을 포함합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'PWA'],
      github: 'https://github.com',
      live: 'https://example.com',
      date: '2023',
      team: 'Solo'
    },
    {
      title: 'Social Media Clone',
      description: 'Instagram 스타일의 소셜 미디어 클론. 이미지 업로드, 댓글, 좋아요, 팔로우 기능을 구현했습니다.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
      github: 'https://github.com',
      live: 'https://example.com',
      date: '2023',
      team: '4명'
    },
    {
      title: 'AI Chat Application',
      description: 'OpenAI API를 활용한 AI 채팅 애플리케이션. 실시간 대화, 히스토리 저장, 마크다운 렌더링 기능을 제공합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com',
      date: '2024',
      team: 'Solo'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 개발한 프로젝트들입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-primary-600 text-4xl font-bold">
                  {project.title.split(' ')[0]}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    aria-label="GitHub 저장소 보기"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    aria-label="라이브 사이트 보기"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            더 많은 프로젝트 보기
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 