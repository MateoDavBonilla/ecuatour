"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { TourMedia } from "@/lib/content/tours";

type TourCardProps = {
    image: string;
    gallery?: TourMedia[];
    title: string;
    subtitle: string;
    description: string;
    rating: number;
    priceFrom: string;
    slug: string;
    moreInfoLabel: string;
    index?: number;
};

export function TourCard({
    image,
    gallery,
    title,
    subtitle,
    description,
    rating,
    priceFrom,
    slug,
    moreInfoLabel,
    index = 0,
}: TourCardProps) {
    const slides: TourMedia[] =
        gallery && gallery.length > 0
            ? gallery
            : [{ type: "image", src: image, alt: title }];

    const isEven = index % 2 === 0;

    const bottomClasses = isEven
        ? "bg-[var(--primary)] text-white"
        : "bg-[#f3f3f3] text-slate-900 text-white";

    const textClasses = isEven
        ? "text-white"
        : "text-black";

    return (
        <article className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* GALERÍA TIPO HERO */}
            <div className={`${bottomClasses} relative w-full md:h-[50vh]`}>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}         // el ancho lo define el slide
                    spaceBetween={24}
                    className="w-full md:h-full px-6"        // margen lateral para que se vean los bordes
                >
                    {slides.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            //  ancho “hero” (70–80% del card)
                            className="!w-[80%] md:!w-[70%] lg:!w-[60%] 
                         !h-[260px] md:!h-[100%] 
                         rounded-b-3xl overflow-hidden relative"
                        >
                            {item.type === "image" && (
                                <Image
                                    src={item.src}
                                    alt={item.alt ?? title}
                                    fill
                                    className="object-cover"
                                />
                            )}

                            {item.type === "video" && (
                                <video
                                    src={item.src}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* overlay + texto sobre la imagen */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute bottom-10 left-8 right-8 text-center justify-center">
                                <h2 className="text-3xl md:text-6xl text-white font-extrabold drop-shadow">
                                    {title}
                                </h2>
                                <p className="text-white/90 text-sm md:text-lg mt-5">
                                    {subtitle}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={`${bottomClasses} px-5 md:px-20 py-6`}>


                <div className={`${textClasses} flex flex-wrap items-center justify-between gap-3 mb-4 text-xs md:text-sm`}>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => {
                            const filled = idx < Math.round(rating ?? 0);
                            return (
                                <span
                                    key={idx}
                                    className={`text-2xl ${filled ? "text-amber-400" : "text-white/40"
                                        }`}
                                >
                                    ★
                                </span>
                            );
                        })}
                        <span className="ml-1 text-xl font-semibold">
                            {rating.toFixed(1)} / 5
                        </span>
                    </div>

                    {priceFrom && (
                        <span className="inline-flex rounded-full bg-black/10 px-3 py-1 font-medium md:text-base hover:bg-[#f7a71b] transition-colors">
                            {priceFrom}
                        </span>
                    )}
                </div>

                <div className="bg-black/60 rounded-2xl px-4 py-3 md:text-lg leading-relaxed mb-4">
                    <p>{description}</p>
                </div>

                <Link
                    href={`/tours/${slug}`}
                    className="inline-flex rounded-full bg-[#f9b233] px-8 py-2 text-xs md:text-sm font-semibold text-slate-900 hover:bg-[#f7a71b] hover:translate-y-[2px]  transition-colors mt-5 shadow-md"
                >
                    {moreInfoLabel}
                </Link>
            </div>
        </article>
    );
}
