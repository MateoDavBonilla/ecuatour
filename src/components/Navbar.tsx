// components/Navbar.tsx
"use client";

import Link from "next/link";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { useI18n } from "@/components/I18nProvider";

export function Navbar() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">
            EC
          </div>
          <span className="font-semibold tracking-tight">
            {t("common.brand")}
          </span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-emerald-600">
            {t("common.nav.home")}
          </Link>
          <Link href="/tours" className="hover:text-emerald-600">
            {t("common.nav.tours")}
          </Link>
          <Link href="/about" className="hover:text-emerald-600">
            {t("common.nav.about")}
          </Link>
          <Link href="/contact" className="hover:text-emerald-600">
            {t("common.nav.contact")}
          </Link>

          <div className="flex items-center gap-3 text-xs">
            <LanguageDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
}
