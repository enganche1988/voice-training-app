// web/pages/index.tsx
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#050509] min-h-screen">
      {/* ヒーロー */}
      <SectionWrapper className="py-16 sm:py-32 bg-gradient-to-br from-[#3B0764] via-[#161037] to-[#050509] text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent animate-fadein">ボイトレ歌い方動画アカデミー</h1>
        <div className="text-lg sm:text-2xl font-medium mb-2 text-white/95">歌・音楽好きのためのサブスク動画サービス</div>
        <div className="mb-8 text-base text-slate-200">本格講師のレッスン動画が月額見放題。Let’s enjoy your music life!</div>
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <Link href="/register"><Button variant="primary" size="md" className="shadow-lg bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">無料会員登録</Button></Link>
          <Link href="/videos"><Button variant="outline" size="md">動画一覧を見る</Button></Link>
        </div>
      </SectionWrapper>
      {/* 料金 */}
      <SectionWrapper className="pt-12 pb-20 bg-gradient-to-br from-slate-900/90 via-indigo-950/80 to-[#1B1834]/90">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-tr from-indigo-900/80 to-blue-900/60 p-8 rounded-3xl shadow-2xl border border-indigo-800/60">
            <div className="text-lg tracking-wide mb-1 text-white/90">月額</div>
            <div className="text-4xl sm:text-5xl font-bold mb-2 text-[#9F7AEA] drop-shadow">¥980<span className="text-base text-indigo-200 ml-2">(税込)</span></div>
            <div className="text-white/80 mb-1">全ての動画が見放題！</div>
            <Link href="/subscribe"><Button variant="primary" className="mt-4 w-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">有料会員になる</Button></Link>
          </div>
        </div>
      </SectionWrapper>
      {/* サンプル動画 */}
      <SectionWrapper className="bg-black/95 pt-12 pb-20">
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-[#3B82F6]/70 to-[#7C3AED]/60 px-4 py-2 rounded-l-full rounded-r-full text-base text-white font-bold mb-2">Sample Movie</div>
          <div className="text-2xl text-white font-bold mb-6">まずはサンプル動画で体験！</div>
        </div>
        <div className="flex justify-center">
          <div className="aspect-video w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl border border-indigo-800/70">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/aKGVvR_SKxI" title="YouTube sample" allowFullScreen></iframe>
          </div>
        </div>
        <div className="mt-7 text-center text-white/80 text-lg">最新の課題曲、テクニックを毎月続々追加中！あなたも一緒にボイトレしよう。</div>
      </SectionWrapper>
    </main>
  );
}
