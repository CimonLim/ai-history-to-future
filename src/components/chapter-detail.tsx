import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ListChecks } from "lucide-react";
import { chapters, notionUrl } from "@/data/source-data";
import { MotionShell } from "@/components/motion-shell";

type Chapter = (typeof chapters)[number];

export function ChapterDetail({ chapter }: { chapter: Chapter }) {
  const index = chapters.findIndex((item: Chapter) => item.id === chapter.id);
  const prev = chapters[index - 1];
  const next = chapters[index + 1];
  const keywords = Array.from(new Set(chapter.points.flatMap((point: Chapter["points"][number]) => point.keywords)));

  return (
    <MotionShell>
      <main className="chapter-page">
        <header className="chapter-hero">
          <div className="chapter-hero-media">
            <Image src={`/images/${chapter.image}`} alt="" fill priority sizes="100vw" />
          </div>
          <nav className="chapter-nav" aria-label="상세 페이지 이동">
            <Link href="/">
              <ArrowLeft size={18} /> 전체 흐름
            </Link>
            <a href={notionUrl} target="_blank" rel="noreferrer">
              Notion 자료 <ArrowRight size={18} />
            </a>
          </nav>
          <div className="chapter-hero-copy">
            <p className="eyebrow">{chapter.number}. {chapter.title}</p>
            <h1>{chapter.question}</h1>
            <p>{chapter.summary}</p>
            <div className="chapter-hero-meta" aria-label="챕터 요약">
              <span>핵심 포인트 {chapter.points.length}개</span>
              <span>키워드 {keywords.length}개</span>
              <span>발표용 상세 페이지</span>
            </div>
          </div>
        </header>

        <section className="chapter-summary">
          <div className="chapter-note">
            <BookOpen size={22} />
            <strong>이 장의 판단</strong>
            <p>{chapter.speakerNote}</p>
          </div>
          <div className="chapter-content">
            <div className="chapter-content-head">
              <ListChecks size={22} />
              <div>
                <h2>핵심 포인트</h2>
                <p>발표에서 바로 말할 수 있게 주장, 근거, 예시를 한 단락씩 나눴습니다.</p>
              </div>
            </div>
            <div className="chapter-point-grid">
              {chapter.points.map((point: Chapter["points"][number], pointIndex: number) => (
                <article className="chapter-point" key={point.title}>
                  <span>{String(pointIndex + 1).padStart(2, "0")}</span>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                  <div>
                    {point.keywords.map((keyword: string) => (
                      <em key={keyword}>{keyword}</em>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="chapter-check">
          <h2>키워드 체크</h2>
          <div className="keyword-wall">
            {keywords.map((keyword: string) => (
              <span key={`${chapter.id}-${keyword}`}>
                <CheckCircle2 size={16} />
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <footer className="chapter-footer">
          {prev ? (
            <Link href={`/chapters/${prev.id}`}>
              <ArrowLeft size={18} />
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/chapters/${next.id}`}>
              {next.title}
              <ArrowRight size={18} />
            </Link>
          ) : (
            <Link href="/">
              전체 흐름
              <ArrowRight size={18} />
            </Link>
          )}
        </footer>
      </main>
    </MotionShell>
  );
}
