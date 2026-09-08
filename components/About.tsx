import { Server, Zap, Lightbulb, Users } from "lucide-react"
import Image from "next/image"
import MotionDiv from "./Motion"

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "직접 해보며 배우는",
      description:
        "이론에 그치지 않고 구현으로 검증하며 구조를 이해하고 실력을 쌓습니다.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "빠른 학습과 실행",
      description:
        "새로운 기술도 빠르게 파악해 PoC → 적용까지 연결하는 실행력을 지향합니다.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "함께 성장하는",
      description:
        "상대의 의도와 맥락을 존중하며, 소통을 통해 팀 성과를 끌어올립니다.",
    },
  ]

  const stats = [
    { value: "직접", label: "구현하는" },
    { value: "빠른", label: "학습력" },
    { value: "함께", label: "성장하는" },
    { value: "도전", label: "정신" },
  ]

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const profileSrc = `${basePath}/profileImage.png`

  return (
    <section id="about" className="section-padding scroll-mt-24 bg-white dark:bg-gray-950">
      <div className="container-max">
        {/* Header */}
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            저에 대해
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            새로운 것을 직접 만들어보며 배우고 성장하는 신입 백엔드 개발자 배민서입니다.
          </p>
        </MotionDiv>

        {/* Profile + About */}
        <div className="grid md:grid-cols-[400px_1fr] gap-8 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={profileSrc}
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
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              개발자로서의 성장 방식
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                저는 해보고 싶은 건 직접 만들어보며 배우는 개발자입니다. 항상
                “이 시스템을 내가 만든다면 어떻게 구현할까?”를 고민하며, 필요하다고
                느낀 기능은 직접 구현해보며 구조를 이해하고 실력을 키워왔습니다.
                예를 들어 450만+ 건 규모의 데이터 처리에서 Spring Batch로 분산 처리
                성능을 개선하고, Redis 캐시로 실시간 조회 공백을 해결해본 경험이
                있습니다.
              </p>

              <p>
                새로운 기술에 대한 도전도 두려워하지 않습니다. 생소한 기술이라도
                빠르게 학습해 작은 PoC로 검증해보고, 그 과정에서 얻는 깨달음을
                즐깁니다.
              </p>

              <p>
                함께 성장하는 커뮤니케이션 중심의 개발자입니다. 상대방의 입장과
                의도를 고려하며 의견을 나누고, 팀과 함께 성장하는 것을 중요하게
                생각합니다.
              </p>
            </div>
          </MotionDiv>
        </div>

        {/* Stats (팩트형) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <MotionDiv
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.05 }}
              className="text-center p-6 bg-primary-50 dark:bg-gray-900 rounded-lg border border-primary-100 dark:border-gray-800"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                {s.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                {s.label}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-gray-900 rounded-full flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
