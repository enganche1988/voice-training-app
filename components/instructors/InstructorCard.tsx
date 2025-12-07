import Link from 'next/link';
import type { Instructor } from '../../mock/domainMockData';

type Props = {
  instructor: Instructor;
  children?: React.ReactNode;
  href?: string;
};

export default function InstructorCard({ instructor, children, href }: Props) {
  const card = (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition p-5 flex flex-col items-center text-center h-full">
      <img src={instructor.avatarUrl} alt={instructor.name} className="w-20 h-20 object-cover rounded-full border border-slate-100 mb-2" />
      <div className="font-bold text-base mt-1 mb-1">{instructor.name}</div>
      <div className="text-xs text-slate-500 mb-2">{instructor.profileText}</div>
      {instructor.career && <div className="text-xs text-slate-400 mb-2">{instructor.career}</div>}
      {instructor.snsUrls && instructor.snsUrls.length > 0 && (<div className="flex gap-2 mb-1 justify-center">{instructor.snsUrls.map(url=>(<a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 text-xs underline">SNS</a>))}</div>)}
      {children}
    </div>
  );
  if (href) return <Link href={href} className="block h-full">{card}</Link>;
  return card;
}

