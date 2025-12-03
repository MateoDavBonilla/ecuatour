"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function ContactInfoCard() {
    const { t } = useI18n();

    return (
        <section className="relative bg-[var(--primary)] text-white rounded-3xl shadow-md p-8 md:p-14 overflow-hidden">

            {/* MAPA ECUADOR */}
            <Image
                src="/images/ecuador-map.png"
                alt={t("contact.form.mapAlt")}
                width={700}
                height={700}
                className="pointer-events-none select-none opacity-20 absolute md:-top-10 left-1/2 -translate-x-1/2"
            />

            {/* CONTENIDO */}
            <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-3">
                    {t("contact.info.title")}
                </h1>

                <p className="text-lg md:text-xl text-center mb-12">
                    {t("contact.info.subtitle")}
                </p>

                <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">

                    {/* CARD INFO */}
                    <div className="bg-black/70 rounded-2xl px-8 py-7 shadow-lg space-y-5 max-w-md">
                        <div>
                            <p className="text-sm opacity-80">
                                {t("contact.info.locationLabel")}
                            </p>
                            <p className="text-lg font-semibold">
                                {t("contact.info.locationValue")}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm opacity-80">
                                {t("contact.info.phoneLabel")}
                            </p>
                            <p className="text-lg font-semibold">+593 987 654 321</p>
                        </div>

                        <div>
                            <p className="text-sm opacity-80">
                                {t("contact.info.emailLabel")}
                            </p>
                            <p className="text-lg font-semibold">agencia@outlook.com</p>
                        </div>
                    </div>

                    {/* IMAGEN */}
                    <div className="hidden md:block rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/tour-quito.jpg"
                            alt={t("contact.info.imageAlt")}
                            width={900}
                            height={600}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
