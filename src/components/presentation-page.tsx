import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Brain,
  CircleDollarSign,
  FileText,
  Landmark,
  Network,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import { hero, notionUrl, route, sections, sources } from "@/data/source-data";
import { chapters } from "@/data/source-data";
import { AiUseNote } from "@/components/ai-use-note";
import { MotionShell, Reveal, Stagger, StaggerItem } from "@/components/motion-shell";

type Pair = [string, string];
type Triple = [string, string, string];
type Metric = [string, number, string];
type QuoteItem = {
  name: string;
  quote: string;
  note: string;
  source: string;
};
type ContentBlock = {
  type: string;
  title?: string;
  items?: unknown[];
  steps?: Pair[];
  left?: string[];
  right?: Pair[];
  rightTitle?: string;
  beforeTitle?: string;
  before?: string[];
  afterTitle?: string;
  after?: string[];
  footer?: string;
  tone?: string;
};
type Section = {
  id: string;
  label: string;
  title: string;
  lead: string;
  image: string;
  blocks: ContentBlock[];
};

const typedHero = hero as { kicker: string; title: string; subtitle: string; image: string };
const typedRoute = route as Pair[];
const typedSections = sections as Section[];
const typedSources = sources as Pair[];
const typedChapters = chapters as {
  id: string;
  title: string;
  question: string;
  summary: string;
  points: { title: string; body: string; keywords: string[] }[];
}[];

const navItems = [
  ["ai-use", "작성"],
  ["problem", "문제"],
  ["history", "역사"],
  ["changed", "변화"],
  ["risk", "위험"],
  ["scenarios", "미래"],
  ["musk", "머스크"],
  ["power", "권력"],
  ["action", "대응"],
];

const sectionIcons = [CircleDollarSign, Brain, FileText, ShieldAlert, Sparkles, Zap, Landmark, BadgeCheck];

const sectionTakeaways: Record<string, string> = {
  problem: "AI가 사람 대신 일하면 소득, 세금, 소유권의 기준이 다시 정해집니다.",
  history: "정체기는 계산 자원, 데이터, 알고리즘, 시장이 동시에 부족할 때 왔습니다.",
  changed: "전문직의 가치는 사라지는 것이 아니라 더 낮은 단가로 다시 계산되고 있습니다.",
  risk: "AI가 도구와 권한을 가지는 순간, 위험은 정보 오류에서 현실 피해로 바뀝니다.",
  scenarios: "초생산 사회와 권력 집중은 같은 기술에서 동시에 나올 수 있습니다.",
  musk: "머스크의 사업들은 모델, 전기, 로봇, 우주, 뇌 인터페이스를 하나로 묶습니다.",
  power: "AI 에이전트가 업무의 입구가 되면 기업과 데이터 소유자의 힘이 커집니다.",
  action: "정확한 예측보다 과도기에 살아남는 사용 능력이 중요합니다.",
};

function imageSrc(name: string) {
  return `/images/${name}`;
}

