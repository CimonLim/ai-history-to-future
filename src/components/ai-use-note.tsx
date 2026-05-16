"use client";

import { useEffect, useMemo, useState } from "react";
import { Bot, BriefcaseBusiness, Lightbulb, RotateCcw, Save } from "lucide-react";

const STORAGE_KEY = "ai-history-to-future.ai-use-note.v1";

type Answers = {
  model: string;
  work: string;
  tip: string;
};

const initialAnswers: Answers = {
  model: "",
  work: "",
  tip: "",
};

const questions = [
  {
    key: "model",
    icon: Bot,
    label: "어떤 모델 혹은 에이전트를 사용하나요?",
    placeholder: "예: ChatGPT, Claude, Gemini, Perplexity, Cursor, 사내 에이전트",
  },
  {
    key: "work",
    icon: BriefcaseBusiness,
    label: "어떤 작업에서 어떻게 사용하나요?",
    placeholder: "예: 자료 조사, 문서 초안, 코드 리뷰, 이미지 제작, 회의 정리",
  },
  {
    key: "tip",
    icon: Lightbulb,
    label: "자신만의 사용 팁은 무엇인가요?",
    placeholder: "예: 먼저 역할을 정한다, 예시를 붙인다, 결과를 비교한다, 검증 질문을 다시 한다",
  },
] as const;

export function AiUseNote() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [loaded, setLoaded] = useState(false);
  const filledCount = useMemo(
    () => Object.values(answers).filter((value) => value.trim().length > 0).length,
    [answers],
  );

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const cached = window.localStorage.getItem(STORAGE_KEY);
        if (cached) {
          setAnswers({ ...initialAnswers, ...JSON.parse(cached) });
        }
      } catch {
        setAnswers(initialAnswers);
      } finally {
        setLoaded(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers, loaded]);

  return (
    <section className="ai-use-section" id="ai-use" aria-labelledby="ai-use-title">
      <div className="ai-use-head">
        <div>
          <p className="eyebrow">시작 질문</p>
          <h2 id="ai-use-title">지금 나는 AI를 어떻게 쓰고 있나?</h2>
          <p>발표를 듣기 전에 현재 사용 방식을 먼저 적어봅니다.</p>
        </div>
        <div className="ai-use-save" aria-live="polite">
          <Save size={18} />
          <span>{loaded ? `자동 저장됨 · ${filledCount}/3` : "불러오는 중"}</span>
        </div>
      </div>

      <div className="ai-use-grid">
        {questions.map(({ key, icon: Icon, label, placeholder }, index) => (
          <label className="ai-use-card" key={key}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Icon size={22} />
            <strong>{label}</strong>
            <textarea
              value={answers[key]}
              onChange={(event) => setAnswers((current) => ({ ...current, [key]: event.target.value }))}
              placeholder={placeholder}
              rows={5}
            />
          </label>
        ))}
      </div>

      <button className="ai-use-reset" type="button" onClick={() => setAnswers(initialAnswers)}>
        <RotateCcw size={16} />
        다시 쓰기
      </button>
    </section>
  );
}
