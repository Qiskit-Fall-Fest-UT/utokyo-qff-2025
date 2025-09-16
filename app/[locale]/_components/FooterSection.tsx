"use client";

export default function FooterSection() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} UTokyo QFF Team
      </div>
    </footer>
  );
}
