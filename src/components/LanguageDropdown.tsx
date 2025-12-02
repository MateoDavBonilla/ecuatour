"use client";

import { useState } from "react";

const languages = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "en", label: "Aleman" },
];

export function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  const toggle = () => setOpen((prev) => !prev);

  const selectLanguage = (lang: (typeof languages)[number]) => {
    setCurrent(lang);
    setOpen(false);
    // aquí luego podrías guardar idioma en contexto, cookie, etc.
  };

  return (
    <div className="relative inline-block text-left">
      {/* BOTÓN */}
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-1 border-none bg-white px-3 text-sm text-slate-700 hover:text-emerald-600"
      >
        {current.label}
        <span className="text-[10px]">▼</span>
      </button>

      {/* MENU */}
      {open && (
        <div className="absolute right-0 mt-1 w-32 rounded-xl border border-slate-200 bg-white shadow-lg z-20">
          <ul className="py-1 text-xs">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  onClick={() => selectLanguage(lang)}
                  className="block w-full px-3 py-1.5 text-left hover:bg-slate-100"
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
