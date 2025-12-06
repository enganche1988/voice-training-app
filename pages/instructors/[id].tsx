import { useRouter } from 'next/router';
import { instructors, videos, categories } from '../domainMockData';
import InstructorCard from '../../components/instructors/InstructorCard';
import VideoCard from '../../components/videos/VideoCard';
import Link from 'next/link';

export default function InstructorDetail() {
  const { id } = useRouter().query;
  const instructor = instructors.find(i => i.id === id);
  if (!instructor) return <div>講師が見つかりません</div>;
  const myVideos = videos.filter(v => v.instructorId === instructor.id);
  return (
    <main className="max-w-4xl mx-auto p-4">
      <Link href="/instructors" className="text-slate-500 hover:underline text-sm">← 講師一覧</Link>
      <div className="max-w-md mx-auto mb-5">
        <InstructorCard instructor={instructor} />
      </div>
      <div className="font-semibold mt-8 mb-3 text-lg">担当動画</div>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
        {myVideos.length ? myVideos.map(v => <VideoCard key={v.id} video={v} category={categories.find(c => c.id === v.categoryId)} href={`/videos/${v.id}`}/>)
          : <div className="col-span-full text-slate-400">担当動画がありません</div>}
      </div>
    </main>
  );
}
