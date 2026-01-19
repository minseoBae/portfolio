// src/data/skills.ts

export type SkillLevel = "Production" | "Project" | "Learning"

export type Skill = {
    name: string
    level: SkillLevel
    evidence: string[] // 1~3개 추천
}

export type SkillCategory = {
    category: string
    skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
    {
        category: "Backend",
        skills: [
            {
                name: "Java",
                level: "Production",
                evidence: ["Spring 기반 서비스 구현", "대용량 처리/트러블슈팅 경험"],
            },
            {
                name: "Spring Boot (Security, Batch, JPA)",
                level: "Production",
                evidence: ["인증/인가 및 API 설계", "Batch/성능 최적화 경험"],
            },
            {
                name: "Kotlin",
                level: "Project",
                evidence: ["Spring 프로젝트 일부 모듈 적용", "언어/문법 기반 구현 경험"],
            },
            {
                name: "Python (Embedding / FastAPI)",
                level: "Project",
                evidence: ["임베딩 파이프라인 구성", "분석 서비스 연동 경험"],
            },
        ],
    },
    {
        category: "Framework / Messaging",
        skills: [
            {
                name: "React",
                level: "Project",
                evidence: ["프로젝트 UI 구현", "컴포넌트 기반 화면 구성"],
            },
            {
                name: "Kafka (+ Kafka UI, Kraft)",
                level: "Production",
                evidence: ["실시간 메시징/로그 파이프라인", "운영 관점 구성 경험"],
            },
            {
                name: "RabbitMQ",
                level: "Production",
                evidence: ["비동기 이벤트 처리", "메시지 브로커 운영 경험"],
            },
        ],
    },
    {
        category: "Database / Search",
        skills: [
            {
                name: "MySQL",
                level: "Production",
                evidence: ["서비스 메인 DB", "스키마/쿼리 설계 경험"],
            },
            {
                name: "Redis",
                level: "Production",
                evidence: ["캐시/세션 관리", "분산 락, 실시간 데이터 보완"],
            },
            {
                name: "Elasticsearch (+ Kibana)",
                level: "Production",
                evidence: ["대용량 검색/분석", "Kibana 기반 모니터링"],
            },
        ],
    },
]

export const additionalSkills: { name: string; level: SkillLevel }[] = [
    // DevOps / Infra
    { name: "Docker", level: "Production" },
    { name: "Docker Compose", level: "Production" },
    { name: "Git", level: "Production" },
    { name: "AWS EC2", level: "Project" },
    { name: "Google Cloud (GCP)", level: "Production" },

    // API / ETC
    { name: "REST API", level: "Production" },
    { name: "OAuth 2.0", level: "Production" },
    { name: "OpenAPI", level: "Production" },
    { name: "Swagger", level: "Production" },
    { name: "Jsoup", level: "Project" },
]
