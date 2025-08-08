// page.tsx - src/app/contact - Contact form.
"use client";

import { useActionState } from "react";
import Section from "@/components/Section";
import FormField from "@/components/FormField";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import { submitContact, type ContactState } from "./actions";

export default function ContactPage() {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContact,
    {}
  );
  return (
    <Section title="Contact Us">
      <form action={formAction} className="max-w-md space-y-4">
        <FormField label="Name" htmlFor="name">
          <Input id="name" name="name" required />
        </FormField>
        <FormField label="Email" htmlFor="email">
          <Input id="email" name="email" type="email" required />
        </FormField>
        <FormField label="Company" htmlFor="company">
          <Input id="company" name="company" required />
        </FormField>
        <FormField label="Message" htmlFor="message">
          <TextArea id="message" name="message" rows={4} required />
        </FormField>
        <Button type="submit">Send</Button>
        {state.error && <p className="text-red-600">{state.error}</p>}
        {state.success && (
          <p className="text-green-600">We will get back to you shortly.</p>
        )}
      </form>
    </Section>
  );
}
