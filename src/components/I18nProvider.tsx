"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { messages, type Language } from "@/i18n/config";

type I18nContextValue = {
  lang: Language;
  t: (path: string) => string;
  setLang: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getByPath(obj: any, path: string): string {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? path;
}

const STORAGE_KEY = "ecuatour-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "es" || stored === "en" || stored === "de") {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, newLang);
    }
  };

  const value: I18nContextValue = {
    lang,
    t: (path: string) => getByPath(messages[lang], path),
    setLang,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
