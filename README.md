# CanTops Homepage Refactor

`https://cantops.com/`의 공개 메인 화면을 기준으로 분리한 React/Vite 작업본입니다.

## 실행

```bash
npm install
npm run dev
```

## 구조

- `reference/`: 수집 당시의 원본 HTML과 핵심 CSS 참고본
- `public/assets/`: 홈페이지에 사용된 로컬 이미지 자산
- `src/data/`: 메뉴, 제품, 동영상, 소식 데이터
- `src/components/`: 화면 섹션과 공통 UI
- `src/styles/`: 전역 스타일과 반응형 규칙

외부 상세 페이지 링크는 현재 운영 중인 CanTops 사이트를 향합니다. 메인 화면의 데이터와 UI는 분리되어 있어 WordPress 없이 수정할 수 있습니다.

## 디자인 방향

SUSS의 산업 기술 브랜드 문법을 참고해 대형 타이포, 딥 틸과 라임 포인트, 4개 솔루션 포트폴리오, 비대칭 카드 절개, 기술 신뢰 지표, 큰 문의 CTA로 재구성했습니다. SUSS의 이미지·로고·코드는 사용하지 않았습니다.
