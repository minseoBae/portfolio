# Progress — Portfolio

> 옵시디언 볼트 연동용 진행 상황 문서. 기능 구현/버그 수정 시마다 이 파일을 갱신한다. 이슈/트러블슈팅은 [[issues]] 참고.

## 프로젝트 개요
- **목표:** Next.js 14(App Router) + TypeScript + TailwindCSS 기반 정적 포트폴리오. GitHub Pages(커스텀 도메인 `minseobae.dev`)로 배포.
- **배포:** `npm run deploy:domain` — `next build` → `out/` 정적 산출 → `CNAME`(minseobae.dev) 포함해 `gh-pages`로 배포.
- **핵심 제약 (`CLAUDE.md`):** 배포/설정 파일(`.github/workflows/deploy.yml`, `next.config.js`, `CNAME`) 수정 금지, 성과/수치 추측 금지, 내부 보안 정보·연락처(전화번호 등) 노출 금지, 반드시 `npm run build` 성공 확인 후 완료 처리.

## 구조
- `data/projects.ts` — 프로젝트 목록 데이터
- `data/skills.ts` — 기술 스택 데이터
- `components/` — `Header`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer` 등 섹션별 컴포넌트

## 최근 완료 작업 (병합된 PR 순, 최신 우선)
- **PR #6** (2026-09-08 이전 병합): About 섹션 통계/소개 문구를 근거 기반으로 개편 — 추측성 수치 제거.
- **PR #5**: 푸터 전화번호 노출 제거 (개인정보 노출 이슈).
- **PR #4**: `MotionDiv`를 정적 SSR 콘텐츠로 렌더링 — Framer Motion SSR 이슈 수정.
- **PR #3**: 연락처 폼 개인정보 노출 제거 + lint CI 스텝 추가, 다크모드 초기 진입 시 깜빡임(FOUC) 방지.
- **PR #1**: `CLAUDE.md` 프로젝트 가이드라인 문서 추가.
- 그 외: `skills`/`projects` 섹션 데이터·컴포넌트 분리 리팩토링.

## 현재 상태 (2026-09-08 기준)
- `main` 브랜치, working tree clean, origin과 동기화됨.
- 진행 중인 브랜치나 미완료 TODO 없음 — 마지막 작업(About 섹션 개편)까지 전부 병합 완료.

## 로드맵 / 다음 단계 (README 기준, 우선순위 미정)
- [ ] 다국어 지원 (한국어/영어)
- [ ] 블로그 섹션
- [ ] SEO 최적화
- [ ] PWA 지원
- [x] 다크모드 토글
- [x] 애니메이션 효과 (Framer Motion)

## 변경 이력
- 2026-09-08: `docs/` 옵시디언 연동 문서화 시스템 최초 세팅, 기존 git 히스토리 기반으로 현재 상태 정리.
