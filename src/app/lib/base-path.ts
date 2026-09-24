// 子路径部署（GitHub Pages /odin-bifrost/）下的资源与跳转路径拼接。
// basePath 只对 next/link 与框架自产 <link> 自动生效，其余引用必须走这里。
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!BASE) return path;
  // 外链、协议地址与已带前缀的路径原样返回
  if (/^(https?:)?\/\//.test(path) || path.startsWith(BASE + "/") || path === BASE) {
    return path;
  }
  return BASE + path;
}
