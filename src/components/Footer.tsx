// components/Footer.tsx
"use client";

import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-[#f5f5f5]">
            <div className="border-t-4 border-emerald-600" />

            <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6 grid-cols-2 md:grid-cols-3 text-xs text-slate-700">
                {/* Columna izquierda */}
                <div>
                    <p className="font-bold mb-1">{t("common.brand")}</p>
                    <p>{t("common.footer.agencyDescription")}</p>
                </div>

                {/* Menú central */}
                <div className="hidden md:block text-center md:text-right">
                    <p className="font-bold mb-1">{t("common.footer.menuTitle")}</p>
                    <ul className="space-y-1 list-inside">
                        <li>
                            <Link href="/" className="hover:text-emerald-600">
                                {t("common.nav.home")}
                            </Link>
                        </li>
                        <li>
                            <Link href="/tours" className="hover:text-emerald-600">
                                {t("common.nav.tours")}
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-emerald-600">
                                {t("common.nav.about")}
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-emerald-600">
                                {t("common.nav.contact")}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contacto derecha */}
                <div className="md:text-right space-y-1">
                    <p className="font-bold mb-1">{t("common.footer.contactTitle")}</p>
                    <p>📍 {t("common.footer.city")}</p>
                    <p>📱 {t("common.footer.phone")}</p>
                    <p>✉️ {t("common.footer.email")}</p>
                </div>
            </div>

            <div className="border-t border-slate-300" />
            <div className="max-w-6xl mx-auto px-6 py-3 text-[11px] text-center text-slate-500">
                {t("common.footer.copyright")}
            </div>
        </footer>
    );
}
