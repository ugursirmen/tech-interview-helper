"use client";

import { useState } from "react";

interface Section {
  id: string;
  title: string;
}

export default function Sidebar({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-3 left-3 z-50 md:hidden bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium shadow"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕ Close" : "☰ Menu"}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-100 z-40 overflow-y-auto
          transform transition-transform duration-200 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-screen md:block
        `}
      >
        <div className="p-5 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Tech Interview Helper
          </p>
          <nav className="space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
