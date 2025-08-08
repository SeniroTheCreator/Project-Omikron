// Card.tsx - src/components - Basic content card.
import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      {title && <h3 className="mb-2 font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
