"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";
import { type Language } from "@/i18n/config";

const languageCodes: Language[] = ["es", "en", "de"];

export function LanguageDropdown() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  const selectLanguage = (code: Language) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* BOTÓN */}
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-1 border-none md:px-3 text-sm text-slate-700 hover:text-emerald-600"
      >
        {t(`common.languages.${lang}`)}
        <span className="text-[10px]">▼</span>
      </button>

      {/* MENU */}
      {open && (
        <div className="absolute right-0 mt-1 w-32 rounded-xl border border-slate-200 bg-white shadow-lg z-20">
          <ul className="py-1 text-xs">
            {languageCodes.map((code) => (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => selectLanguage(code)}
                  className="block w-full px-3 py-1.5 text-left hover:bg-slate-100"
                >
                  {t(`common.languages.${code}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
