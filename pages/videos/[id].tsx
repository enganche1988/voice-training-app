import { useRouter } from 'next/router';
import { videos, instructors, categories } from '../../mock/domainMockData';
import InstructorCard from '../../components/instructors/InstructorCard';
import { useFavoriteVideos } from '../../components/useFavoriteVideos';
import Link from 'next/link';

export default function VideoDetail() {
  const { id } = useRouter().query;
  const video = videos.find(v => v.id === id);
  const { isFavorite, toggle } = useFavoriteVideos();
  if (!video) {
    return (
      <main className="bg-[#050509] min-h-screen flex items-center justify-center text-white">
        <div className="text-xl">動画が見つかりません</div>
      </main>
    );
  }
  const category = categories.find(c => c.id === video.categoryId);
  const instructor = instructors.find(i => i.id === video.instructorId);
  const isFree = video.isFree;
  const min = Math.round(video.durationSec/60);
  return (
    <main className="bg-[#050509] min-h-screen pb-16">
      {/* ヒーロータイトル部 */}
      <div className="w-full py-12 bg-gradient-to-br from-[#31137b]/90 via-[#0b164e] to-[#050509]/95 text-center mb-8 relative">
        <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#9f7aea] bg-clip-text text-transparent drop-shadow mb-3 inline-block pr-16 relative">
          {video.title}
          <button
            type="button"
            onClick={() => toggle(video.id)}
            aria-label={isFavorite(video.id)?'お気に入り解除':'お気に入りに追加'}
            className={"absolute top-1 right-0 md:top-1 md:right-[-52px] rounded-full p-1.5 backdrop-blur focus:outline-none " + (isFavorite(video.id) ? 'bg-violet-700/70 text-yellow-300 shadow-lg shadow-violet-900':'bg-slate-800/60 text-slate-400 hover:text-yellow-200 hover:bg-slate-700/70')}
            style={{marginLeft:8,minWidth:36}}
          >
            <svg width="28" height="28" viewBox="0 0 22 22" fill={isFavorite(video.id)?'#fde68a':'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3.5l2.09 4.23 4.67.68-3.38 3.29.8 4.64L11 13.5l-4.18 2.2.8-4.64L4.24 8.41l4.67-.68L11 3.5z" /></svg>
          </button>
        </h1>
        <div className="flex flex-wrap gap-3 items-center justify-center mb-3">
          {category && <span className="bg-indigo-900/70 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">{category.name}</span>}
          <span className="bg-slate-900/60 text-slate-300 px-3 py-1 rounded-full text-xs">{min}分</span>
          <span className={isFree?"bg-emerald-700/70 text-emerald-200":"bg-violet-800/80 text-violet-100" + ' px-2 py-0.5 rounded-full text-xs ml-1'}>{isFree?"無料":"有料"}</span>
        </div>
      </div>
      {/* プレイヤー&内容カード */}
      <div className="max-w-3xl mx-auto px-3">
        <div className="bg-gradient-to-tr from-[#181634] via-[#1a1946] to-[#0c101d] p-6 md:p-12 rounded-3xl shadow-2xl mb-8 flex flex-col gap-6">
          <div className="w-full aspect-video bg-black rounded-xl shadow overflow-hidden flex justify-center items-center mb-4 border border-indigo-900/50">
            <video
              controls
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              className="w-full h-full object-cover rounded-xl"
            >お使いのブラウザでは動画再生に対応していません</video>
          </div>
          <div className="text-lg text-white font-semibold mb-2">{video.title}</div>
          <p className="text-slate-200 text-base mb-2 min-h-[2em]">{video.description}</p>
          {instructor && (
            <div className="bg-black/40 p-4 rounded-2xl mt-7">
              <InstructorCard instructor={instructor} />
              <Link href={`/lesson-request?instructor=${instructor.id}&video=${video.id}`} className="mt-4 inline-block bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] hover:brightness-110 text-white px-7 py-3 rounded-xl font-bold shadow md:text-lg transition">この講師にレッスンを依頼する</Link>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-6">
            {category && (<span className="bg-indigo-800/80 text-indigo-300 px-3 py-1 rounded-full text-xs">{category.name}</span>)}
            <span className={isFree?"bg-emerald-700/70 text-emerald-200":"bg-violet-900/80 text-violet-200" + ' px-3 py-1 rounded-full text-xs'}>{isFree?"無料":"有料"}</span>
          </div>
        </div>
        <div className="text-center mt-7">
          <Link href="/videos" className="text-blue-400 hover:underline text-sm">← 一覧に戻る</Link>
        </div>
      </div>
    </main>
  );
}
