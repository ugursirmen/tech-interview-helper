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
          fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-100 z-40
          transform transition-transform duration-200 ease-in-out
          flex flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-screen md:block
        `}
      >
        {/* Top Content */}
        <div className="p-5 pt-6 flex-1 overflow-y-auto">
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

        <div className="p-5 border-t border-gray-800">
          <a
            href="https://github.com/ugursirmen/tech-interview-helper"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <svg
              height="20"
              width="20"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
      </aside>
    </>
  );
}