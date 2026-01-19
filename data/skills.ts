export type SkillLevel = "Production" | "Project" | "Learning"

export interface Skill {
    name: string
    level: SkillLevel
    evidence: string[]
}

export interface SkillCategory {
    category: string
    skills: Skill[]
}

/* =====================
Main Skill Categories
===================== */

export const skillCategories: SkillCategory[] = [
    {
        category: "Backend",
        skills: [
            {
                name: "Java",
                level: "Production",
                evidence: [
                    "Spring Boot 기반 서비스 다수 구현",
                    "대용량 데이터 처리 및 트랜잭션 설계",
                ],
            },
            {
                name: "Spring Boot (Security, JPA, Batch)",
                level: "Production",
                evidence: [
                    "JWT/OAuth2 인증 서버 구현",
                    "Spring Batch로 450만 건 데이터 처리",
                ],
            },
            {
                name: "Kotlin",
                level: "Project",
                evidence: [
                    "Spring Boot 프로젝트 일부 모듈 Kotlin 적용",
                ],
            },
            {
                name: "Python (FastAPI / Embedding)",
                level: "Project",
                evidence: [
                    "FastAPI 기반 분석 서버 구축",
                    "임베딩 생성 및 Elasticsearch 연동",
                ],
            },
        ],
    },

    {
        category: "DevOps / Cloud",
        skills: [
            {
                name: "Docker / Docker Compose",
                level: "Production",
                evidence: [
                    "멀티 서비스 로컬/운영 환경 구성",
                    "Spring · FastAPI · Elasticsearch 컨테이너화",
                ],
            },
            {
                name: "GCP (Cloud Run, Cloud SQL)",
                level: "Production",
                evidence: [
                    "Cloud Run 기반 서버리스 배포",
                    "Cloud SQL + VPC Connector 구성",
                ],
            },
            {
                name: "AWS EC2",
                level: "Project",
                evidence: [
                    "EC2 기반 서비스 배포 및 운영",
                ],
            },
            {
                name: "CI/CD (GitHub Actions, Jenkins)",
                level: "Project",
                evidence: [
                    "자동 빌드 및 배포 파이프라인 구성",
                ],
            },
        ],
    },

    {
        category: "Data / Search / Messaging",
        skills: [
            {
                name: "Elasticsearch (+ Kibana)",
                level: "Production",
                evidence: [
                    "벡터 유사도 검색 기반 추천 시스템 구현",
                    "Kibana 로그 분석 및 시각화",
                ],
            },
            {
                name: "Redis",
                level: "Production",
                evidence: [
                    "JWT 세션 관리",
                    "실시간 데이터 캐싱",
                ],
            },
            {
                name: "Kafka",
                level: "Project",
                evidence: [
                    "실시간 로그 수집 파이프라인 구축",
                ],
            },
            {
                name: "RabbitMQ",
                level: "Project",
                evidence: [
                    "비동기 메시징 처리 및 이벤트 분리",
                ],
            },
        ],
    },
]

/* =====================
Additional Skills
===================== */

export const additionalSkills: {
    name: string
    level: SkillLevel
}[] = [
        { name: "MySQL / PostgreSQL", level: "Production" },
        { name: "JPA / QueryDSL", level: "Production" },
        { name: "REST API 설계", level: "Production" },
        { name: "OAuth 2.0", level: "Production" },
        { name: "Swagger / OpenAPI", level: "Project" },
        { name: "Nginx", level: "Project" },
        { name: "Git", level: "Production" },
    ]
