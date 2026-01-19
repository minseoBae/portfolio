// src/components/projects/ProjectCard.tsx
"use client"

import { Calendar, Users, ArrowRight } from "lucide-react"
import MotionDiv from "../Motion"
import type { Project } from "../../data/projects"

type Props = {
  project: Project
  index: number
  basePath: string
  onClick: () => void
}

export default function ProjectCard({ project, index, basePath, onClick }: Props) {
  return (
    <MotionDiv
      layoutId={`project-card-${project.id}`}
      whileHover={{ y: -2 }}
      transition={{ layout: { type: "spring", stiffness: 420, damping: 34, mass: 0.7 } }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      style={{ willChange: "transform" }}
      onClick={onClick}
    >
      {project.image ? (
        <div className="relative h-48">
          <img
            src={`${basePath}${project.image}`}
            alt={`${project.title} 대표 이미지`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          <div className="text-primary-600 text-4xl font-bold">{project.title.split(" ")[0]}</div>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
        <p className="text-sm text-primary-700 dark:text-primary-300 mb-3 line-clamp-2">
          {project.oneLiner}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span>{project.team}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center text-primary-600 text-sm font-medium">
          <span>상세 보기</span>
          <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </MotionDiv>
  )
}
