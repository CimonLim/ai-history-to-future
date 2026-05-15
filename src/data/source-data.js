export const notionUrl = "https://www.notion.so/361664d8d92c815d8eb0ed83d3ff71b4";

export const hero = {
  kicker: "AI 미래 강의",
  title: "AI가 바꾸는\n일과 돈",
  subtitle: "일자리, 로봇, AI 에이전트, 데이터 소유권을 한 번에 이해하기",
  image: "image-5-1.jpg",
};

export const route = [
  ["문제제기", "AI가 일하면 돈은 누가 벌까"],
  ["AI의 역사", "왜 지금 갑자기 빨라졌을까"],
  ["이미 바뀐 일", "전문직과 검색은 어떻게 흔들렸나"],
  ["AI의 위험", "능력이 올라가면 무엇이 위험해지나"],
  ["긍정 시나리오", "초생산 사회는 가능할까"],
  ["부정 시나리오", "어떤 위험이 같이 커질까"],
  ["머스크의 그림", "전기, 로봇, 우주, 뇌를 왜 묶고 있나"],
  ["미래 권력", "국가보다 기업과 데이터가 강해질까"],
  ["우리의 대응", "과도기에 무엇을 해야 하나"],
];

export const sections = [
  {
    id: "problem",
    label: "1. 문제제기",
    title: "AI가 일하면 돈은 누가 벌까?",
    lead: "일론 머스크, 샘 울트먼, 빌 게이츠의 말은 표현은 달라도 같은 질문으로 모입니다. AI가 노동을 대신하면 소득은 어디에서 오고, 누가 나눌까요?",
    image: "image-1-1.jpg",
    blocks: [
      {
        type: "quote-grid",
        items: [
          {
            name: "일론 머스크",
            quote: "일이 필요 없는 시점이 올 수 있다",
            note: "AI와 로봇이 충분히 발전하면 노동의 필요가 줄어든다는 주장입니다.",
            source: "ITV 인터뷰",
          },
          {
            name: "샘 울트먼",
            quote: "AI가 만든 부를 사회가 나눠야 한다",
            note: "universal high income, American Equity Fund처럼 AI 자본의 수익을 나누는 방향입니다.",
            source: "Moore's Law for Everything",
          },
          {
            name: "빌 게이츠",
            quote: "로봇에게도 세금을 매길 수 있다",
            note: "사람의 일을 대체한 로봇이 세금 기반을 무너뜨리지 않게 하자는 robot tax 논의입니다.",
            source: "Axios 인터뷰",
          },
        ],
      },
      {
        type: "flow",
        title: "논점은 기술이 아니라 돈의 흐름입니다",
        steps: [
          ["노동", "사람이 일해서 소득을 얻음"],
          ["AI와 로봇", "일부 업무가 자동화됨"],
          ["자본", "모델, 데이터, 로봇, 전기를 가진 쪽에 수익이 모임"],
          ["분배", "universal high income, 로봇세, 데이터 저작권료가 논의됨"],
        ],
      },
      {
        type: "split",
        title: "고부가가치 산업도 예외가 아닙니다",
        left: [
          "SaaS 붕괴 논쟁: 사람이 여러 앱을 직접 쓰는 방식에서 AI 에이전트가 앱을 대신 조작하는 방식으로 이동",
          "OpenAI와 Jony Ive의 AI 기기: 앱 화면을 여는 휴대폰보다, AI에게 바로 일을 맡기는 기기 가능성",
          "핵심 변화: 소프트웨어를 쓰는 사람이 줄어드는 것이 아니라, 사람이 직접 만지는 화면이 줄어드는 것",
        ],
        rightTitle: "사용 방식 변화",
        right: [
          ["지금", "사람이 앱을 고르고 입력함"],
          ["변화", "AI 에이전트가 도구를 골라 실행함"],
          ["다음", "AI 중심 기기가 화면과 앱의 역할을 줄임"],
        ],
      },
    ],
  },
  {
    id: "history",
    label: "2. AI의 역사",
    title: "과거를 보면 다음 변화의 방향이 보입니다",
    lead: "AI는 한 번에 갑자기 등장한 기술이 아닙니다. 규칙 기반, 딥러닝, 트랜스포머, ChatGPT, AI 에이전트로 이어지며 막혔던 이유와 뚫린 이유가 반복됐습니다.",
    image: "image-14-1.jpg",
    blocks: [
      {
        type: "timeline",
        items: [
          ["1950s", "규칙 기반 AI", "사람이 논리를 직접 넣는 방식"],
          ["1980s", "전문가 시스템", "특정 분야 지식을 규칙으로 구현"],
          ["1990s", "정체기", "계산 자원, 데이터, 상업적 성과 부족"],
          ["2012", "딥러닝", "이미지 인식 성능이 크게 개선"],
          ["2017", "트랜스포머", "언어 모델의 확장 기반"],
          ["2022", "ChatGPT", "일반인이 매일 쓰는 AI로 확산"],
          ["2024+", "AI 에이전트", "검색, 코딩, 문서, 도구 사용까지 연결"],
        ],
      },
      {
        type: "reason-grid",
        title: "정체기가 온 이유는 반복됩니다",
        items: [
          ["계산 자원", "아이디어가 있어도 돌릴 컴퓨터가 부족했습니다."],
          ["데이터", "학습할 자료가 적거나 정리되어 있지 않았습니다."],
          ["알고리즘", "성능을 크게 밀어 올릴 방법이 부족했습니다."],
          ["시장", "기술을 돈으로 바꿀 제품이 약했습니다."],
        ],
      },
      {
        type: "metric-bars",
        title: "성능이 좋아지는 속도는 점점 빨라졌습니다",
        items: [
          ["모델 학습 계산량", 95, "2010년 이후 큰 모델 학습에 쓰는 계산량이 빠르게 증가"],
          ["긴 업무 처리", 72, "AI가 사람이 하던 긴 작업을 처리하는 시간이 늘어남"],
          ["제품 반영 속도", 84, "연구 결과가 제품으로 들어오는 간격이 짧아짐"],
        ],
      },
      {
        type: "comparison",
        title: "초기 ChatGPT와 지금의 사용법은 다릅니다",
        beforeTitle: "초기 사용법",
        before: [
          "사람이 좋은 답을 얻기 위해 프롬프트를 길게 설계",
          "역할 부여, 조건 나열, 예시 입력이 중요",
          "최종 품질을 사람이 계속 보정",
        ],
        afterTitle: "현재 흐름",
        after: [
          "AI가 맥락을 더 잘 이해하고 스스로 계획",
          "검색, 파일, 코드, 도구를 연결해 실행",
          "사람이 생각할 부분이 줄어드는 방향",
        ],
        footer: "방향은 명확합니다. 프롬프트 엔지니어링으로 사람이 메우던 부분을 모델과 에이전트가 빠르게 흡수하고 있습니다.",
      },
      {
        type: "robot-shift",
        title: "사람에서 로봇으로 바뀌는 일도 빨라집니다",
        items: [
          ["사람", "8시간 근무", "교대, 휴식, 안전, 교육 비용이 필요"],
          ["로봇", "24시간 운용", "전기와 유지보수 비용 중심으로 계산"],
          ["현대", "AI 로보틱스", "공장과 물류에서 사람의 역할이 줄어드는 방향을 공개적으로 제시"],
        ],
      },
    ],
  },
  {
    id: "changed",
    label: "3. 이미 변화한 세계",
    title: "일부 직업의 가치는 이미 다시 계산되고 있습니다",
    lead: "변호사, 의사, 판사, 3D 애니메이션 제작자, 재무 작업 같은 고부가가치 업무도 AI로 비용과 시간이 줄어들고 있습니다.",
    image: "image-9-1.jpg",
    blocks: [
      {
        type: "impact-grid",
        items: [
          ["변호사", "계약서 검토, 판례 검색, 초안 작성의 시간이 줄어듦"],
          ["의사", "문헌 정리, 영상 판독 보조, 진료 기록 요약이 빨라짐"],
          ["판사", "판례 검색과 문서 정리 보조가 가능해짐"],
          ["3D 애니메이션", "콘셉트, 리깅, 영상 생성의 초기 비용이 내려감"],
          ["재무 작업", "보고서, 모델링, 자료 대조를 AI가 보조"],
          ["사무 자동화", "문서, 이메일, 회의록, 데이터 정리의 단가가 내려감"],
        ],
      },
      {
        type: "split",
        title: "검색도 SEO에서 AEO로 이동합니다",
        left: [
          "SEO: 검색 결과에서 클릭을 얻기 위해 페이지를 최적화",
          "AEO: AI 답변 안에 인용되고 선택되기 위해 구조화된 정보를 제공",
          "중요한 변화: 사용자가 웹사이트를 방문하기 전에 AI가 먼저 답을 조합",
        ],
        rightTitle: "콘텐츠의 목표 변화",
        right: [
          ["과거", "검색 노출"],
          ["현재", "AI 답변에 포함"],
          ["다음", "데이터 출처로 인정받고 보상받기"],
        ],
      },
    ],
  },
  {
    id: "risk",
    label: "4. AI의 무서움",
    title: "AI가 위험한 이유는 말이 아니라 행동입니다",
    lead: "답변을 잘하는 수준을 넘어서 도구를 쓰고, 시스템에 접근하고, 보안 업무를 수행하면 위험의 성격이 달라집니다.",
    image: "image-23-1.jpg",
    blocks: [
      {
        type: "risk-lanes",
        items: [
          ["말", "설명과 요약", "잘못된 정보가 위험"],
          ["도구", "검색, 코드, 파일, API 실행", "실제 시스템에 영향을 줄 수 있음"],
          ["권한", "국방, 보안, 핵심 인프라", "결정의 책임과 통제가 어려워짐"],
        ],
      },
      {
        type: "evidence-pair",
        title: "Claude와 미국 국방부 이슈",
        items: [
          ["Claude Gov", "Anthropic은 미국 국가안보 고객을 위한 Claude Gov 모델을 공개했습니다."],
          ["DoD 협력", "미 국방부와 책임 있는 AI 활용을 위한 협력을 발표했습니다."],
          ["핵심 질문", "AI를 국방과 보안에 쓰는 순간, 성능뿐 아니라 통제와 책임이 문제가 됩니다."],
        ],
      },
      {
        type: "evidence-pair",
        title: "Claude Mythos와 해킹 능력",
        items: [
          ["Project Glasswing", "AI 사이버 보안 평가와 방어 연구가 공개됐습니다."],
          ["Mythos Preview", "Claude 계열 모델의 공격·방어 능력을 평가하는 연구 흐름이 드러났습니다."],
          ["핵심 질문", "AI가 취약점을 찾고 공격 과정을 자동화하면, 방어자와 공격자의 속도가 동시에 빨라집니다."],
        ],
      },
    ],
  },
  {
    id: "scenarios",
    label: "5-6. 미래 시나리오",
    title: "미래는 좋게도, 나쁘게도 갈 수 있습니다",
    lead: "한쪽은 초생산 사회와 universal high income입니다. 다른 한쪽은 AI 권력 집중, 전기와 자원 병목, 모델 붕괴, 토큰 비용 상승입니다.",
    image: "image-10-1.jpg",
    blocks: [
      {
        type: "scenario",
        tone: "positive",
        title: "좋은 미래: 초생산 사회",
        items: [
          ["생산", "AI와 로봇이 더 많은 물건과 서비스를 만듦"],
          ["비용", "반복 업무와 지식 업무의 단가가 낮아짐"],
          ["분배", "universal high income, American Equity Fund, 로봇세 같은 장치가 필요"],
        ],
      },
      {
        type: "scenario",
        tone: "negative",
        title: "나쁜 미래: 네 가지 위험",
        items: [
          ["AI에게 지배", "제프리 힌튼은 AI에게 모성애 같은 보호 본능을 심어야 한다고 말했습니다."],
          ["전기와 자원", "데이터센터 전력 수요가 AI 발전의 병목이 될 수 있습니다."],
          ["모델 붕괴", "AI가 만든 데이터만 다시 학습하면 새로운 지식이 줄어들 수 있습니다."],
          ["토큰 비용", "계산 비용이 급등하면 AI 사용이 권력이 될 수 있습니다."],
        ],
      },
    ],
  },
  {
    id: "musk",
    label: "7. 일론 머스크의 그림",
    title: "머스크는 AI에 필요한 재료를 한꺼번에 모으고 있습니다",
    lead: "일론 머스크가 말하는 미래가 그대로 된다고 단정할 수는 없습니다. 하지만 xAI, Tesla, Optimus, Starlink, SpaceX, Neuralink는 하나의 흐름으로 볼 수 있습니다.",
    image: "image-17-1.jpg",
    blocks: [
      {
        type: "stack",
        title: "머스크의 조각들",
        items: [
          ["xAI", "AI 모델"],
          ["Tesla", "실제 세계 데이터와 자동차"],
          ["Optimus", "사람을 대신할 로봇"],
          ["Starlink", "연결망"],
          ["SpaceX", "우주 인프라"],
          ["Neuralink", "생각으로 컴퓨터를 쓰는 인터페이스"],
        ],
      },
      {
        type: "split",
        title: "전기세 문제와 우주 데이터센터 가설",
        left: [
          "AI가 커질수록 전기와 냉각이 핵심 비용이 됩니다.",
          "우주 데이터센터는 아직 확정된 사업이라기보다, 전력·냉각·공간 문제를 다르게 풀 수 있다는 가설에 가깝습니다.",
          "중요한 점은 AI 경쟁이 모델만의 경쟁이 아니라 전기와 인프라 경쟁으로 이동한다는 것입니다.",
        ],
        rightTitle: "AI 인프라 경쟁",
        right: [
          ["모델", "더 큰 지능"],
          ["전기", "더 많은 계산"],
          ["로봇", "현실 세계 실행"],
          ["인터페이스", "키보드 이후의 입력"],
        ],
      },
      {
        type: "comparison",
        title: "뉴럴링크는 입력 방식을 바꾸려는 시도입니다",
        beforeTitle: "지금",
        before: ["키보드와 마우스로 입력", "음성은 빠르지만 주변 사람에게 들림", "화면을 계속 봐야 함"],
        afterTitle: "예상 흐름",
        after: ["생각으로 AI에게 지시", "입력 속도와 사생활 문제를 동시에 줄임", "AI 사용 시간이 더 늘어남"],
        footer: "키보드가 없어지는 시대가 오면, AI를 쓰는 방식 자체가 달라집니다.",
      },
    ],
  },
  {
    id: "power",
    label: "8. 예측할 수 있는 미래",
    title: "국가보다 AI를 가진 기업이 더 강해질 수 있습니다",
    lead: "AI 에이전트가 모든 업무의 입구가 되면, 패권자 한 기업이 사용자의 일과 데이터를 독점할 가능성이 생깁니다.",
    image: "image-8-1.jpg",
    blocks: [
      {
        type: "power-map",
        items: [
          ["국가", "규제와 세금을 설계"],
          ["AI 기업", "모델, 에이전트, 계산 자원을 소유"],
          ["데이터 소유자", "원천 데이터와 저작권을 협상"],
          ["개인", "AI를 쓰는 능력으로 생산성을 확보"],
        ],
      },
      {
        type: "split",
        title: "원천 데이터를 가진 쪽은 저작권료를 받을 수 있습니다",
        left: [
          "EU AI Act는 범용 AI에 투명성과 저작권 관련 의무를 부과하는 방향으로 움직입니다.",
          "TIME, News Corp 같은 매체는 AI 기업과 콘텐츠 사용 계약을 맺었습니다.",
          "AI 시대에는 데이터를 막는 것만이 답이 아니라, 데이터가 쓰일 때 보상받는 구조를 만드는 것이 중요합니다.",
        ],
        rightTitle: "협상력이 생기는 조건",
        right: [
          ["원천성", "AI가 대체하기 어려운 데이터"],
          ["권리", "저작권과 계약 구조"],
          ["규모", "AI가 학습하거나 답변에 쓰고 싶을 만큼 충분한 양"],
        ],
      },
    ],
  },
  {
    id: "action",
    label: "9. 우리는 뭘 해야 하는가",
    title: "정확한 예측보다 중요한 것은 과도기를 버티는 힘입니다",
    lead: "미래를 정확히 맞히기는 어렵습니다. 확실한 것은 변화가 바로 한 번에 끝나지 않고, 긴 과도기가 있다는 점입니다.",
    image: "image-21-1.jpg",
    blocks: [
      {
        type: "action-list",
        items: [
          ["써보기", "AI를 공부만 하지 말고 실제 업무에 매일 넣어봅니다."],
          ["비교하기", "AI가 만든 결과와 사람이 만든 결과를 비용, 속도, 품질로 비교합니다."],
          ["검증하기", "출처, 숫자, 법적 책임이 필요한 부분은 사람이 확인합니다."],
          ["추적하기", "모델, 로봇, 규제, 저작권료, 전기 비용의 변화를 계속 봅니다."],
          ["바꾸기", "AI가 잘하는 일은 넘기고, 사람은 문제 정의와 판단에 집중합니다."],
        ],
      },
      {
        type: "closing",
        title: "핵심만 남기면",
        items: [
          "AI는 기술 문제가 아니라 일과 돈의 구조를 바꾸는 문제입니다.",
          "AI 에이전트와 로봇은 사람의 역할을 줄이고, 기업과 데이터의 힘을 키울 수 있습니다.",
          "과도기에는 AI를 잘 쓰는 사람이 도태를 늦추고 새로운 역할을 찾을 가능성이 높습니다.",
        ],
      },
    ],
  },
];

