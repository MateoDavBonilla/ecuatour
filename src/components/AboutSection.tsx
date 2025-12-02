"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function AboutSection() {
    const { t } = useI18n();

    return (
        <section className="rounded-3xl bg-[#25937f] px-10 md:px-16 py-8 text-white relative overflow-hidden">
            {/* Título arriba a la derecha */}
            <div className="mb-4 flex md:justify-end m-5">
                <h2 className="text-2xl text-[var(--text-dark)] md:text-4xl font-bold">
                    {t("about.pageTitle")}
                </h2>
            </div>

            {/* Fondo del mapa */}
            <div className="absolute inset-0 pointer-events-none md:h-150 md:mt-5">
                <Image
                    src="/images/ecuador-map.png"
                    alt="Mapa de Ecuador"
                    fill
                    className="object-contain opacity-25 md:translate-x-[-10%] md:translate-y-[-5%]"
                />
            </div>

            {/* Contenido principal */}
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center relative mb-10">
                {/* Imagen */}
                <div className="relative h-48 md:h-80 rounded-2xl overflow-hidden z-10 md:mt-10 order-1 md:order-2">
                    <Image
                        src="/images/team.jpg"
                        alt="Equipo de trabajo"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Tarjeta negra */}
                <div className="relative z-10 max-w-md order-2 md:order-1">
                    <h3 className="text-xl text-[var(--text-light)] font-bold mb-10">
                        {t("about.whyChooseUs")}
                    </h3>

                    <div className="rounded-2xl bg-black/70 px-5 py-4 shadow-lg text-sm leading-relaxed space-y-3">
                        <p>{t("about.p1")}</p>
                        <p>{t("about.p2")}</p>
                        <p>{t("about.p3")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
