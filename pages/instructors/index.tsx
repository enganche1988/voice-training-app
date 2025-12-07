import { instructors } from "../../mock/domainMockData";
import InstructorCard from '../../components/instructors/InstructorCard';

export default function InstructorList() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">講師一覧</h1>
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map(ins => (
          <InstructorCard key={ins.id} instructor={ins} href={`/instructors/${ins.id}`} />
        ))}
      </div>
    </main>
  );
}
