"use client";

import CountUp from "./CountUp";


const stats = [
  { value: 4.8, label: "EN MÁS DE 800 VIAJES", suffix: "/5", decimals: 1 },
  { value: 25, label: "AÑOS DE EXPERIENCIA", prefix: "+", decimals: 0 },
  { value: 25, label: "DESTINOS DISPONIBLES", prefix: "+", decimals: 0 },
];

export default function Metrics() {
  return (
    <section className="grid gap-5 md:gap-20 md:grid-cols-3 ml-20 mr-20 ">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm px-6 py-5 text-center hover:translate-y-[2px]"
        >
          <p className="text-2xl font-bold text-slate-900">
            {stat.prefix && <span>{stat.prefix}</span>}
            <CountUp end={stat.value} decimals={stat.decimals} />
            {stat.suffix && <span>{stat.suffix}</span>}
          </p>
          <p className="mt-2 text-[11px] font-semibold tracking-wide text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
