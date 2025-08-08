// Navbar.tsx - src/components - Responsive site navigation.
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg">
          Omikron Logistics
        </Link>
        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div
          className={`${open ? "block" : "hidden"} absolute md:static top-16 left-0 w-full md:w-auto bg-white md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-0">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/coverage">Coverage</Link>
            </li>
            <li>
              <Link href="/tracking">Tracking</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li className="md:ml-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
