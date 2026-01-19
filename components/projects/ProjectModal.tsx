// src/components/projects/ProjectModal.tsx
"use client"

import { ExternalLink, Github, Calendar, Users, X, ArrowRight, ChevronDown } from "lucide-react"
import MotionDiv from "../Motion"
import type { Project } from "@/data/projects"
import { useMemo } from "react"

type Props = {
    project: Project
    basePath: string
    onClose: () => void
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{children}</h3>
}

export default function ProjectModal({ project, basePath, onClose }: Props) {
    const techBadges = useMemo(() => project.technologies ?? [], [project.technologies])

    return (
    <MotionDiv
        layoutId={`project-card-${project.id}`}
        transition={{ layout: { type: "spring", stiffness: 520, damping: 32, mass: 0.6 } }}
        className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          <p className="text-sm text-primary-700 dark:text-primary-300 mt-1">{project.oneLiner}</p>
        </div>

        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors duration-200" aria-label="모달 닫기">
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 text-gray-900 dark:text-white">
        {/* Meta */}
        <div className="grid md:grid-cols-2 gap-3 mb-8 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar size={18} className="text-primary-600" />
            <span className="text-gray-700 dark:text-white">{project.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={18} className="text-primary-600" />
            <span className="text-gray-700 dark:text-white">{project.team}</span>
          </div>
          <div className="md:col-span-2 text-gray-700 dark:text-white">
            <span className="font-semibold">Role:</span> {project.role}
          </div>
        </div>

        {/* Overview */}
        <div className="mb-8">
          <SectionTitle>프로젝트 개요</SectionTitle>
          <p className="text-gray-600 dark:text-white leading-relaxed">{project.overview}</p>
        </div>

        {/* Idea */}
        <div className="mb-8">
          <SectionTitle>아이디어 계기</SectionTitle>
          <p className="text-gray-600 dark:text-white leading-relaxed">{project.idea}</p>
        </div>

        {/* Architecture */}
        {project.architectureImage && (
          <div className="mb-8">
            <SectionTitle>프로젝트 구조</SectionTitle>
            <img
              src={`${basePath}${project.architectureImage}`}
              alt="Architecture"
              className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-800"
              loading="lazy"
            />
          </div>
        )}

        {/* Features */}
        <div className="mb-8">
          <SectionTitle>핵심 기능</SectionTitle>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start space-x-2">
                <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-white">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights (Top 1~2) */}
        <div className="mb-8">
          <SectionTitle>핵심 트러블 슈팅</SectionTitle>
          <div className="space-y-4">
            {project.highlights.map((h) => (
              <div key={h.title} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{h.title}</h4>
                <div className="text-sm space-y-2">
                  <p><span className="text-red-600 font-medium">문제</span> — <span className="text-gray-600 dark:text-white">{h.problem}</span></p>
                  <p><span className="text-green-600 font-medium">해결</span> — <span className="text-gray-600 dark:text-white">{h.solution}</span></p>
                  <p><span className="text-blue-600 font-medium">성과</span> — <span className="text-gray-600 dark:text-white">{h.result}</span></p>
                </div>
              </div>
            ))}
          </div>

          {/* Full Troubleshooting (collapsible) */}
          {project.troubleshooting?.length ? (
            <details className="mt-4 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <summary className="cursor-pointer flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-white">
                전체 트러블 슈팅 보기
                <ChevronDown size={18} className="text-gray-500" />
              </summary>

              <div className="mt-4 space-y-6">
                {project.troubleshooting.map((t) => (
                  <div key={t.title} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">{t.title}</h4>

                    <div className="mb-3">
                      <h5 className="font-medium text-red-600 mb-1">문제 상황</h5>
                      <p className="text-gray-600 dark:text-white text-sm">{t.problem}</p>
                    </div>

                    {!!t.details?.length && (
                      <div className="mb-3">
                        <h5 className="font-medium text-orange-600 mb-1">상세 분석</h5>
                        <ul className="space-y-1">
                          {t.details.map((d) => (
                            <li key={d} className="flex items-start space-x-2">
                              <ArrowRight size={14} className="text-orange-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-white text-sm">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!!t.solutions?.length && (
                      <div className="mb-3">
                        <h5 className="font-medium text-green-600 mb-1">해결 방안</h5>
                        <ul className="space-y-1">
                          {t.solutions.map((s) => (
                            <li key={s} className="flex items-start space-x-2">
                              <ArrowRight size={14} className="text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-white text-sm">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!!t.results?.length && (
                      <div className="mb-3">
                        <h5 className="font-medium text-blue-600 mb-1">성과</h5>
                        <ul className="space-y-1">
                          {t.results.map((r) => (
                            <li key={r} className="flex items-start space-x-2">
                              <ArrowRight size={14} className="text-blue-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-white text-sm">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!!t.images?.length && (
                      <div className="mt-4 space-y-4">
                        {t.images.map((img) => (
                          <div key={img.src} className="text-center">
                            <img
                              src={`${basePath}${img.src}`}
                              alt={img.caption}
                              className={`${img.width ?? "w-full"} h-auto rounded-lg border border-gray-200 mx-auto`}
                              loading="lazy"
                            />
                            <p className="text-sm text-gray-500 dark:text-white mt-2 italic whitespace-pre-line">
                              {img.caption}
                            </p>
                            {img.showArrow && (
                              <div className="flex justify-center mt-2">
                                <ArrowRight size={20} className="text-primary-600 rotate-90" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </details>
          ) : null}
        </div>

        {/* Learnings */}
        <div className="mb-8">
          <SectionTitle>학습 내용</SectionTitle>
          <ul className="space-y-2">
            {project.learnings.map((l) => (
              <li key={l} className="flex items-start space-x-2">
                <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-white">{l}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="mb-8">
          <SectionTitle>사용 기술</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.deploy && (
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              aria-label="배포 사이트 열기"
            >
              <ExternalLink size={20} />
              <span>배포 사이트</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 border border-transparent dark:border-white"
            aria-label="GitHub 저장소 열기"
          >
            <Github size={20} />
            <span>GitHub 저장소</span>
          </a>
        </div>
      </div>
    </MotionDiv>
  )
}
