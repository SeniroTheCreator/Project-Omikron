// Section.tsx - src/components - Layout section wrapper.
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 px-4 max-w-5xl mx-auto">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      {children}
    </section>
  );
}
