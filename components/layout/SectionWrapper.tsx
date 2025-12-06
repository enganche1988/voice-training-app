import { ReactNode } from 'react';
export default function SectionWrapper({children, className = ""}:{children:ReactNode, className?:string}) {
  return (
    <section className={`w-full px-4 py-12 sm:py-20 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

