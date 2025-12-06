import Link from 'next/link';
import AuthButtons from '../AuthButtons';
export default function Header() {
  return (
    <header className="bg-black/95 border-b border-slate-800 sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center gap-7 px-2 min-h-[58px] flex-wrap">
        <Link href="/" className="flex items-center gap-2 text-white font-black text-2xl tracking-tight">
          <span className="inline-block bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-indigo-400 bg-clip-text text-transparent drop-shadow">ボイトレ動画アカデミー</span>
        </Link>
        <div className="ml-auto flex gap-5 md:gap-7 items-center flex-wrap">
          <Link href="/videos" className="text-slate-100 hover:text-blue-400 transition">動画一覧</Link>
          <Link href="/instructors" className="text-slate-100 hover:text-blue-400 transition">講師一覧</Link>
          <Link href="/favorites" className="flex items-center gap-1 text-yellow-300 hover:text-yellow-200 font-medium"><svg width="19" height="19" fill="currentColor" viewBox="0 0 22 22" className="inline -mt-0.5"><path d="M11 3.5l2.09 4.23 4.67.68-3.38 3.29.8 4.64L11 13.5l-4.18 2.2.8-4.64L4.24 8.41l4.67-.68L11 3.5z"/></svg>お気に入り</Link>
          <Link href="/register" className="text-blue-400 hover:text-indigo-200 font-semibold">会員登録</Link>
          <Link href="/login" className="text-blue-300 hover:text-indigo-200">ログイン</Link>
          <AuthButtons className="ml-2" />
          <Link href="/mypage" className="text-violet-300 hover:text-white font-semibold">マイページ</Link>
        </div>
      </nav>
    </header>
  );
}
