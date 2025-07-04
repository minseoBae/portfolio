import { User, Code, Heart, Database, Server, Zap, Lightbulb, Users } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '직접 해보며 배우는',
      description: '이론에 그치지 않고 실제로 구현해보며 구조를 이해하고 실력을 키워갑니다.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '빠른 학습과 실행',
      description: '새로운 기술에 대한 도전을 두려워하지 않고 빠르게 이해하여 실전에 적용합니다.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '함께 성장하는',
      description: '상대방의 입장을 고려하며 원활한 소통을 통해 팀과 함께 성장합니다.'
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

        <div className="grid md:grid-cols-[400px_1fr] gap-8 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/profileImage.png"
                  alt="배민서 프로필 사진"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Server className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              개발자로서의 성장 방식
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                저는 해보고 싶은 건 직접 해보며 배우는 개발자입니다. 항상 "이 시스템은 내가 만든다면 어떻게 구현할까?"라는 
                고민을 바탕으로, 필요하다고 느낀 기능이나 아이디어는 직접 개발해보며 구조를 이해하고 실력을 키워왔습니다.
              </p>
              <p>
                새로운 기술에 대한 도전을 두려워하지 않습니다. 생소한 기술이라도 빠르게 학습하여 직접 구현해보고, 
                그 과정에서 얻는 깨달음과 성취감에서 큰 즐거움을 느끼고 있습니다.
              </p>
              <p>
                함께 성장하는 커뮤니케이션 중심의 개발자입니다. 상대방의 입장과 의도를 고려하며 의견을 나누고, 
                원활한 소통을 통해 팀과 함께 성장하는 것을 중요하게 생각합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">직접</div>
            <div className="text-gray-600">구현하는</div>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">빠른</div>
            <div className="text-gray-600">학습력</div>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">함께</div>
            <div className="text-gray-600">성장하는</div>
          </div>
          <div className="text-center p-6 bg-primary-50 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">도전</div>
            <div className="text-gray-600">정신</div>
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