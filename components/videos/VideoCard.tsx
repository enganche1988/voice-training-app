import Link from 'next/link';
import clsx from 'clsx';
import type { Video, Instructor, Category } from '../../mock/domainMockData';
import { useFavoriteVideos } from '../useFavoriteVideos';

type Props = {
  video: Video;
  instructor?: Instructor;
  category?: Category;
  href?: string;
  showInstructorName?: boolean;
  children?: React.ReactNode;
};

export default function VideoCard({ video, instructor, category, href, showInstructorName = false, children }: Props) {
  const min = Math.round(video.durationSec/60);
  const isFree = video.isFree;
  const { isFavorite, toggle } = useFavoriteVideos();
  const Card = (
    <div
      className={clsx(
        'group rounded-2xl bg-gradient-to-br from-[#17132e]/80 to-[#18142a]/80 border border-indigo-900/70 shadow-xl overflow-hidden transition-all duration-200 flex flex-col hover:scale-[1.035] hover:shadow-indigo-800/50',
        'focus-within:ring-2 ring-[#7C3AED] outline-none',
        'relative'
      )}
      tabIndex={0}
      aria-label={video.title}
    >
      <button
        type="button"
        onClick={e => {e.stopPropagation();e.preventDefault();toggle(video.id);}}
        aria-label={isFavorite(video.id)?'お気に入り解除':'お気に入りに追加'}
        className={clsx(
          'absolute top-2 right-2 md:top-3 md:right-3 z-10 rounded-full p-1.5 backdrop-blur focus:outline-none',
          isFavorite(video.id)
            ? 'bg-violet-700/70 text-yellow-300 shadow-lg shadow-violet-900'
            : 'bg-slate-800/60 text-slate-400 hover:text-yellow-200 hover:bg-slate-700/70'
        )}
      >
        <svg width="28" height="28" viewBox="0 0 22 22" fill={isFavorite(video.id)?'#FDE68A':'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 3.5l2.09 4.23 4.67.68-3.38 3.29.8 4.64L11 13.5l-4.18 2.2.8-4.64L4.24 8.41l4.67-.68L11 3.5z" />
        </svg>
      </button>
      <div className="relative w-full aspect-video">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className={clsx('absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-100 transition')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"/>
        <div className="absolute top-3 left-3">
          <span className={clsx('inline-block px-2 py-0.5 rounded-full text-xs font-bold backdrop-blur border',
            isFree ? 'bg-emerald-800/80 text-emerald-200 border-emerald-600':'bg-[#3B0764]/90 text-purple-200 border-violet-700' )}>
            {isFree ? '無料' : '有料'}
          </span>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <h2 className="font-bold text-white mb-1 text-lg truncate w-full" title={video.title}>{video.title}</h2>
        <div className="flex flex-wrap gap-2 mb-2 text-xs">
          {category && <span className="bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded-full">{category.name}</span>}
          {showInstructorName && instructor && <span className="bg-blue-900/50 text-blue-200 px-2 py-0.5 rounded-full">{instructor.name}</span>}
          <span className="bg-slate-900/50 text-slate-300 px-2 py-0.5 rounded-full">{min}分</span>
        </div>
        <p className="text-slate-300 text-sm line-clamp-2 mb-3 min-h-[2.5em]">{video.description}</p>
        {children}
      </div>
    </div>
  );
  if (href) return (
    <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 ring-[#9f7aea]">{Card}</Link>
  );
  return Card;
}
