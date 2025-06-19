const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'TailwindCSS', level: 85 }
      ]
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 65 }
      ]
    },
    {
      category: 'Design & Others',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Jest', level: 80 },
        { name: 'Cypress', level: 70 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 프로젝트를 통해 습득한 기술들과 현재 학습 중인 기술들입니다.
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
            {[
              'Redux', 'Zustand', 'React Query', 'GraphQL', 'REST API',
              'PWA', 'SEO', 'Performance', 'Accessibility', 'Testing',
              'CI/CD', 'Agile', 'Scrum', 'Jira', 'Slack', 'Notion'
            ].map((skill, index) => (
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