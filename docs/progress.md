# Progress — Portfolio

> 옵시디언 볼트 연동용 진행 상황 문서. 기능 구현/버그 수정 시마다 이 파일을 갱신한다. 이슈/트러블슈팅은 [[issues]] 참고.

## 프로젝트 개요
- **목표:** Next.js 14(App Router) + TypeScript + TailwindCSS 기반 정적 포트폴리오. GitHub Pages(커스텀 도메인 `minseobae.dev`)로 배포.
- **배포:** `npm run deploy:domain` — `next build` → `out/` 정적 산출 → `CNAME`(minseobae.dev) 포함해 `gh-pages`로 배포.
- **핵심 제약 (`CLAUDE.md`):** 배포/설정 파일(`.github/workflows/deploy.yml`, `next.config.js`, `CNAME`) 수정 금지, 성과/수치 추측 금지, 내부 보안 정보·연락처(전화번호 등) 노출 금지, 반드시 `npm run build` 성공 확인 후 완료 처리.

## 구조
- `data/projects.ts` — 프로젝트 목록 데이터
- `data/skills.ts` — 기술 스택 데이터
- `data/certifications.ts` — 자격증 데이터 (2026-09-09 추가)
- `components/` — `Header`, `Hero`, `About`, `Skills`, `Certifications`, `Projects`, `Contact`, `Footer` 등 섹션별 컴포넌트

## 최근 완료 작업 (병합된 PR 순, 최신 우선)
- **PR #6** (2026-09-08 이전 병합): About 섹션 통계/소개 문구를 근거 기반으로 개편 — 추측성 수치 제거.
- **PR #5**: 푸터 전화번호 노출 제거 (개인정보 노출 이슈).
- **PR #4**: `MotionDiv`를 정적 SSR 콘텐츠로 렌더링 — Framer Motion SSR 이슈 수정.
- **PR #3**: 연락처 폼 개인정보 노출 제거 + lint CI 스텝 추가, 다크모드 초기 진입 시 깜빡임(FOUC) 방지.
- **PR #1**: `CLAUDE.md` 프로젝트 가이드라인 문서 추가.
- 그 외: `skills`/`projects` 섹션 데이터·컴포넌트 분리 리팩토링.

## 현재 상태 (2026-09-09 기준)
- `main` 브랜치, working tree clean, origin과 동기화됨.
- **자격증 섹션 신규 추가** (2026-09-09): `data/certifications.ts` + `components/Certifications.tsx`, Header 네비게이션에 "자격증" 추가, `app/page.tsx`에서 Skills와 Projects 사이에 배치.
  - 등록된 자격증: SQL 개발자(SQLD, 2026-06-19 취득, 2028-06-19까지 유효), 데이터분석 준전문가(ADsP, 2026-06-05 취득, 영구자격), 리눅스마스터 2급(2026-07-03 취득). 발급기관: SQLD/ADsP는 한국데이터산업진흥원, 리눅스마스터는 KAIT 자격검정.
  - **자격증 번호는 의도적으로 비공개** — 사용자 요청(개인식별정보 노출 방지). `Certification` 인터페이스에 `credentialId?` 필드는 있으나 값은 채우지 않음.
- `main` 저장소는 브랜치 보호 규칙(GH013)으로 직접 push 불가 — 항상 브랜치 생성 → PR → squash merge로 진행.
- `.github/workflows/deploy.yml`이 `main` push에 반응해 자동으로 `gh-pages`에 배포됨 (수동 배포 명령 불필요).

## 로드맵 / 다음 단계 (README 기준, 우선순위 미정)
- [ ] 다국어 지원 (한국어/영어)
- [ ] 블로그 섹션
- [ ] SEO 최적화
- [ ] PWA 지원
- [x] 다크모드 토글
- [x] 애니메이션 효과 (Framer Motion)

## 변경 이력
- 2026-09-09: 사이트 전체 재점검 — `Footer.tsx` 저작권 연도(2025→2026), `Hero.tsx` 소셜 아이콘 다크모드 미대응, `Footer.tsx` 하드코딩 기술스택 목록이 `data/skills.ts`와 불일치(Slack 삭제, GCP로 교체)하던 것 수정. `.gitignore`에 `.obsidian/` 추가.
- 2026-09-09: 네비게이션 클릭 시 스크롤 이동 지점이 헤더에 바짝 붙어 보이던 문제 수정 — `about`/`skills`/`certifications`/`projects`/`contact` 섹션에 `scroll-mt-24` 추가, 헤더(64px) 아래 여유 공간 확보.
- 2026-09-09: Hero 섹션에 `pt-20` 추가 — 고정 헤더(`fixed top-0`, 높이 ~64px)와 `min-h-screen` 중앙 정렬 히어로 콘텐츠가 좁은 뷰포트에서 겹쳐 상단 프로필 원(Dev)이 헤더 뒤로 잘려 보이던 문제 수정.
- 2026-09-09: About 섹션 문구를 b33d853(PR #6) 이전의 자연스러운 서술형 톤으로 복원하되, Spring Batch/Redis 근거 문장 1개는 유지 — 사용자가 PR #6 문구를 "어색하다"고 판단해 되돌림. Stats 카드도 원래의 직접/빠른/함께/도전 슬로건으로 복원.
- 2026-09-09: 자격증 섹션 추가 (SQLD, ADsP, 리눅스마스터 2급) — `data/certifications.ts`, `components/Certifications.tsx` 신규, Header/page.tsx 반영.
- 2026-09-08: `docs/` 옵시디언 연동 문서화 시스템 최초 세팅, 기존 git 히스토리 기반으로 현재 상태 정리.
