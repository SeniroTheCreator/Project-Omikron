// actions.ts - src/app/tracking - Server action for tracking lookup.
"use server";

import { getShipmentById } from "@/lib/tracking";
import type { Shipment } from "@/data/shipments";

export interface TrackState {
  shipment?: Shipment;
  error?: string;
}

export async function trackShipment(
  _prevState: TrackState,
  formData: FormData
): Promise<TrackState> {
  const id = formData.get("trackingId")?.toString().trim();
  if (!id) {
    return { error: "Tracking ID is required" };
  }
  const shipment = getShipmentById(id);
  if (!shipment) {
    return { error: "Shipment not found" };
  }
  return { shipment };
}
