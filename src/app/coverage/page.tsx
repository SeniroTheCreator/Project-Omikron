// page.tsx - src/app/coverage - Geographic coverage.
import Section from "@/components/Section";
import { regions } from "@/data/regions";

export default function CoveragePage() {
  return (
    <Section title="Coverage">
      <ul className="list-disc pl-6 mb-8">
        {regions.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <svg
          viewBox="0 0 200 100"
          className="w-full max-w-md h-auto"
          aria-label="Map placeholder"
        >
          <rect width="200" height="100" fill="#e5e7eb" />
          <circle cx="90" cy="50" r="5" fill="#2563eb" />
          <circle cx="80" cy="40" r="5" fill="#2563eb" />
          <circle cx="70" cy="30" r="5" fill="#2563eb" />
          <circle cx="60" cy="30" r="5" fill="#2563eb" />
          <circle cx="110" cy="60" r="5" fill="#2563eb" />
        </svg>
      </div>
    </Section>
  );
}
