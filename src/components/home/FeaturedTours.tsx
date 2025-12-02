"use client";

import { useState } from "react";
import Image from "next/image";

const featuredTours = [
    {
        slug: "quito-city-tour",
        city: "Quito",
        title: "Quito",
        image: "/images/tour-quito.jpg",
        rating: 4.8,
        priceFrom: "Desde $450 por persona",
        shortTitle: "Quito, la joya en el corazón de los Andes",
        description:
            "Ubicada a 2.850 metros sobre el nivel del mar, Quito es la capital de Ecuador y una de las ciudades más altas del mundo. Su centro histórico, declarado Patrimonio Cultural de la Humanidad por la UNESCO, combina calles coloniales, iglesias majestuosas y una energía moderna única.",
    },
    {
        slug: "guayaquil-tour",
        city: "Guayaquil",
        title: "Guayaquil",
        image: "/images/tour-guayaquil.jpg",
        rating: 4.7,
        priceFrom: "Desde $390 por persona",
        shortTitle: "Guayaquil, la Perla del Pacífico",
        description:
            "Guayaquil es la ciudad más grande de Ecuador y un vibrante punto turístico del litoral. Su famoso Malecón 2000, barrios coloridos como Las Peñas y su deliciosa gastronomía costeña hacen de esta ciudad una experiencia cultural inolvidable junto al río Guayas.",
    },
    {
        slug: "cuenca-tour",
        city: "Cuenca",
        title: "Cuenca",
        image: "/images/tour-cuenca.webp",
        rating: 4.9,
        priceFrom: "Desde $420 por persona",
        shortTitle: "Cuenca, la Atenas del Ecuador",
        description:
            "Reconocida por su arquitectura colonial, iglesias imponentes y calles empedradas, Cuenca es Patrimonio Cultural de la Humanidad. Es un destino perfecto para viajeros que buscan tranquilidad, historia y una belleza urbana rodeada de montañas y naturaleza.",
    },
];

export default function FeaturedTours() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedTour = featuredTours[selectedIndex];

    return (
        <section className="bg-white rounded-3xl shadow-sm md:px-6 py-7">
            <h2 className="mb-6 text-xl md:text-4xl font-bold text-slate-900 ml-10">
                Tours Destacados
            </h2>

            <div className="grid md:gap-20 md:grid-cols-[2fr_1.6fr] items-start m-10">
                {/* Columna izquierda: tour seleccionado */}
                <article className="flex flex-col">
                    {/* Imagen grande */}
                    <div className="relative h-44 md:h-52 rounded-2xl overflow-hidden mb-4">
                        <Image
                            src={selectedTour.image}
                            alt={selectedTour.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute top-4 left-4">
                            <p className="text-2xl font-bold text-white drop-shadow">
                                {selectedTour.title}
                            </p>
                        </div>

                        {/* Badge precio */}
                        {selectedTour.priceFrom && (
                            <span className="absolute bottom-3 right-4 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white">
                                {selectedTour.priceFrom}
                            </span>
                        )}
                    </div>

                    {/* Estrellas y rating */}
                    {selectedTour.rating && (
                        <div className="mb-3 flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, idx) => {
                                const filled = idx < Math.round(selectedTour.rating ?? 0);
                                return (
                                    <span
                                        key={idx}
                                        className={`text-xl ${filled ? "text-amber-400" : "text-slate-300"
                                            }`}
                                    >
                                        ★
                                    </span>
                                );
                            })}
                            <span className="ml-1 text-m font-semibold text-slate-700">
                                {selectedTour.rating.toFixed(1)} / 5
                            </span>
                        </div>
                    )}

                    {/* Título + descripción */}
                    {selectedTour.shortTitle && (
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            {selectedTour.shortTitle}
                        </h3>
                    )}
                    {selectedTour.description && (
                        <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                            {selectedTour.description}
                        </p>
                    )}
                    {/* Navegación en mobile: chips con ciudades */}
                    <div className="mt-4 mb-8 flex gap-2 md:hidden overflow-x-auto">
                        {featuredTours.map((tour, idx) => (
                            <button
                                key={tour.slug}
                                type="button"
                                onClick={() => setSelectedIndex(idx)}
                                className={`
        whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold 
        transition-colors
        ${idx === selectedIndex
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-white text-slate-700 border-slate-200"
                                    }
      `}
                            >
                                {tour.city}
                            </button>
                        ))}
                    </div>
                    {/* Botón amarillo */}
                    <div>
                        <a
                            href={`/tours/${selectedTour.slug}`}
                            className="inline-flex rounded-full bg-[#f9b233] px-10 py-2 text-xs font-semibold text-slate-900 hover:bg-[#f7a71b] transition-colors"
                        >
                            más información
                        </a>
                    </div>
                </article>

                {/* Columna derecha: cards para cambiar el seleccionado */}
                <div className="hidden md:flex flex-col gap-4">
                    {featuredTours.map((tour, idx) => {
                        if (idx === selectedIndex) return null;

                        return (
                            <button
                                key={tour.slug}
                                type="button"
                                onClick={() => setSelectedIndex(idx)}
                                className="block text-left rounded-2xl bg-[#f6f6f6] shadow-sm overflow-hidden hover:translate-y-[2px] hover:shadow-md transition-transform focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                            >
                                <div className="relative h-32 md:h-52">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    <div className="absolute bottom-3 left-4">
                                        <p className="text-lg font-semibold text-white drop-shadow">
                                            {tour.title}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
