// TextArea.tsx - src/components - Styled textarea input.
import type { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={`border rounded px-3 py-2 w-full ${props.className ?? ""}`}
    />
  );
}
