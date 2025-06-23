"use client"

import { ExternalLink, Github, Calendar, Users, X, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: '트렌드 기반 상호명 추천 웹사이트(상추)',
      description: '사용자의 업종에 맞는 트렌디한 가게 이름을 제안해주는 웹사이트',
      image: '/api/placeholder/400/250',
      technologies: ['Spring', 'MySQL', 'Elasticsearch', 'Kibana', 'Docker & Docker Compose', 'Nginx', 'React', 'JavaScript', 'Java', 'Python'],
      github: 'https://github.com/BESP-LLL3',
      date: '2025.04.10~2025.05.08',
      team: '4명(Backend 4명)',
      details: {
        overview: '현재 상권의 데이터를 사용해 자신의 업종의 상가들이 사용하는 상호명들의 트렌드를 확인할 수 있고, 그에 기반한 트렌드한 상호명을 추천 받을 수 있습니다. 또한 본인이 정한 이름과 동일한 상호명이 있는지 체크할 수 있습니다.',
        idea: '창업을 준비하는 사람들이 상호명을 정하는 데 어려움을 겪는 것을 보고, 데이터 기반의 상호명 추천 서비스를 만들면 도움이 될 것 같아서 시작했습니다. 업종별 트렌드 분석을 통해 더 나은 상호명을 제안할 수 있을 것이라 생각했습니다.',
        architectureImage: '/architecture1.png',
        features: [
          '업종별 트렌드 분석 및 상호명 추천',
          'Elasticsearch 기반 실시간 검색',
          '중복 및 특허 확인 - 상호명 중복과 특허 문제를 사전에 검토하여 안정성을 확보',
          'Docker를 통한 컨테이너화',
          'Nginx를 통한 리버스 프록시'
        ],
        challenges: [
          '대용량 데이터 처리 및 검색 성능 최적화',
          '실시간 트렌드 분석 알고리즘 구현',
          'Docker 환경에서의 서비스 안정성 확보'
        ],
        troubleshooting: [
          {
            title: 'Elasticsearch 검색 성능 최적화',
            description: 'Elasticsearch 인덱스 최적화를 통해 검색 속도를 3배 향상시켰습니다.',
            image: '/troubleshooting1.png'
          },
          {
            title: 'Docker 환경 일관성 확보',
            description: 'Docker Compose를 활용하여 개발 환경과 운영 환경의 일관성을 확보했습니다.',
            image: '/troubleshooting2.png'
          },
          {
            title: 'Nginx 성능 개선',
            description: 'Nginx 설정 최적화로 정적 파일 서빙 성능을 개선했습니다.',
            image: '/troubleshooting3.png'
          }
        ],
        learnings: [
          'Elasticsearch와 Kibana의 실무 활용',
          '대용량 데이터 처리 및 검색 최적화',
          'Docker 기반 배포 및 운영'
        ]
      }
    },
    {
      title: '맞춤형 영화관 찾기 서비스(CineFinder)',
      description: '전국의 상영 정보를 한 눈에 비교하고 검색할 수 있는 통합 영화 정보 서비스',
      image: '/api/placeholder/400/250',
      technologies: ['Spring Boot(+JPA, Security)', 'MySQL', 'Elasticsearch', 'Redis', 'Kafka', 'RabbitMQ', 
        'WebSocket', 'JWT', 'OAuth 2.0', 'RESTful API', 'Git', 'Docker', 'Nginx', 'React', 'JavaScript'],
      github: 'https://github.com/BESP-CineFinder',
      date: '2025.05.09~2025.06.04',
      team: '4명(Backend 4명)',
      details: {
        overview: '전국의 영화관 상영 정보를 통합하여 사용자가 편리하게 영화를 찾을 수 있는 서비스입니다. 실시간 데이터 동기화와 메시징 큐를 활용한 안정적인 시스템을 구축했습니다.',
        idea: '영화를 보려고 할 때 여러 영화관 사이트를 번갈아가며 확인해야 하는 불편함을 겪었습니다. 모든 영화관의 상영 정보를 한 곳에서 확인할 수 있다면 사용자들이 훨씬 편리할 것이라 생각해서 시작했습니다.',
        architectureImage: '/architecture2.png',
        features: [
          '전국 영화관 상영 정보 통합 검색',
          '실시간 좌석 예약 및 알림',
          'WebSocket을 통한 실시간 통신',
          'Kafka와 RabbitMQ를 활용한 메시징 시스템',
          'OAuth 2.0 기반 소셜 로그인'
        ],
        challenges: [
          '다양한 영화관 API 데이터 통합',
          '실시간 데이터 동기화 및 일관성 유지',
          '대용량 트래픽 처리 및 성능 최적화'
        ],
        troubleshooting: [
          {
            title: 'Kafka 메시지 중복 처리 해결',
            description: 'Kafka Consumer Group을 활용하여 메시지 중복 처리 문제를 해결했습니다.',
            image: '/troubleshooting4.png'
          },
          {
            title: 'Redis 캐시 성능 향상',
            description: 'Redis Cluster 구성을 통해 캐시 성능을 향상시켰습니다.',
            image: '/troubleshooting5.png'
          },
          {
            title: 'WebSocket 동시 접속 처리',
            description: 'WebSocket 연결 풀링으로 동시 접속자 처리 능력을 개선했습니다.',
            image: '/troubleshooting6.png'
          }
        ],
        learnings: [
          '메시징 큐 시스템 설계 및 구현',
          '실시간 데이터 처리 및 동기화',
          '마이크로서비스 아키텍처 설계'
        ]
      }
    },
    {
      title: '가상 화폐 거래 체험(KMBBJ)',
      description: '실제 돈이 아닌 가상의 자산을 사용하여 코인을 사고팔고, 시장의 변동성을 체험할 수 있습니다. 이를 통해 사용자는 실제 거래의 복잡성과 위험을 이해하고, 전략을 개발하며, 친구들과 경쟁할 수 있습니다.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REDIS', 'Cassandra', 'JPA', 'Docker', 'Jenkins', 'AWS', 'GCP'],
      github: 'https://github.com/KMBBJ/KMBBJ_BACKEND',
      date: '2024.08.01~2024.12.12',
      team: '5명(Backend 5명)',
      details: {
        overview: '실제 돈이 아닌 가상의 자산을 사용하여 코인을 사고팔고, 시장의 변동성을 체험할 수 있습니다. 이를 통해 사용자는 실제 거래의 복잡성과 위험을 이해하고, 전략을 개발하며, 친구들과 경쟁할 수 있습니다.',
        idea: '암호화폐 투자에 관심이 있지만 실제 돈으로 거래하기에는 부담스러운 사람들을 위해 가상 거래 환경을 제공하고 싶었습니다. 실제 시장 데이터를 기반으로 한 시뮬레이션을 통해 안전하게 거래 경험을 쌓을 수 있을 것이라 생각했습니다.',
        architectureImage: '/architecture3.png',
        features: [
          '실시간 가상 화폐 시세 제공',
          '가상 자산 거래 및 포트폴리오 관리',
          '실시간 거래 내역 및 차트 제공',
          '친구들과의 랭킹 시스템',
          '다양한 거래 전략 시뮬레이션'
        ],
        challenges: [
          '실시간 시세 데이터 처리 및 정확성 확보',
          '대용량 거래 데이터 처리 및 저장',
          '동시 접속자 처리 및 시스템 안정성'
        ],
        troubleshooting: [
          {
            title: 'Cassandra 파티셔닝 최적화',
            description: 'Cassandra 파티셔닝 전략을 최적화하여 대용량 데이터 처리 성능을 향상시켰습니다.',
            image: '/troubleshooting7.png'
          },
          {
            title: 'Redis 실시간 시세 업데이트',
            description: 'Redis Pub/Sub을 활용하여 실시간 시세 업데이트 지연 문제를 해결했습니다.',
            image: '/troubleshooting8.png'
          },
          {
            title: 'AWS Auto Scaling 구현',
            description: 'AWS Auto Scaling을 통해 트래픽 증가에 따른 서버 확장을 자동화했습니다.',
            image: '/troubleshooting9.png'
          }
        ],
        learnings: [
          '실시간 데이터 처리 시스템 설계',
          '대용량 데이터베이스 최적화',
          '클라우드 환경에서의 서비스 운영'
        ]
      }
    }
  ]

  const handleProjectClick = (index: number) => {
    setSelectedProject(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal()
    }
  }

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
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProjectClick(index)}
            >
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
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Click to view details */}
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  <span>상세 보기</span>
                  <ArrowRight size={16} className="ml-1" />
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

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="모달 닫기"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">프로젝트 개요</h3>
                <p className="text-gray-600 leading-relaxed">
                  {projects[selectedProject].details.overview}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} className="text-primary-600" />
                  <span className="text-gray-700">{projects[selectedProject].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-primary-600" />
                  <span className="text-gray-700">{projects[selectedProject].team}</span>
                </div>
              </div>

              {/* Idea */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">아이디어 계기</h3>
                <p className="text-gray-600 leading-relaxed">
                  {projects[selectedProject].details.idea}
                </p>
              </div>

              {/* Architecture */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">프로젝트 구조</h3>
                <img src={projects[selectedProject].details.architectureImage} alt="Architecture" className="w-full h-auto rounded-lg" />
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">주요 기능</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].details.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">도전 과제</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].details.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Troubleshooting */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">트러블 슈팅</h3>
                <div className="space-y-6">
                  {projects[selectedProject].details.troubleshooting.map((trouble, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{trouble.title}</h4>
                      <p className="text-gray-600 mb-3">{trouble.description}</p>
                      <img 
                        src={trouble.image} 
                        alt={trouble.title}
                        className="w-full h-auto rounded-lg border border-gray-200"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Learnings */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">학습 내용</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].details.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>GitHub 저장소</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects 