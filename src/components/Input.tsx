// Input.tsx - src/components - Styled text input.
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`border rounded px-3 py-2 w-full ${props.className ?? ""}`}
    />
  );
}
