"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function ContactFormCard() {
    const { t } = useI18n();

    return (
        <section className="relative bg-[var(--primary)] text-white rounded-3xl shadow-md p-8 md:p-14 overflow-hidden">
            {/* MAPA ECUADOR AL FONDO */}
            <Image
                src="/images/ecuador-map.png"
                alt={t("contact.form.mapAlt")}
                fill
                className="absolute inset-0 object-contain opacity-25 md:translate-x-[-10%] md:translate-y-[-5%]"
            />

            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    {t("contact.form.title")}
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* IMAGEN */}
                    <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
                        <Image
                            src="/images/viaje.jpg"
                            alt={t("contact.form.heroAlt")}
                            width={900}
                            height={600}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* FORMULARIO */}
                    <form className="bg-white/40 backdrop-blur rounded-2xl px-6 py-7 shadow-lg space-y-5 text-slate-900">
                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                {t("contact.form.fields.tour.label")}
                            </label>
                            <select className="w-full p-3 rounded-lg border border-gray-300 text-sm md:text-base bg-white/90">
                                <option>{t("contact.form.fields.tour.options.all")}</option>
                                <option>{t("contact.form.fields.tour.options.quitonly")}</option>
                                <option>
                                    {t("contact.form.fields.tour.options.guayaquilly")}
                                </option>
                                <option>{t("contact.form.fields.tour.options.cuenconly")}</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                {t("contact.form.fields.name.label")}
                            </label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg border border-gray-300 text-sm md:text-base bg-white/90"
                                placeholder={t("contact.form.fields.name.placeholder")}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                {t("contact.form.fields.email.label")}
                            </label>
                            <input
                                type="email"
                                className="w-full p-3 rounded-lg border border-gray-300 text-sm md:text-base bg-white/90"
                                placeholder={t("contact.form.fields.email.placeholder")}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                {t("contact.form.fields.message.label")}
                            </label>
                            <textarea
                                rows={4}
                                className="w-full p-3 rounded-lg border border-gray-300 text-sm md:text-base resize-none bg-white/90"
                                placeholder={t(
                                    "contact.form.fields.message.placeholder",
                                )}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#f9b233] hover:bg-[#f7a71b] text-slate-900 font-semibold py-3 rounded-full shadow-md transition hover:translate-y-[2px] cursor-pointer"
                        >
                            {t("contact.form.submit")}
                        </button>

                        <p className="text-xs text-center text-gray-600">
                            {t("contact.form.helper")}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
