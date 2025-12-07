// web/pages/videos/index.tsx

import { useState } from 'react';
import { videos, instructors, categories } from '../../mock/domainMockData';
import VideoCard from '../../components/videos/VideoCard';

export default function VideosPage() {
  const [cat, setCat] = useState('');
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const filtered = videos.filter(v => (!cat || v.categoryId === cat) && (!showFreeOnly || v.isFree));

  return (
    <main className="bg-[#050509] min-h-screen pb-24">
      <div className="max-w-6xl mx-auto px-5 pt-16">
        <h1 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-blue-100 bg-clip-text text-transparent drop-shadow">動画一覧</h1>
        <form className="flex flex-wrap gap-4 mb-10 items-center text-white">
          <label className="text-base flex gap-2 items-center">
            カテゴリ:
            <select className="border border-indigo-700 bg-black/70 rounded px-2 py-1 min-w-[110px] focus:ring-2 ring-blue-400 text-white" value={cat} onChange={e => setCat(e.target.value)}>
              <option value="">全て</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>
          <label className="text-base flex gap-2 items-center">
            <input type="checkbox" className="accent-blue-600" checked={showFreeOnly} onChange={e => setShowFreeOnly(e.target.checked)} />
            無料動画のみ
          </label>
        </form>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 && <div className="text-slate-400 col-span-full">条件に合う動画がありません</div>}
          {filtered.map(video => {
            const instructor = instructors.find(i => i.id === video.instructorId);
            const category = categories.find(c => c.id === video.categoryId);
            return <VideoCard key={video.id} video={video} instructor={instructor} category={category} href={`/videos/${video.id}`} showInstructorName/>;
          })}
        </section>
      </div>
    </main>
  );
}
