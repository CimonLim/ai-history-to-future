# AI가 바꾸는 일과 돈

PPT 내용을 Next.js 발표 자료 앱으로 다시 설계한 버전입니다.

## 실행

```powershell
cd "C:\Users\lsm\develop\doc\ai_lecture_refresh\next-presentation"
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 또는 터미널에 표시된 포트를 엽니다.

## 구조

- `src/data/source-data.js`: 발표 내용과 출처 데이터
- `src/components/presentation-page.tsx`: 자료 화면 렌더링
- `src/app/globals.css`: 전체 디자인 시스템과 반응형 스타일
- `public/images`: PPT에서 가져온 이미지 자산
- `infra/terraform`: Vercel 프로젝트 생성 및 GitHub 연결용 Terraform

## 수정 방식

문장과 섹션을 바꿀 때는 먼저 `src/data/source-data.js`를 수정합니다. 카드나 인포그래픽 형태를 바꿀 때만 `presentation-page.tsx`와 `globals.css`를 수정합니다.
