import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-slate-800 text-slate-500 text-xs py-6 mt-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 flex-col sm:flex-row gap-2">
        <div>© 2024 ボイトレ動画アカデミー prototype</div>
        <div className="flex gap-5">
          <Link href="/terms" className="hover:underline hover:text-blue-400">利用規約</Link>
          <Link href="/privacy" className="hover:underline hover:text-blue-400">プライバシー</Link>
        </div>
      </div>
    </footer>
  );
}
