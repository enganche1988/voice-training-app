import { useFavoriteVideos } from '../components/useFavoriteVideos';
import { videos, instructors, categories } from '../mock/domainMockData';
import VideoCard from '../components/videos/VideoCard';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites } = useFavoriteVideos();
  const favVideos = videos.filter(v => favorites.includes(v.id));
  return (
    <main className="bg-[#050509] min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-5 pt-16">
        <h1 className="text-3xl md:text-4xl font-black mb-9 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-blue-100 bg-clip-text text-transparent drop-shadow">お気に入り動画</h1>
        {favVideos.length === 0 && (
          <div className="text-lg text-slate-400 py-28 text-center">
            まだお気に入り動画はありません。<br />
            <Link href="/videos" className="text-blue-500 underline">動画一覧に戻る</Link>
          </div>
        )}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favVideos.map(video => {
            const instructor = instructors.find(i => i.id === video.instructorId);
            const category = categories.find(c => c.id === video.categoryId);
            return (
              <VideoCard
                key={video.id}
                video={video}
                instructor={instructor}
                category={category}
                href={`/videos/${video.id}`}
                showInstructorName
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

