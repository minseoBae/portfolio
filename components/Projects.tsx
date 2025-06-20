import { ExternalLink, Github, Calendar, Users } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: '트렌드 기반 상호명 추천 웹사이트(상추)',
      description: '사용자의 업종에 맞는 트렌디한 가게 이름을 제안해주는 웹사이트',
      image: '/api/placeholder/400/250',
      technologies: ['Spring', 'MySQL', 'Elasticsearch', 'Kibana', 'Docker & Docker Compose', 'Nginx', 'React', 'JavaScript', 'Java', 'Python'],
      github: 'https://github.com/BESP-LLL3',
      live: 'https://app.sangchu.xyz',
      date: '2025.04.10 2025.05.08',
      team: '4명(Backend 4명)'
    },
    {
      title: '맞춤형 영화관 찾기 서비스(CineFinder)',
      description: '전국의 상영 정보를 한 눈에 비교하고 검색할 수 있는 통합 영화 정보 서비스',
      image: '/api/placeholder/400/250',
      technologies: ['Spring Boot(+JPA, Security)', 'MySQL', 'Elasticsearch', 'Redis', 'Kafka', 'RabbitMQ', 
        'WebSocket', 'JWT', 'OAuth 2.0', 'RESTful API', 'Git', 'Docker', 'Nginx', 'React', 'JavaScript'],
      github: 'https://github.com/BESP-CineFinder',
      live: 'https://example.com',
      date: '2025.05.09 ~ 2025.06.04',
      team: '4명(Backend 4명)'
    },
    {
      title: '가상 화폐 거래 체험(KMBBJ)',
      description: '실제 돈이 아닌 가상의 자산을 사용하여 코인을 사고팔고, 시장의 변동성을 체험할 수 있습니다. 이를 통해 사용자는 실제 거래의 복잡성과 위험을 이해하고, 전략을 개발하며, 친구들과 경쟁할 수 있습니다.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REDIS', 'Cassandra', 'JPA', 'Docker', 'Jenkins', 'AWS', 'GCP'],
      github: 'https://github.com/KMBBJ',
      live: 'https://example.com',
      date: '2024.08.01 ~ 2024.12.12',
      team: '5명(Backend 5명)'
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