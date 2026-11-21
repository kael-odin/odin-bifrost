export type CareerProject = {
  name: string;
  image: string;
  link?: string;
};

export type CareerSkill = {
  name: string;
  icon: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  current: boolean;
  logo: string;
  overview: string;
  myRole: string;
  projects: CareerProject[];
  skills: CareerSkill[];
};

/**
 * 职业经历数据（按时间倒序）。
 */
export const careersData: CareerEntry[] = [
  {
    id: "lingjiang-qa",
    role: "测试工程师",
    company: "徐州灵匠信息科技有限公司",
    period: "2025.11 - 至今",
    badge: "进行中",
    current: true,
    logo: "/company/kael-lab.svg",
    overview:
      "负责 Thordata（企业级代理与数据采集服务，对标 Bright Data）、CoreClaw（网页数据采集平台，对标 Apify）、XSpark（静态 ISP 代理）三条产品线的质量体系：需求评审 → 用例设计 → 执行 → 缺陷跟踪 → 回归验证，累计推动修复缺陷 300+，并把重复检查做成每日自动巡检。",
    myRole:
      "建立 108 个接口端点实测底表与 83 条接口坑位；自建巡检 21 项自动 + 16 项浏览器检查，工作日一期、钉钉日报直达责任人；问题台账 88 条，修复 / 关闭 52 条。负责资金链路对账（CRM ↔ 后台 480 笔订单、¥3,267 双边一致）与安全测试（自建八模块 DAST，拦下证件照公网可下载、回调无签名等越权链）；完成公共开放 API 14 个接口的正式全量验收。同时推动企业 AI 落地（llama.cpp 私有化部署 + FastGPT 知识库 + 模型选型评测），支撑 50+ 同事。",
    projects: [
      {
        name: "Thordata · 代理与数据采集",
        image: "/projects/cover-amazon-guide.svg",
        link: "https://www.thordata.com/",
      },
      {
        name: "CoreClaw · 网页数据采集平台",
        image: "/projects/cover-plugin-zh.svg",
      },
      {
        name: "XSpark · 静态 ISP 代理",
        image: "/projects/cover-proxy-list.svg",
      },
    ],
    skills: [
      { name: "Playwright", icon: "/tech/python-original.svg" },
      { name: "Postman", icon: "/tech/typescript.svg" },
      { name: "Python", icon: "/tech/python-original.svg" },
      { name: "SQL", icon: "/tech/markdown-original.svg" },
      { name: "llama.cpp", icon: "/tech/ollama.svg" },
      { name: "FastGPT", icon: "/tech/openai.svg" },
      { name: "Linux", icon: "/tech/linux.svg" },
      { name: "Charles", icon: "/tech/git-original.svg" },
    ],
  },
  {
    id: "kael-lab",
    role: "独立开发者",
    company: "Kael Odin Lab · 个人开源工作室",
    period: "2025 年 - 至今（业余）",
    badge: "持续输出",
    current: false,
    logo: "/company/kael-lab.svg",
    overview:
      "利用业余时间持续构建和维护开源项目：从 OS 风格互动主页模板、2200+ 提示词中文镜像站，到学术论文科研 Skill 每日排行榜。项目全部托管在 GitHub，站点部署在 GitHub Pages / Vercel。",
    myRole:
      "从需求、设计、开发到部署全流程独立完成。擅长把「一个想法」快速变成「一个能用的网站」：自动化流水线（GitHub Actions）定时抓取与构建、静态站点零成本部署、README 与文档打磨，让每个项目开箱即用。",
    projects: [
      {
        name: "My OS Homepage",
        image: "/projects/cover-my-os.svg",
        link: "https://kael-odin.github.io/odin-heim/",
      },
      {
        name: "Prompts Chat 中文站",
        image: "/projects/cover-prompts-zh.svg",
        link: "https://kael-odin.github.io/prompts-chat-zh/",
      },
      {
        name: "Academic Skills 榜单 · 225★",
        image: "/projects/cover-research-skills.svg",
        link: "https://kael-odin.github.io/awesome-academic-research-skills/",
      },
      {
        name: "Thordata 采集反爬指南 · 163★",
        image: "/projects/cover-amazon-guide.svg",
        link: "https://github.com/Thordata/how-to-bypass-amazon-captcha-when-scraping",
      },
      {
        name: "2080 Ti 22G · 262K 长上下文",
        image: "/projects/cover-kvmem.svg",
        link: "https://github.com/kael-odin/2080ti-22G-kvmem-qwen3.8-27B-256K-36.6toks",
      },
    ],
    skills: [
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "Python", icon: "/tech/python-original.svg" },
      { name: "Next.js", icon: "/tech/nextjs2.svg" },
      { name: "Astro", icon: "/tech/astro-original.svg" },
      { name: "Tailwind", icon: "/tech/tailwindcss.svg" },
      { name: "GitHub Actions", icon: "/tech/github.svg" },
      { name: "Ollama", icon: "/tech/ollama.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
    ],
  },
  {
    id: "opensource",
    role: "开源贡献者",
    company: "GitHub · kael-odin",
    period: "2024 年 - 至今",
    badge: "持续输出",
    current: false,
    logo: "/company/kael-github.svg",
    overview:
      "在 GitHub 上持续输出：Agent Harness 与 MCP 生态调研、本地大模型部署实践（DeepSeek Harness 等）、代理池维护与提示词工程。同时以博客记录思考，沉淀可复用的模板与工具。",
    myRole:
      "以「先跑通、再讲清楚」的方式做开源：给项目补全中文文档与部署脚本，把踩坑过程写成教程博客；维护的 awesome-free-proxy-list 每日自动更新并校验可用性。",
    projects: [
      {
        name: "Kael's Blog",
        image: "/projects/cover-blog.svg",
        link: "https://odin-saga.vercel.app",
      },
      {
        name: "Free Proxy List",
        image: "/projects/cover-proxy-list.svg",
        link: "https://kael-odin.github.io/awesome-free-proxy-list/",
      },
      {
        name: "Neon GitHub Profile",
        image: "/projects/cover-profile.svg",
        link: "https://github.com/kael-odin/kael-odin",
      },
    ],
    skills: [
      { name: "Git", icon: "/tech/git-original.svg" },
      { name: "Linux", icon: "/tech/linux.svg" },
      { name: "Markdown", icon: "/tech/markdown-original.svg" },
      { name: "OpenAI", icon: "/tech/openai.svg" },
      { name: "Redis", icon: "/tech/redis.svg" },
      { name: "Nginx", icon: "/tech/nginx-original.svg" },
    ],
  },
];
