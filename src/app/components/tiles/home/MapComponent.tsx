import { amapUrl, siteConfig } from "@/site-config";

/**
 * 静态地图卡片：不嵌第三方 iframe。
 * 原因：Google Maps embed 在大陆网络无法加载（白块），高德又没有可直接
 * iframe 的稳定 embed 页。改为本地渐变「地图感」背景 + 高德深链按钮，
 * 大陆/海外访客点击都能打开可用的地图。
 */
export default function MapComponent() {
    return (
        <div className="w-full h-full relative overflow-hidden" role="img" aria-label={`${siteConfig.location.full}（点击角标在高德地图打开）`}>
            {/* 底色 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#cfeee6] via-[#e0f2f1] to-[#d5e8f7] dark:from-[#0f2027] dark:via-[#0d1117] dark:to-[#12262e]" />
            {/* 简化路网：几条交错的「道路」线条，纯装饰 */}
            <svg className="absolute inset-0 h-full w-full opacity-60 dark:opacity-35" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden>
                <g stroke="#9ec9c2" strokeWidth="6" fill="none" strokeLinecap="round">
                    <path d="M-20 60 C 90 40, 180 110, 420 70" />
                    <path d="M-20 150 C 120 180, 240 90, 420 160" />
                </g>
                <g stroke="#b9d7f0" strokeWidth="4" fill="none" strokeLinecap="round">
                    <path d="M80 -20 C 90 80, 60 170, 110 260" />
                    <path d="M280 -20 C 260 90, 330 150, 300 260" />
                </g>
                <g stroke="#e8c9a0" strokeWidth="10" fill="none" strokeLinecap="round">
                    <path d="M-20 105 L 420 118" />
                </g>
            </svg>
            {/* 中心定位点 */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
                <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500 ring-4 ring-white/80 shadow-lg" />
                </span>
                <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-gray-700 shadow-sm dark:bg-[#1c2430]/85 dark:text-gray-200">
                    {siteConfig.location.full}
                </span>
            </div>
            {/* 深链按钮 */}
            <a
                href={amapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 z-20 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-gray-700 shadow-sm ring-1 ring-black/5 transition-colors hover:bg-white dark:bg-[#1c2430]/90 dark:text-gray-200"
            >
                在高德地图打开 ↗
            </a>
        </div>
    );
}
