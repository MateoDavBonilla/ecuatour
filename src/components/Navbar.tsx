"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { useI18n } from "@/components/I18nProvider";
import { useEffect, useState } from "react";

export function Navbar() {
    const { t } = useI18n();
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // clase para links según ruta actual
    const navLinkClass = (href: string) => {
        const isActive = pathname === href;

        return [
            "transition-colors",
            "hover:text-[var(--primary)]",
            isActive ? "text-[var(--primary)] font-semibold" : "text-slate-700",
        ].join(" ");
    };

    // bloquear scroll de fondo cuando el menú está abierto
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-20 border-b bg-white/95">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">
                        EC
                    </div>
                    <span className="font-semibold tracking-tight">
                        {t("common.brand")}
                    </span>
                </Link>

                {/* Menú desktop */}
                <div className="hidden md:flex gap-6 text-sm items-center">
                    <Link href="/" className={navLinkClass("/")}>
                        {t("common.nav.home")}
                    </Link>
                    <Link href="/tours" className={navLinkClass("/tours")}>
                        {t("common.nav.tours")}
                    </Link>
                    <Link href="/about" className={navLinkClass("/about")}>
                        {t("common.nav.about")}
                    </Link>
                    <Link href="/contact" className={navLinkClass("/contact")}>
                        {t("common.nav.contact")}
                    </Link>

                    <div className="flex items-center gap-3 text-xs">
                        <LanguageDropdown />
                    </div>
                </div>

                {/* Botón hamburguesa — solo mobile */}
                <button
                    className="md:hidden text-slate-700"
                    onClick={() => setOpen(true)}
                    aria-label="Abrir menú"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Overlay + Drawer mobile */}
            {open && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Fondo oscuro */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setOpen(false)}
                    />

                    {/* Panel blanco del menú */}
                    <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col gap-6 text-sm">
                        {/* Header del drawer */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-semibold tracking-tight">
                                {t("common.brand")}
                            </span>
                            <button
                                className="text-slate-600"
                                onClick={() => setOpen(false)}
                                aria-label="Cerrar menú"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className={navLinkClass("/")}
                                onClick={() => setOpen(false)}
                            >
                                {t("common.nav.home")}
                            </Link>

                            <Link
                                href="/tours"
                                className={navLinkClass("/tours")}
                                onClick={() => setOpen(false)}
                            >
                                {t("common.nav.tours")}
                            </Link>

                            <Link
                                href="/about"
                                className={navLinkClass("/about")}
                                onClick={() => setOpen(false)}
                            >
                                {t("common.nav.about")}
                            </Link>

                            <Link
                                href="/contact"
                                className={navLinkClass("/contact")}
                                onClick={() => setOpen(false)}
                            >
                                {t("common.nav.contact")}
                            </Link>

                            {/* Idioma en mobile */}
                            <div className="mt-4">
                                <LanguageDropdown />
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
