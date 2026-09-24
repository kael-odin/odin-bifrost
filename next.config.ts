// next.config.ts
import type { NextConfig } from "next";

// GitHub Pages 项目页部署在 /odin-bifrost/ 子路径下；Vercel/本地为根路径。
// 同步注入 NEXT_PUBLIC_BASE_PATH：next/image、原生 <img>、window.location
// 跳转与 CSS url() 都不会自动附加 basePath，消费端用 withBasePath() 处理。
const basePath = process.env.GITHUB_ACTIONS ? "/odin-bifrost" : undefined;

const nextConfig: NextConfig = {
  // 纯静态导出：构建产物在 out/，可直接部署到 GitHub Pages
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
  // GitHub Pages 没有图片优化服务，必须关掉 next/image 的按需优化
  images: { unoptimized: true },
  // 生成 about/index.html 这种目录结构，刷新子页面不会 404
  trailingSlash: true,
  // 固定工作区根目录，避免上级目录的散落 lockfile 干扰推断
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
