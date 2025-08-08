// Footer.tsx - src/components - Site footer with links.
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="font-bold">Omikron Logistics</p>
          <p className="text-sm text-gray-600">Reliable logistics solutions.</p>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-sm">
          <div className="flex gap-4">
            <Link href="/services">Services</Link>
            <Link href="/coverage">Coverage</Link>
            <Link href="/tracking">Tracking</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex gap-4 text-gray-500">
            <span>Facebook</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} Omikron Logistics</p>
        </div>
      </div>
    </footer>
  );
}
