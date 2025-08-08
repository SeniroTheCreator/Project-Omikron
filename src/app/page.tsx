// page.tsx - src/app - Homepage with hero and value props.
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Section>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Omikron Logistics</h1>
          <p className="mb-6 text-lg">
            Moving goods across Europe with speed and transparency.
          </p>
          <Link href="/contact">
            <Button>Get Quote</Button>
          </Link>
        </div>
      </Section>
      <Section title="Why Omikron?">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card title="Reliability">
            We deliver on schedule, every time.
          </Card>
          <Card title="Coverage">
            Strong network across Greece, the Balkans and beyond.
          </Card>
          <Card title="Support">
            Dedicated team keeping you informed at each step.
          </Card>
        </div>
      </Section>
    </>
  );
}
