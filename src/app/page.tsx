// app/page.tsx
//
// 静态站点没有服务端重定向，所以这里用一个 meta refresh + 兜底链接
// 把根路径送到 /home，无 JS 也不会白屏。

import { withBasePath } from "@/lib/base-path";

const homeUrl = withBasePath("/home/");

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${homeUrl}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(homeUrl)});`,
        }}
      />
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          正在前往首页… 如果没有自动跳转，
          <a className="underline" href={homeUrl}>
            点这里
          </a>
          。
        </p>
      </main>
    </>
  );
}
