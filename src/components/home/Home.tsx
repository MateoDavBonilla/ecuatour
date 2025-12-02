"use client";

import AboutSection from "../AboutSection";
import FeaturedTours from "./FeaturedTours";
import HeroCarousel from "./HeroCarousel";
import Metrics from "./Metrix";
import Testimonials from "./Testimonials";
import { useI18n } from "@/components/I18nProvider";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="flex flex-col gap-10 pb-16">
      {/* HERO */}
      <section className="bg-white rounded-3xl shadow-sm p-4">
        <HeroCarousel />
      </section>

      {/* MÉTRICAS */}
      <Metrics />

      {/* TOURS DESTACADOS */}
      <FeaturedTours />

      {/* SOBRE NOSOTROS */}
      <AboutSection />

      {/* TESTIMONIOS */}
      <Testimonials />

      {/* CTA FINAL */}
      <div className="pt-2">
        <a
          href="/reservas"
          className="block w-full rounded-full bg-[var(--primary)] py-4 text-center text-xl font-bold text-white hover:bg-[var(--primary-dark)]"
        >
          {t("home.cta.final")}
        </a>
      </div>
    </main>
  );
}
