export interface Certification {
    name: string
    issuer: string
    issueDate: string // YYYY-MM-DD
    expiryDate?: string // YYYY-MM-DD, 영구자격은 생략
    credentialId?: string
}

export const certifications: Certification[] = [
    {
        name: "SQL 개발자 (SQLD)",
        issuer: "한국데이터산업진흥원",
        issueDate: "2026-06-19",
        expiryDate: "2028-06-19",
    },
    {
        name: "데이터분석 준전문가 (ADsP)",
        issuer: "한국데이터산업진흥원",
        issueDate: "2026-06-05",
    },
    {
        name: "리눅스마스터 2급",
        issuer: "KAIT 자격검정",
        issueDate: "2026-07-03",
    },
]
