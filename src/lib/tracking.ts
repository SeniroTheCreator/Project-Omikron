// tracking.ts - src/lib - Shipment lookup helpers.
import { shipments, type Shipment } from "@/data/shipments";

export function getShipmentById(id: string): Shipment | undefined {
  return shipments.find((s) => s.id.toUpperCase() === id.toUpperCase());
}
