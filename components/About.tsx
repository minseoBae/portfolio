import { User, Code, Heart, Database, Server, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: '안정적인 백엔드',
      description: '견고하고 확장 가능한 서버 아키텍처를 설계하여 안정적인 서비스를 제공합니다.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '깔끔한 코드',
      description: '유지보수가 용이하고 확장 가능한 코드를 작성하는 것을 중요시합니다.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '빠른 학습',
      description: '새로운 기술과 트렌드를 빠르게 익히고 팀에 긍정적인 에너지를 더합니다.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            저에 대해
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            늘 배우고 도전하는 자세로 성장하고 있는 신입 개발자 배민서입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center text-primary-600">
                  <User className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">프로필 사진</p>
                  <p className="text-sm text-primary-500">여기에 사진을 추가하세요</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Server className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              백엔드 개발자로서의 여정
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                새로운 기술을 빠르게 익히고, 팀에 긍정적인 에너지를 더하는 것이 저의 강점입니다.
                서버 사이드 개발에 대한 깊은 이해와 데이터베이스 설계 능력을 바탕으로 
                안정적이고 확장 가능한 백엔드 시스템을 구축합니다.
              </p>
              <p>
                Node.js, Python, Java 등 다양한 백엔드 기술 스택을 활용하여 
                효율적이고 유지보수가 용이한 API와 서비스를 개발합니다.
              </p>
              <p>
                지속적인 학습과 도전을 통해 더 나은 개발자가 되기 위해 노력하며, 
                팀원들과의 협업을 통해 최고의 결과물을 만들어내는 것을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">신입</div>
            <div className="text-gray-600">개발자</div>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">기술 스택</div>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">학습 의지</div>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">∞</div>
            <div className="text-gray-600">성장 가능성</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 