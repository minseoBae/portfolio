// src/components/Projects.tsx
"use client"

import { useMemo, useState } from "react"
import MotionDiv, { MotionPresence } from "../Motion"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import { projects as projectData } from "@/data/projects"

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  const selectedProject = useMemo(
    () => projectData.find((p) => p.id === selectedId) ?? null,
    [selectedId]
  )

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">프로젝트</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            상세 내용을 통해 프로젝트의 기술적 구현과 성과를 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              basePath={basePath}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>

      <MotionPresence mode="sync">
        {selectedProject && (
          <div className="fixed inset-0 z-50" tabIndex={0} onKeyDown={(e) => e.key === "Escape" && setSelectedId(null)}>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setSelectedId(null)}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <ProjectModal project={selectedProject} basePath={basePath} onClose={() => setSelectedId(null)} />
            </div>
          </div>
        )}
      </MotionPresence>
    </section>
  )
}