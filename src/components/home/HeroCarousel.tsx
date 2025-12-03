"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

const slides = [
  {
    id: 1,
    src: "/images/tour-guayaquil.jpg",
    alt: "Guayaquil",
  },
  {
    id: 2,
    src: "/images/tour-quito.jpg",
    alt: "Quito",
  },
  {
    id: 3,
    src: "/images/tour-cuenca.webp",
    alt: "Cuenca",
  },
];

function getIndex(current: number, offset: number, length: number) {
  return (current + offset + length) % length;
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Quito al centro
  const { t } = useI18n();

  const leftSlide = slides[getIndex(activeIndex, -1, slides.length)];
  const centerSlide = slides[activeIndex];
  const rightSlide = slides[getIndex(activeIndex, 1, slides.length)];

  return (
    <section>
      {/* FILA DE 3 COLUMNAS - centro grande */}
      <div className="grid grid-cols-1 md:grid-cols-[0.6fr_2.8fr_0.6fr] gap-4 md:h-[60vh]">
        {/* IZQUIERDA (pequeña) */}
        <div
          key={leftSlide.id}
          className="hidden md:block relative h-40 md:h-[60vh] rounded-2xl overflow-hidden hover:opacity-100 transition-all duration-500 animate-fade-slide"
        >
          <Image
            src={leftSlide.src}
            alt={leftSlide.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* CENTRO (grande, con texto) */}
        <div
          key={centerSlide.id}
          className="relative h-56 md:h-[60vh] rounded-2xl overflow-hidden shadow-lg "
        >
          <Image
            src={centerSlide.src}
            alt={centerSlide.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t("home.hero.titleLine1")}
              <span className="block">{t("home.hero.titleLine2")}</span>
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-100 max-w-xl">
              {t("home.hero.subtitle")}
            </p>
          </div>

          {/* FLECHAS */}
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white text-lg hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % slides.length)
            }
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white text-lg hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            ›
          </button>
        </div>

        {/* DERECHA (pequeña) */}
        <div
          key={rightSlide.id}
          className="hidden md:block relative h-40 md:h-[60vh] rounded-2xl overflow-hidden hover:opacity-100 transition-all duration-500 animate-fade-slide"
        >
          <Image
            src={rightSlide.src}
            alt={rightSlide.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* INDICADORES + BOTÓN */}
      <div className="mt-4 flex flex-col items-center gap-4 px-4">
        {/* INDICADORES (puntitos) */}
        <div className="flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${index === activeIndex
                  ? "bg-emerald-600 scale-125"
                  : "bg-slate-300 hover:bg-emerald-300"
                }`}
              aria-label={`Ir al slide ${slide.alt}`}
            />
          ))}
        </div>

        {/* BOTÓN VERDE INFERIOR */}
        <a
          href="/tours"
          className="w-full max-w-xs sm:max-w-sm md:max-w-full rounded-full bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-700 hover:translate-y-[2px] shadow-md"
        >
          {t("home.hero.cta")}
        </a>
      </div>
    </section>
  );
}
