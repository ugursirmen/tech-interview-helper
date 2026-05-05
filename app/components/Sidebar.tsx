"use client";

import { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
}

export default function Sidebar({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-3 left-3 z-50 md:hidden bg-teal-600 text-white px-3 py-1.5 rounded-md text-sm font-medium shadow"
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

      {/* Desktop collapse button (shown when sidebar is collapsed) */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-0 z-50 items-center justify-center w-6 h-16 bg-gray-800 hover:bg-teal-700 text-gray-400 hover:text-white rounded-r-md transition-colors shadow-md"
          title="Expand sidebar"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gray-900 text-gray-100 z-40
          flex flex-col
          transition-all duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-screen
          ${collapsed ? "md:w-0 md:overflow-hidden" : "w-64"}
        `}
      >
        {/* Top Content */}
        <div className="p-5 pt-6 flex-1 min-w-64">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
              Tech Interview Helper
            </p>
            {/* Desktop collapse button */}
            <button
              onClick={() => setCollapsed(true)}
              className="hidden md:flex items-center justify-center w-6 h-6 rounded text-gray-500 hover:text-white hover:bg-gray-700 transition-colors flex-shrink-0"
              title="Collapse sidebar"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>
          <nav className="space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm transition-colors leading-snug ${
                  activeId === s.id
                    ? "bg-teal-600 text-white"
                    : "text-gray-300 hover:bg-teal-600 hover:text-white"
                }`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="p-5 border-t border-gray-800 min-w-64">
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
              className="flex-shrink-0"
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
