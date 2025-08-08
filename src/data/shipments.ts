// shipments.ts - src/data - Mock shipment tracking data.
export interface Checkpoint {
  location: string;
  time: string; // ISO timestamp
  status: string;
}

export interface Shipment {
  id: string;
  status: string;
  checkpoints: Checkpoint[];
}

export const shipments: Shipment[] = [
  {
    id: "ABC123",
    status: "Delivered",
    checkpoints: [
      { location: "Athens", time: "2024-03-01T09:00:00Z", status: "Picked up" },
      { location: "Bucharest", time: "2024-03-03T14:00:00Z", status: "In transit" },
      { location: "Sofia", time: "2024-03-05T10:00:00Z", status: "Delivered" },
    ],
  },
  {
    id: "XYZ789",
    status: "In Transit",
    checkpoints: [
      { location: "London", time: "2024-03-02T12:00:00Z", status: "Picked up" },
      { location: "Paris", time: "2024-03-04T08:00:00Z", status: "In transit" },
    ],
  },
  {
    id: "LMN456",
    status: "Awaiting Pickup",
    checkpoints: [
      { location: "Dubai", time: "2024-03-06T07:00:00Z", status: "Booked" },
    ],
  },
];