export const sources = [
  ["일론 머스크 ITV 인터뷰", "https://www.itv.com/news/2023-11-02/elon-musk-tells-rishi-sunak-ai-will-bring-a-time-when-no-job-is-needed"],
  ["샘 울트먼, Moore's Law for Everything", "https://moores.samaltman.com/"],
  ["빌 게이츠 로봇세 인터뷰", "https://www.axios.com/2017/12/15/bill-gates-says-robots-should-pay-taxes-1513300519"],
  ["Bain, AI and SaaS", "https://www.bain.com/insights/will-ai-disrupt-saas/"],
  ["OpenAI and Jony Ive", "https://openai.com/sam-and-jony/"],
  ["Epoch, AI compute trend", "https://epoch.ai/data-insights/compute-trend-post-2010"],
  ["METR, long task horizon", "https://arxiv.org/abs/2503.14499"],
  ["Hyundai AI robotics strategy", "https://www.hyundai.com/worldwide/en/newsroom/detail/hyundai-motor-group-announces-ai-robotics-strategy-to-lead-human-centered-robotics-era-at-ces-2026-0000001100"],
  ["Anthropic Claude Gov", "https://www.anthropic.com/news/claude-gov-models-for-u-s-national-security-customers"],
  ["Anthropic Project Glasswing", "https://www.anthropic.com/project/glasswing"],
  ["Anthropic Mythos Preview", "https://red.anthropic.com/2026/mythos-preview/"],
  ["IEA, Energy and AI", "https://www.iea.org/reports/energy-and-ai"],
  ["Nature, model collapse", "https://www.nature.com/articles/s41586-024-07566-y"],
  ["EU AI Act GPAI obligations", "https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act"],
  ["TIME and OpenAI partnership", "https://time.com/6992823/time-openai-partnership/"],
  ["News Corp and OpenAI partnership", "https://newscorp.com/2024/05/22/news-corp-and-openai-sign-landmark-multi-year-global-partnership/"],
];

