const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot (Security, Batch, JPA)', level: 80 },
        { name: 'Kotlin', level: 65 },
        { name: 'Python (Embedding)', level: 60 }
      ]
    },
    {
      category: 'Framework / Library',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Kafka (+Kafka UI, Kraft 모드)', level: 70 },
        { name: 'RabbitMQ', level: 65 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'ElasticSearch (+Kibana)', level: 70 }
      ]
    }
  ]

  const additionalSkills = [
    // Tooling / DevOps
    'Docker', 'Docker Compose', 'Git', 'AWS EC2', 'Google Cloud',
    // ETC
    'REST API', 'OAuth 2.0', 'Jsoup', 'OpenAPI', 'Swagger API'
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            실제 프로젝트와 학습을 통해 익힌 주요 기술들입니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            추가 기술
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-gray-700 font-medium text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 