import { User, Code, Heart } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <User className="w-8 h-8" />,
      title: '사용자 중심',
      description: '사용자의 니즈를 최우선으로 생각하며 직관적인 인터페이스를 설계합니다.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '깔끔한 코드',
      description: '유지보수가 용이하고 확장 가능한 코드를 작성하는 것을 중요시합니다.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '열정적인 학습',
      description: '새로운 기술과 트렌드를 지속적으로 학습하고 적용합니다.'
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
            프론트엔드 개발에 대한 열정과 사용자 경험을 향상시키는 것에 대한 깊은 관심을 가지고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              개발자로서의 여정
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                3년간의 프론트엔드 개발 경험을 통해 React, Next.js, TypeScript 등 
                모던 웹 기술 스택을 활용하여 다양한 프로젝트를 성공적으로 완료했습니다.
              </p>
              <p>
                사용자 중심의 디자인과 성능 최적화에 중점을 두고, 
                팀과의 협업을 통해 최고의 결과물을 만들어내는 것을 목표로 합니다.
              </p>
              <p>
                새로운 기술을 배우는 것을 좋아하며, 
                개발 커뮤니티에 기여하고 지식을 공유하는 것을 즐깁니다.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-600">년 경력</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">프로젝트</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">기술 스택</div>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">만족도</div>
            </div>
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