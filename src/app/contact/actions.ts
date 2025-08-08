// actions.ts - src/app/contact - Server action for contact form.
"use server";

import { isValidEmail } from "@/lib/utils";

export interface ContactState {
  error?: string;
  success?: boolean;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !company || !message) {
    return { error: "All fields are required" };
  }
  if (!isValidEmail(email)) {
    return { error: "Invalid email" };
  }
  console.log("Contact request", { name, email, company, message });
  return { success: true };
}
