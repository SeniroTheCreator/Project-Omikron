// page.tsx - src/app/services - Services offered.
import Section from "@/components/Section";
import Card from "@/components/Card";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <Section title="Our Services">
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <Card key={s.title} title={s.title}>
            {s.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}
