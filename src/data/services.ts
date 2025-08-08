// services.ts - src/data - Service offerings data.
export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Freight",
    description: "Efficient transport across all major routes.",
  },
  {
    title: "Warehousing",
    description: "Secure storage solutions with real-time visibility.",
  },
  {
    title: "Last-mile",
    description: "Timely deliveries to your customer's doorsteps.",
  },
  {
    title: "Customs",
    description: "Expert handling of cross-border documentation.",
  },
];
