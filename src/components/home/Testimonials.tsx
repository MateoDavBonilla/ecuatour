"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const testimonials = [
  {
    name: "Belén Bosmediano",
    rating: 5,
    text: "¡Reservar fue rapidísimo y el viaje, impecable!",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Sofía Lopez",
    rating: 4,
    text: "La mejor agencia. No es un viaje, es una aventura perfectamente organizada.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Macarena Mosquera",
    rating: 5,
    text: "Atención personalizada y genuina. Me sentí segura en cada paso de mi viaje.",
    avatar: "/images/avatar-1.jpg",
  },
];

// Creamos muchos "virtual slides" a partir de los 3 testimonios
const virtualSlides = Array.from({ length: 40 }, (_, index) => ({
  ...testimonials[index % testimonials.length],
  id: index, // id único para virtualIndex y key
}));

export default function Testimonials() {
  return (
    <section className="bg-white rounded-3xl shadow-sm px-6 py-10 space-y-10">
      <h2 className="text-3xl font-bold text-center">Testimonios</h2>

      <Swiper
        modules={[Autoplay, Virtual]}
        virtual
        loop={true}
        spaceBetween={24}
        centeredSlides={true}
        slidesPerView={1.1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4500} // qué tan rápido “camina” el carrete
        grabCursor={true}
        className="py-5"
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3.1 },
        }}
      >
        {virtualSlides.map((t) => (
          <SwiperSlide key={t.id} virtualIndex={t.id}>
            <div className="rounded-2xl bg-[var(--primary)] text-white px-6 py-6 shadow-md hover:translate-y-[2px] transition-transform">
              {/* Grid superior: avatar + info */}
              <div className="grid grid-cols-[auto_1fr] gap-4 items-center ml-4 mr-4">
                {/* Avatar */}
                <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Nombre + Rating */}
                <div className="text-center">
                  <p className="text-base font-semibold">{t.name}</p>
                  <div className="flex gap-1 mt-1 justify-center">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`text-xl ${
                          idx < t.rating ? "text-yellow-400" : "text-white/40"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comentario */}
              <p className="text-sm text-center text-white/90 leading-relaxed mt-4 ml-2 mr-2">
                {t.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
