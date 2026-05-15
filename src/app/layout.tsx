import type { Metadata } from "next";
import localFont from "next/font/local";
import { HashScrollRestorer } from "@/components/hash-scroll-restorer";
import "./globals.css";

const pretendard = localFont({
  variable: "--font-pretendard",
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  fallback: ["system-ui", "Noto Sans KR", "Malgun Gothic", "sans-serif"],
});

export const metadata: Metadata = {
  title: "AI가 바꾸는 일과 돈",
  description:
    "AI가 일자리, 산업, 위험, 권력 구조, 개인의 대응 방식을 어떻게 바꾸는지 설명하는 발표용 웹 자료",
  openGraph: {
    title: "AI가 바꾸는 일과 돈",
    description: "일자리, 로봇, AI 에이전트, 데이터 소유권을 한 번에 이해하기",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <HashScrollRestorer />
        {children}
      </body>
    </html>
  );
}
