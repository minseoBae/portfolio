"use client"

import MotionDiv from "./Motion"
import { skillCategories, additionalSkills, type SkillLevel, type Skill } from "@/data/skills"
import { CheckCircle2, Rocket, BookOpen } from "lucide-react"

const levelUI: Record<
  SkillLevel,
  {
    label: string
    // 색상은 tailwind class로만 (다크모드 포함)
    badge: string
    icon: React.ReactNode
    hint: string
  }
> = {
  Production: {
    label: "Production",
    badge:
      "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-200 border border-primary-200 dark:border-primary-800",
    icon: <Rocket size={14} className="mr-1.5" />,
    hint: "배포/운영 경험",
  },
  Project: {
    label: "Project",
    badge:
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700",
    icon: <CheckCircle2 size={14} className="mr-1.5" />,
    hint: "핵심 기능 구현",
  },
  Learning: {
    label: "Learning",
    badge:
      "bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border border-amber-200 dark:border-amber-800",
    icon: <BookOpen size={14} className="mr-1.5" />,
    hint: "학습/PoC",
  },
}

function LevelBadge({ level }: { level: SkillLevel }) {
  const ui = levelUI[level]
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${ui.badge}`}>
      {ui.icon}
      {ui.label}
    </span>
  )
}

function EvidenceList({ evidence }: { evidence: Skill["evidence"] }) {
  return (
    <ul className="mt-2 space-y-1">
      {evidence.map((e) => (
        <li key={e} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
          <span className="leading-relaxed">{e}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-max">
        {/* Header */}
        <MotionDiv
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            기술 스택
          </h2>

          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            자기평가 퍼센트 대신 <span className="font-semibold">경험 레벨과 근거</span>로 정리했습니다.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {(["Production", "Project", "Learning"] as SkillLevel[]).map((lvl) => (
              <div key={lvl} className="flex items-center gap-2">
                <LevelBadge level={lvl} />
                <span className="text-xs text-gray-500 dark:text-gray-400">{levelUI[lvl].hint}</span>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Categories */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <MotionDiv
              key={category.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: categoryIndex * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                {category.category}
              </h3>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <MotionDiv
                    key={`${category.category}-${skill.name}`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, ease: "easeOut", delay: skillIndex * 0.03 }}
                    className="rounded-xl border border-gray-100 dark:border-gray-800 p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-gray-900 dark:text-gray-100 font-semibold truncate">
                          {skill.name}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <LevelBadge level={skill.level} />
                      </div>
                    </div>

                    <EvidenceList evidence={skill.evidence} />
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 md:mt-16">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-center mb-6 md:mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">추가 기술</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              필요한 상황에 맞춰 적용해본 도구/기술들입니다.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {additionalSkills.map((skill, index) => (
              <MotionDiv
                key={skill.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: (index % 6) * 0.02 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-3 md:p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-gray-800 dark:text-gray-100 font-semibold text-sm leading-snug">
                    {skill.name}
                  </span>

                  <span className="text-[11px] text-gray-500 dark:text-gray-400">
                    {levelUI[skill.level].label}
                  </span>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