export const chapters = [
  {
    id: "problem",
    number: "1",
    title: "문제제기",
    question: "AI가 일하면 돈은 누가 벌까?",
    summary:
      "일론 머스크, 샘 울트먼, 빌 게이츠의 발언은 일자리 감소, universal high income, 로봇세라는 하나의 질문으로 연결됩니다.",
    image: "image-1-1.jpg",
    points: [
      {
        title: "일론 머스크의 발언",
        body: "AI와 로봇이 충분히 발전하면 일이 필요 없는 시점이 올 수 있다는 문제 제기입니다. 핵심은 사람이 일을 안 해도 되는 좋은 미래가 아니라, 노동 소득이 사라질 때 소득이 어디서 오느냐입니다.",
        keywords: ["일론 머스크", "일이 필요 없는 시점", "노동 소득"],
      },
      {
        title: "샘 울트먼과 universal high income",
        body: "샘 울트먼은 AI가 만든 부가 자본에 집중될 수 있으므로 사회가 AI 자본의 수익을 나누는 구조를 고민해야 한다고 봅니다. universal basic income을 넘어 universal high income이라는 표현으로 확장됩니다.",
        keywords: ["샘 울트먼", "universal high income", "American Equity Fund"],
      },
      {
        title: "로봇세",
        body: "빌 게이츠의 로봇세 논의는 사람이 하던 일을 로봇이 대체하면 세금 기반도 함께 바뀌어야 한다는 주장입니다. 자동화가 복지를 갉아먹지 않게 만드는 장치입니다.",
        keywords: ["빌 게이츠", "로봇세", "세금 기반"],
      },
      {
        title: "SaaS 붕괴 논쟁",
        body: "SaaS가 바로 사라진다는 뜻이 아니라, 사람이 앱을 직접 열고 입력하는 시간이 줄어들 수 있다는 뜻입니다. AI 에이전트가 여러 소프트웨어를 대신 조작하면 앱의 앞단을 AI가 가져갑니다.",
        keywords: ["SaaS 붕괴", "AI 에이전트", "소프트웨어 앞단"],
      },
      {
        title: "OpenAI의 에이전트 기반 핸드폰",
        body: "OpenAI와 Jony Ive, io의 AI 기기 흐름은 스마트폰 이후의 입력 장치를 다시 설계하려는 시도입니다. 공식적으로는 AI device지만, 발표에서는 에이전트 기반 핸드폰 또는 화면 이후의 컴퓨터라는 질문으로 설명합니다.",
        keywords: ["OpenAI", "Jony Ive", "io", "에이전트 기반 핸드폰"],
      },
    ],
    speakerNote:
      "이 장은 공포를 주기보다 질문을 명확히 하는 장입니다. AI가 좋아진다는 말만으로는 부족하고, 돈의 흐름이 어떻게 바뀌는지를 보는 것이 핵심입니다.",
  },
  {
    id: "history",
    number: "2",
    title: "AI의 역사로 미래를 예측하는 기반",
    question: "왜 지금 갑자기 빨라졌을까?",
    summary:
      "로직 기반 AI에서 딥러닝, 트랜스포머, ChatGPT, AI agent까지의 흐름을 보면 정체기와 폭발기가 반복된 이유가 보입니다.",
    image: "image-14-1.jpg",
    points: [
      {
        title: "년도 흐름",
        body: "1950년대 로직 기반 AI, 1980년대 전문가 시스템, 1990년대 정체기, 2012년 딥러닝, 2017년 트랜스포머, 2022년 ChatGPT, 2024년 이후 AI agent 흐름으로 설명합니다.",
        keywords: ["로직 기반", "딥러닝", "트랜스포머", "ChatGPT", "AI agent"],
      },
      {
        title: "정체기가 온 이유",
        body: "아이디어가 없어서가 아니라 계산 자원, 데이터, 알고리즘, 시장이 동시에 부족했습니다. 어느 하나만 부족해도 AI는 실험실 밖으로 나오기 어렵습니다.",
        keywords: ["정체기", "계산 자원", "데이터", "알고리즘", "시장"],
      },
      {
        title: "성능이 올라가는 속도",
        body: "2010년 이후 대형 모델 학습 계산량은 빠르게 증가했고, AI가 처리할 수 있는 업무 길이도 늘었습니다. 연구 결과가 제품으로 반영되는 속도도 짧아졌습니다.",
        keywords: ["성능 상승", "학습 계산량", "긴 업무 처리"],
      },
      {
        title: "초기 ChatGPT와 현재 ChatGPT",
        body: "초기에는 사람이 프롬프트 엔지니어링으로 답변 품질을 끌어올렸습니다. 지금은 모델이 맥락을 이해하고 계획하고 도구를 쓰면서 사람이 생각해야 하는 부분을 빠르게 흡수하고 있습니다.",
        keywords: ["초기 ChatGPT", "현재 ChatGPT", "프롬프트 엔지니어링", "사람이 생각할 부분 감소"],
      },
      {
        title: "사람에서 로봇으로 전환",
        body: "현대의 AI 로보틱스와 Boston Dynamics 흐름은 공장과 물류에서 사람이 하던 일을 로봇으로 옮기는 방향입니다. 사람은 8시간 단위로 일하지만 로봇은 24시간 운용이 가능하고, 비용 차이는 앞으로 더 벌어질 수 있습니다.",
        keywords: ["현대", "로봇", "공장", "8시간", "24시간"],
      },
    ],
    speakerNote:
      "미래 예측을 감으로 하지 않기 위해 역사 파트를 둡니다. AI는 계속 좋아지기만 한 것이 아니라, 막히는 조건과 뚫리는 조건이 있었습니다.",
  },
  {
    id: "changed",
    number: "3",
    title: "이미 변화한 세계",
    question: "어떤 일의 가격이 먼저 내려갔나?",
    summary:
      "변호사, 의사, 판사, 3D 애니메이션 제작자, 재무 작업, 검색 마케팅은 이미 AI 때문에 단가와 속도가 다시 계산되고 있습니다.",
    image: "image-9-1.jpg",
    points: [
      {
        title: "전문직의 가치 재계산",
        body: "변호사의 계약서 검토, 의사의 문헌 정리와 기록 요약, 판사의 판례 검색처럼 전문직의 일부 업무는 이미 AI 보조로 시간이 줄었습니다.",
        keywords: ["변호사", "의사", "판사", "전문직"],
      },
      {
        title: "3D 애니메이션 제작자",
        body: "콘셉트, 스토리보드, 영상 생성, 리깅 보조가 자동화되면서 초기 제작비와 진입 장벽이 낮아지고 있습니다. 고급 제작자의 가치는 남지만 단순 제작 단가는 흔들립니다.",
        keywords: ["3D 애니메이션 제작자", "영상 생성", "제작 단가"],
      },
      {
        title: "재무 작업",
        body: "자료 대조, 모델링 초안, 보고서 작성, 이상치 확인은 AI가 빠르게 보조할 수 있습니다. 사람이 직접 엑셀과 문서를 오가던 시간이 줄어듭니다.",
        keywords: ["재무 작업", "보고서", "모델링"],
      },
      {
        title: "SEO에서 AEO로 변화",
        body: "검색 결과에서 클릭을 얻는 SEO 중심에서, AI 답변 안에 인용되고 선택되는 AEO 중심으로 바뀝니다. 웹사이트 방문 전에 AI가 먼저 답을 조합합니다.",
        keywords: ["SEO", "AEO", "AI 답변", "인용"],
      },
    ],
    speakerNote:
      "사라지는 직업 목록처럼 말하지 말고, 가격이 재계산되는 업무 단위로 설명합니다. 이 관점이 청중에게 더 실용적입니다.",
  },
  {
    id: "risk",
    number: "4",
    title: "AI의 무서움",
    question: "AI가 말이 아니라 행동을 하면 무엇이 위험해질까?",
    summary:
      "Claude Gov, 미국 국방부 협력, Mythos와 사이버 능력은 AI가 답변 도구를 넘어 실제 시스템에 영향을 주는 단계로 갔다는 신호입니다.",
    image: "image-23-1.jpg",
    points: [
      {
        title: "Claude와 미국 국방부",
        body: "Anthropic은 미국 국가안보 고객을 위한 Claude Gov 모델을 공개했고, 미 국방부와 책임 있는 AI 활용 협력을 발표했습니다. 국방에 쓰이는 순간 성능뿐 아니라 책임과 통제가 문제가 됩니다.",
        keywords: ["Claude", "미국 국방부", "Claude Gov", "국가안보"],
      },
      {
        title: "Claude Mythos의 해킹 능력",
        body: "Project Glasswing과 Mythos Preview는 AI의 사이버 공격·방어 능력을 평가하는 흐름을 보여줍니다. AI가 취약점을 찾고 공격 과정을 자동화하면 방어자와 공격자의 속도가 동시에 빨라집니다.",
        keywords: ["Claude Mythos", "해킹 능력", "Project Glasswing", "사이버 보안"],
      },
      {
        title: "위험의 기준 변화",
        body: "이전 위험은 잘못된 답변이었습니다. 다음 위험은 AI가 파일, 코드, API, 권한을 가지고 실제 행동을 하는 것입니다.",
        keywords: ["도구 사용", "권한", "현실 피해"],
      },
    ],
    speakerNote:
      "AI가 무섭다는 말을 추상적으로 하지 않습니다. 답변, 도구, 권한이라는 세 단계로 위험을 설명하면 이해가 빠릅니다.",
  },
  {
    id: "positive",
    number: "5",
    title: "예상 가능한 미래: 긍정편",
    question: "초생산 사회가 오면 모두가 더 잘살 수 있을까?",
    summary:
      "AI와 로봇이 생산성을 크게 올리면 universal high income이 가능해질 수 있습니다. 단, 생산성 상승이 자동으로 분배로 이어지지는 않습니다.",
    image: "image-10-1.jpg",
    points: [
      {
        title: "초생산 사회",
        body: "AI와 로봇이 반복 업무와 지식 업무의 단가를 낮추면 사회 전체의 생산량이 늘어납니다. 이때 사람은 덜 일하고도 더 많은 서비스를 누릴 수 있다는 긍정 시나리오가 나옵니다.",
        keywords: ["초생산 사회", "생산성", "로봇"],
      },
      {
        title: "universal high income",
        body: "핵심은 기본 생계비만 주는 것이 아니라, AI가 만든 부를 사회 전체가 더 높은 수준으로 공유하는 것입니다. 샘 울트먼의 논의와 연결됩니다.",
        keywords: ["universal high income", "샘 울트먼", "부의 공유"],
      },
      {
        title: "필요한 조건",
        body: "AI 자본 수익을 나눌 제도, 로봇세, 데이터 저작권료, 공공펀드 같은 장치가 있어야 긍정 시나리오가 현실이 됩니다.",
        keywords: ["로봇세", "공공펀드", "데이터 저작권료"],
      },
    ],
    speakerNote:
      "좋은 미래도 그냥 오지 않는다는 점을 강조합니다. 생산성 상승과 분배 장치는 별개입니다.",
  },
  {
    id: "negative",
    number: "6",
    title: "예상 가능한 미래: 부정편",
    question: "같은 기술이 왜 위험한 미래를 만들 수 있을까?",
    summary:
      "AI 지배, 전기와 자원 병목, 모델 붕괴, 토큰 비용 상승은 AI가 좋아질수록 같이 커질 수 있는 위험입니다.",
    image: "image-12-1.jpg",
    points: [
      {
        title: "AI에게 지배",
        body: "제프리 힌튼은 AI에게 모성애 같은 보호 본능을 심는 것이 인간이 살아남는 방법일 수 있다고 말했습니다. 표현은 과격하지만 핵심은 초지능의 목표가 인간과 어긋날 수 있다는 점입니다.",
        keywords: ["AI에게 지배", "제프리 힌튼", "모성애"],
      },
      {
        title: "전기와 자원 병목",
        body: "AI가 커질수록 데이터센터 전력, 반도체, 냉각, 물, 부지 문제가 커집니다. 전기와 자원 때문에 AI 발전에 정체기가 올 수 있습니다.",
        keywords: ["전기", "자원", "데이터센터", "정체기"],
      },
      {
        title: "AI 데이터로 인한 모델 붕괴",
        body: "AI가 만든 콘텐츠만 다시 학습하면 새로운 지식이 줄고 품질이 떨어지는 모델 붕괴 문제가 생길 수 있습니다. 사람이 만든 원천 데이터의 가치가 커지는 이유입니다.",
        keywords: ["모델 붕괴", "AI 생성 데이터", "새로운 지식"],
      },
      {
        title: "토큰 비용 상승",
        body: "고성능 AI를 쓰는 토큰 비용과 계산 비용이 오르면 일반인은 충분히 쓰기 어렵고, AI 접근권 자체가 권력이 될 수 있습니다.",
        keywords: ["토큰 비용", "AI 비용", "AI 권력"],
      },
    ],
    speakerNote:
      "부정편은 겁주기보다 리스크 목록을 명확히 보여주는 장입니다. 각각 대응 방식이 다르므로 한 덩어리로 말하면 안 됩니다.",
  },
  {
    id: "musk",
    number: "7",
    title: "일론 머스크가 그리고 있는 그림",
    question: "왜 AI, 로봇, 전기, 우주, 뇌를 같이 보는가?",
    summary:
      "xAI, Tesla, Optimus, Starlink, SpaceX, Neuralink는 따로 보면 사업이고, 같이 보면 AI 시대의 입력·계산·실행 인프라입니다.",
    image: "image-17-1.jpg",
    points: [
      {
        title: "일론이 말하는 대로 되고 있다",
        body: "머스크의 예측이 모두 맞는다고 볼 수는 없지만, 전기차, 로켓, 위성 인터넷, AI, 로봇, 뇌 인터페이스를 한 방향으로 묶어온 것은 분명합니다.",
        keywords: ["일론 머스크", "xAI", "Tesla", "Optimus", "Starlink", "SpaceX"],
      },
      {
        title: "전기세 문제와 우주 데이터센터",
        body: "AI 경쟁은 모델 경쟁을 넘어 전기와 냉각 경쟁이 됩니다. 우주 데이터센터는 확정된 결론이 아니라, 전력·냉각·공간 문제를 다르게 풀 수 있다는 가설로 다룹니다.",
        keywords: ["전기세", "우주 데이터센터", "AI 인프라"],
      },
      {
        title: "뉴럴링크",
        body: "키보드가 사라지는 시대를 생각하면 음성 입력은 주변 사람에게 들리는 한계가 있습니다. 생각만으로 AI를 활용하는 흐름은 뉴럴링크가 오래전부터 개발해온 방향입니다.",
        keywords: ["뉴럴링크", "키보드 이후", "음성의 한계", "생각으로 AI 사용"],
      },
    ],
    speakerNote:
      "머스크 파트는 인물 찬양이 아니라 조각을 연결해 보는 장입니다. 각각이 AI 시대의 병목을 겨냥하고 있다는 점을 보여줍니다.",
  },
  {
    id: "future-power",
    number: "8",
    title: "예측할 수 있는 미래 케이스",
    question: "국가보다 기업과 데이터가 강해질 수 있을까?",
    summary:
      "AI 에이전트가 업무의 입구가 되면 패권자 한 기업이 독점할 수 있고, 원천 데이터를 가진 쪽은 저작권료 협상력이 생길 수 있습니다.",
    image: "image-8-1.jpg",
    points: [
      {
        title: "국가 기반에서 기업 기반으로",
        body: "국가는 규제와 세금을 설계하지만, 실제 AI 모델, 에이전트, 계산 자원, 사용자 접점을 가진 기업의 영향력이 커질 수 있습니다.",
        keywords: ["국가", "기업", "AI 모델", "계산 자원"],
      },
      {
        title: "AI 에이전트 독점",
        body: "한 AI 에이전트가 검색, 구매, 업무, 문서, 코딩, 예약을 모두 대신하면 사용자는 그 에이전트를 벗어나기 어려워집니다. 패권자 한 기업의 독점 가능성이 생깁니다.",
        keywords: ["AI 에이전트", "패권자", "독점"],
      },
      {
        title: "원천 데이터와 저작권료",
        body: "EU 규제는 범용 AI의 투명성과 저작권 의무를 강화하고 있습니다. TIME 같은 매체와 AI 기업의 콘텐츠 계약은 데이터가 막는 자산이 아니라 협상 가능한 자산이 될 수 있음을 보여줍니다.",
        keywords: ["원천 데이터", "저작권료", "EU 규제", "TIME"],
      },
    ],
    speakerNote:
      "미래 권력 파트는 추상적인 정치 이야기가 아니라 사용자 접점, 모델, 데이터, 규제의 힘을 나누어 설명합니다.",
  },
  {
    id: "action",
    number: "9",
    title: "우리는 뭘 해야 하는가",
    question: "과도기에도 살아남으려면 무엇을 해야 하나?",
    summary:
      "미래는 정확히 예측할 수 없습니다. 확실한 것은 과도기가 있고, 그 과도기에는 AI를 잘 활용하고 변화 흐름을 계속 추적해야 한다는 점입니다.",
    image: "image-21-1.jpg",
    points: [
      {
        title: "도태되지 않기 위해 지금 써야 한다",
        body: "AI를 공부만 하는 것이 아니라 실제 업무에 넣어야 합니다. 문제 정의, 자료 조사, 초안 작성, 검증, 자동화까지 매일 써봐야 감각이 생깁니다.",
        keywords: ["도태", "AI 활용", "업무 적용"],
      },
      {
        title: "흐름을 계속 추적해야 한다",
        body: "모델 성능, 로봇, 전기 비용, 토큰 비용, EU 규제, 저작권료 계약, AI 기기 흐름을 계속 봐야 합니다. 한 번 배운 지식은 금방 낡습니다.",
        keywords: ["변화 추적", "규제", "토큰 비용", "로봇"],
      },
      {
        title: "정확한 예측보다 과도기 생존",
        body: "미래를 정확히 맞히는 사람은 거의 없습니다. 중요한 것은 변화가 한 번에 끝나지 않는 과도기 동안 버티고, 배우고, 역할을 바꾸는 것입니다.",
        keywords: ["미래 예측", "과도기", "살아남는 방법"],
      },
    ],
    speakerNote:
      "마지막은 결론을 단순하게 가져갑니다. 공포도 낙관도 아니라, 지금 할 수 있는 행동으로 닫습니다.",
  },
];
