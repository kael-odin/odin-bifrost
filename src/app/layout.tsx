// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import HomeNav from "@/components/HomeNav";
import ThemeProvider from "./theme-provider";
import PageTransition from "./page-transition";
import DelayedFooter from "@/delayed-footer";
import { Inter, Young_Serif } from "next/font/google";
import { siteConfig } from "./site-config";
import { withBasePath } from "@/lib/base-path";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

// 站点地址随部署平台变化：Pages 子路径 / Vercel 生产域名 / 本地
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.GITHUB_ACTIONS
    ? "https://kael-odin.github.io/odin-bifrost"
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");

// metadataBase 必须是不含子路径的 origin：Next 会给 opengraph-image 等
// metadata 文件 URL 附加 basePath，metadataBase 再拼子路径会双重前缀。
const siteOrigin = new URL(siteUrl).origin;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  // 权威地址固定指向 GitHub Pages 版本，避免 Pages/Vercel 双部署被重复收录
  alternates: { canonical: "https://kael-odin.github.io/odin-bifrost/" },
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["汤勇", "Kael Odin", "个人作品集", "开发者", "全栈", "AI 工具", "徐州"],
  authors: [{ name: "汤勇 Kael Odin", url: "https://github.com/kael-odin" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "汤勇 Kael Odin 的个人作品集",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        style={{ "--site-cursor": `url(${withBasePath("/cursor.svg")}) 2 2, auto` } as React.CSSProperties}
        className={`${inter.variable} ${youngSerif.variable} antialiased px-6 hide-scrollbar`}
      >
        <ThemeProvider>
          <HomeNav />
          <PageTransition>{children}</PageTransition>
          <DelayedFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
