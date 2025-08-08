// page.tsx - src/app/tracking - Shipment tracking form.
"use client";

import { useActionState } from "react";
import Section from "@/components/Section";
import FormField from "@/components/FormField";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { trackShipment, type TrackState } from "./actions";

export default function TrackingPage() {
  const [state, formAction] = useActionState<TrackState, FormData>(
    trackShipment,
    {}
  );
  return (
    <Section title="Track Shipment">
      <form action={formAction} className="max-w-md space-y-4">
        <FormField
          label="Tracking ID"
          htmlFor="trackingId"
          error={state.error}
        >
          <Input id="trackingId" name="trackingId" required />
        </FormField>
        <Button type="submit">Track</Button>
      </form>
      {state.shipment && (
        <div className="mt-8">
          <p className="font-semibold mb-2">
            Status: {state.shipment.status}
          </p>
          <ul className="border-l pl-4 space-y-2">
            {state.shipment.checkpoints.map((cp) => (
              <li key={cp.time}>
                <p className="text-sm">{cp.status}</p>
                <p className="text-xs text-gray-500">
                  {cp.location} – {new Date(cp.time).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!state.shipment && state.error && (
        <p className="mt-4 text-red-600">{state.error}</p>
      )}
    </Section>
  );
}
