# 포트폴리오 웹사이트

Next.js와 TypeScript를 사용하여 제작한 모던하고 반응형 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## ✨ 주요 기능

- 📱 완전 반응형 디자인
- 🎨 모던하고 깔끔한 UI/UX
- ⚡ 빠른 로딩 속도 (Next.js 최적화)
- ♿ 접근성 고려 (ARIA 라벨, 키보드 네비게이션)
- 📧 연락처 폼
- 🎯 스무스 스크롤 네비게이션
- 🌙 다크모드 준비 (향후 구현 가능)

## 📁 프로젝트 구조

```
portfolio/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── Header.tsx          # 네비게이션 헤더
│   ├── Hero.tsx            # 히어로 섹션
│   ├── About.tsx           # 소개 섹션
│   ├── Skills.tsx          # 기술 스택 섹션
│   ├── Projects.tsx        # 프로젝트 섹션
│   ├── Contact.tsx         # 연락처 섹션
│   └── Footer.tsx          # 푸터
├── public/                 # 정적 파일
├── tailwind.config.js      # TailwindCSS 설정
├── next.config.js          # Next.js 설정
├── tsconfig.json           # TypeScript 설정
└── package.json            # 의존성 관리
```

## 🛠️ 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

## 📦 빌드 및 배포

1. **프로덕션 빌드**
   ```bash
   npm run build
   ```

2. **프로덕션 서버 실행**
   ```bash
   npm start
   ```

## 🎨 커스터마이징

### 색상 테마 변경
`tailwind.config.js` 파일에서 primary 색상을 수정할 수 있습니다:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... 더 많은 색상 변형
        900: '#1e3a8a',
      },
    },
  },
}
```

### 콘텐츠 수정
각 컴포넌트 파일에서 개인 정보, 프로젝트, 기술 스택 등을 수정할 수 있습니다.

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 추가 기능 구현 예정

- [ ] 다크모드 토글
- [ ] 다국어 지원 (한국어/영어)
- [ ] 블로그 섹션
- [ ] 애니메이션 효과 (Framer Motion)
- [ ] SEO 최적화
- [ ] PWA 지원

## 📄 라이선스

MIT License

## 👨‍💻 개발자

프론트엔드 개발자 포트폴리오

---

**참고**: 이 프로젝트는 Next.js 14의 App Router를 사용하여 제작되었습니다.
