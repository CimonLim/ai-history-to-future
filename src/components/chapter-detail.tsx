import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { chapters, notionUrl } from "@/data/source-data";
import { MotionShell, Reveal, Stagger, StaggerItem } from "@/components/motion-shell";

type Chapter = (typeof chapters)[number];

export function ChapterDetail({ chapter }: { chapter: Chapter }) {
  const index = chapters.findIndex((item: Chapter) => item.id === chapter.id);
  const prev = chapters[index - 1];
  const next = chapters[index + 1];

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
          </div>
        </header>

        <section className="chapter-summary">
          <Reveal>
            <div className="chapter-note">
              <BookOpen size={22} />
              <strong>발표에서 이 장을 말하는 방식</strong>
              <p>{chapter.speakerNote}</p>
            </div>
          </Reveal>
          <Stagger className="chapter-point-grid">
            {chapter.points.map((point: Chapter["points"][number], pointIndex: number) => (
              <StaggerItem key={point.title}>
                <article className="chapter-point">
                  <span>{String(pointIndex + 1).padStart(2, "0")}</span>
                  <h2>{point.title}</h2>
                  <p>{point.body}</p>
                  <div>
                    {point.keywords.map((keyword: string) => (
                      <em key={keyword}>{keyword}</em>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className="chapter-check">
          <Reveal>
            <h2>이 장에서 반드시 남길 키워드</h2>
          </Reveal>
          <Stagger className="keyword-wall">
            {chapter.points.flatMap((point: Chapter["points"][number]) => point.keywords).map((keyword: string) => (
              <StaggerItem key={`${chapter.id}-${keyword}`}>
                <span>
                  <CheckCircle2 size={16} />
                  {keyword}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
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
