"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";
import { testimonials } from "@/lib/content/testimonials";

const virtualSlides = Array.from({ length: 40 }, (_, index) => ({
  ...testimonials[index % testimonials.length],
  idVirtual: index,
}));

export default function Testimonials() {
  const { t, lang } = useI18n();

  return (
    <section className="bg-white rounded-3xl shadow-sm px-6 py-10 space-y-10">
      <h2 className="text-3xl font-bold text-center">
        {t("home.sections.testimonialsTitle")}
      </h2>

      <Swiper
        modules={[Autoplay, Virtual]}
        virtual
        loop
        spaceBetween={24}
        centeredSlides
        slidesPerView={1.1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4500}
        grabCursor
        className="py-5"
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3.1 },
        }}
      >
        {virtualSlides.map((item) => {
          const content = item.locales[lang];

          return (
            <SwiperSlide key={item.idVirtual} virtualIndex={item.idVirtual}>
              <div className="rounded-2xl bg-[var(--primary)] text-white px-6 py-6 shadow-md hover:translate-y-[2px] transition-transform">
                {/* Avatar + nombre + rating */}
                <div className="grid grid-cols-[auto_1fr] gap-4 items-center ml-4 mr-4">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-base font-semibold">{item.name}</p>
                    <div className="flex gap-1 mt-1 justify-center">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`text-xl ${idx < item.rating ? "text-yellow-400" : "text-white/40"
                            }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Texto */}
                <p className="text-sm text-center text-white/90 leading-relaxed mt-4 ml-2 mr-2">
                  {content.text}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