function renderList(items: string[]) {
  return (
    <ul className="copy-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "quote-grid": {
      const quoteItems = (block.items ?? []) as QuoteItem[];
      return (
        <div className="quote-strip">
          {quoteItems.map((item) => (
            <article className="quote-item" key={item.name}>
              <p className="eyebrow">{item.source}</p>
              <h3>{item.name}</h3>
              <strong>{item.quote}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      );
    }
    case "flow":
      return (
        <article className="wide-panel flow-panel">
          <div className="panel-title">
            <h3>{block.title}</h3>
            <p>돈이 어디에서 생기고 어디로 이동하는지 한 줄로 봅니다.</p>
          </div>
          <div className="flow-track">
            {(block.steps ?? []).map(([title, body], index) => (
              <div className="flow-node" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </article>
      );
    case "split":
      return (
        <article className="wide-panel split-panel">
          <div>
            <h3>{block.title}</h3>
            {renderList(block.left ?? [])}
          </div>
          <aside>
            <p className="eyebrow">{block.rightTitle}</p>
            {(block.right ?? []).map(([title, body]) => (
              <div className="side-row" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </aside>
        </article>
      );
    case "timeline":
      return (
        <div className="history-timeline">
          {((block.items ?? []) as Triple[]).map(([year, title, body]) => (
            <article key={`${year}-${title}`}>
              <time>{year}</time>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      );
    case "reason-grid":
      return (
        <article className="wide-panel">
          <div className="panel-title">
            <h3>{block.title}</h3>
          </div>
          <div className="four-grid">
            {((block.items ?? []) as Pair[]).map(([title, body]) => (
              <div className="plain-tile" key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </article>
      );
    case "metric-bars":
      return (
        <article className="wide-panel metric-panel">
          <div className="panel-title">
            <h3>{block.title}</h3>
          </div>
          {((block.items ?? []) as Metric[]).map(([title, value, body]) => (
            <div className="metric-row" key={title} style={{ "--value": `${value}%` } as React.CSSProperties}>
              <div>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
              <i aria-hidden="true" />
            </div>
          ))}
        </article>
      );
    case "comparison":
      return (
        <article className="wide-panel compare-panel">
          <h3>{block.title}</h3>
          <div className="compare-grid">
            <section>
              <p>{block.beforeTitle}</p>
              {renderList(block.before ?? [])}
            </section>
            <section>
              <p>{block.afterTitle}</p>
              {renderList(block.after ?? [])}
            </section>
          </div>
          <footer>{block.footer}</footer>
        </article>
      );
    case "robot-shift":
      return (
        <article className="wide-panel">
          <div className="panel-title">
            <h3>{block.title}</h3>
          </div>
          <div className="three-grid">
            {((block.items ?? []) as Triple[]).map(([title, value, body]) => (
              <div className="number-tile" key={title}>
                <span>{title}</span>
                <strong>{value}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </article>
      );
    case "impact-grid":
      return (
        <div className="impact-grid">
          {((block.items ?? []) as Pair[]).map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      );
    case "risk-lanes":
      return (
        <div className="risk-lanes">
          {((block.items ?? []) as Triple[]).map(([title, subtitle, body]) => (
            <article key={title}>
              <span>{title}</span>
              <h3>{subtitle}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      );
    case "evidence-pair":
      return (
        <article className="wide-panel evidence-panel">
          <h3>{block.title}</h3>
          {((block.items ?? []) as Pair[]).map(([title, body]) => (
            <div key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </div>
          ))}
        </article>
      );
    case "scenario":
      return (
        <article className={`wide-panel scenario-panel ${block.tone}`}>
          <h3>{block.title}</h3>
          <div>
            {((block.items ?? []) as Pair[]).map(([title, body]) => (
              <section key={title}>
                <strong>{title}</strong>
                <p>{body}</p>
              </section>
            ))}
          </div>
        </article>
      );
    case "stack":
      return (
        <article className="wide-panel stack-panel">
          <h3>{block.title}</h3>
          <div>
            {((block.items ?? []) as Pair[]).map(([title, body]) => (
              <section key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </section>
            ))}
          </div>
        </article>
      );
    case "power-map":
      return (
        <div className="power-map">
          {((block.items ?? []) as Pair[]).map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      );
    case "action-list":
      return (
        <div className="action-list">
          {((block.items ?? []) as Pair[]).map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      );
    case "closing":
      return (
        <article className="closing-panel">
          <h3>{block.title}</h3>
          {renderList((block.items ?? []) as string[])}
        </article>
      );
    default:
      return null;
  }
}

function SectionView({ section, index }: { section: Section; index: number }) {
  const Icon = sectionIcons[index] ?? Network;
  return (
    <>
      <span className="section-anchor" id={section.id} aria-hidden="true" />
      <section className="story-section" id={`section-${section.id}`}>
        <div className="section-stage">
          <div className="visual-card">
            <Image src={imageSrc(section.image)} alt="" fill sizes="(max-width: 900px) 100vw, 420px" priority={index < 2} />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="section-head">
            <p className="eyebrow">{section.label}</p>
            <h2>{section.title}</h2>
            <p>{section.lead}</p>
          </div>
          <aside className="takeaway-card">
            <Icon size={24} />
            <strong>이 장의 결론</strong>
            <p>{sectionTakeaways[section.id]}</p>
          </aside>
        </div>
        <div className="section-body">
          {section.blocks.map((block, blockIndex) => (
            <BlockRenderer block={block} key={`${section.id}-${block.type}-${blockIndex}`} />
          ))}
        </div>
      </section>
    </>
  );
}

export function PresentationPage() {
  return (
    <MotionShell>
    <main>
      <header className="hero-section">
        <nav className="floating-nav" aria-label="발표 섹션">
          {navItems.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hero-media" aria-hidden="true">
          <Image src={imageSrc(typedHero.image)} alt="" fill sizes="100vw" priority />
        </div>

        <div className="hero-content">
          <p className="eyebrow">{typedHero.kicker}</p>
          <h1>{typedHero.title}</h1>
          <p>{typedHero.subtitle}</p>
          <div className="hero-actions">
            <a href="#ai-use">
              먼저 작성 <ArrowDown size={18} />
            </a>
            <a href={notionUrl} target="_blank" rel="noreferrer">
              세부 자료 <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </header>

      <AiUseNote />

      <section className="brief-section" aria-labelledby="brief-title">
        <Reveal className="brief-copy">
          <p className="eyebrow">발표 흐름</p>
          <h2 id="brief-title">한 가지 질문으로 끝까지 갑니다</h2>
          <p>
            AI가 사람 대신 일하게 될 때, 돈은 어디에서 생기고 누구에게 모일까요. 이 질문을 따라가면 일자리,
            산업, 위험, 권력 구조, 개인의 대응까지 연결됩니다.
          </p>
        </Reveal>
        <Stagger className="route-grid">
          {typedRoute.map(([title, body], index) => {
            const Icon = sectionIcons[index] ?? Network;
            const chapter = typedChapters[index];
            return (
              <StaggerItem key={title}>
              <article>
                <Icon size={22} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{body}</p>
                {chapter ? (
                  <Link className="inline-detail-link" href={`/chapters/${chapter.id}`}>
                    상세 보기 <ArrowRight size={16} />
                  </Link>
                ) : null}
              </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section className="chapter-index" aria-labelledby="chapter-index-title">
        <Reveal>
          <p className="eyebrow">상세 페이지</p>
          <h2 id="chapter-index-title">빠진 키워드는 각 장에서 전부 다시 확인합니다</h2>
          <p>
            메인 화면은 발표 흐름에 집중하고, 각 상세 페이지에는 사용자가 준 항목을 빠짐없이 문장과 키워드로
            분리했습니다.
          </p>
        </Reveal>
        <Stagger className="chapter-index-grid">
          {typedChapters.map((chapter, index) => (
            <StaggerItem key={chapter.id}>
              <Link href={`/chapters/${chapter.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{chapter.title}</strong>
                <p>{chapter.summary}</p>
                <em>{chapter.points.flatMap((point) => point.keywords).slice(0, 4).join(" · ")}</em>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {typedSections.map((section, index) => (
        <SectionView section={section} index={index} key={section.id} />
      ))}

      <section className="source-section" aria-labelledby="sources-title">
        <div>
          <p className="eyebrow">근거와 상세 설명</p>
          <h2 id="sources-title">화면에는 흐름만 남기고, 자세한 자료는 따로 둡니다</h2>
          <p>
            발표 중에는 핵심 사례와 인포그래픽만 보여주고, 원문과 추가 설명은 Notion과 출처 링크에서 바로 확인할 수
            있게 정리했습니다.
          </p>
          <a className="primary-link" href={notionUrl} target="_blank" rel="noreferrer">
            Notion 상세 자료 열기 <ArrowRight size={18} />
          </a>
        </div>
        <div className="source-grid">
          {typedSources.map(([title, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={href}>
              <strong>{title}</strong>
              <span>{new URL(href).hostname}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
    </MotionShell>
  );
}
