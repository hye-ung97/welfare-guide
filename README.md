# 복지비용 신청 가이드

복지비용 신청 가이드 웹 애플리케이션입니다.

## 기술 스택

- React 18
- TypeScript
- Vite

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
├── components/          # 컴포넌트
│   ├── tabs/           # 탭별 컨텐츠 컴포넌트
│   ├── ApprovalFlow.tsx
│   ├── ExpenseGuide.tsx
│   ├── InfoCard.tsx
│   ├── ProcessStep.tsx
│   ├── Section.tsx
│   └── TabNavigation.tsx
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── utils/              # 유틸리티 함수
│   └── dateUtils.ts
├── App.tsx
├── main.tsx
└── index.css
```

