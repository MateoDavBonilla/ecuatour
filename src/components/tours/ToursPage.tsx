"use client";

import { useI18n } from "@/components/I18nProvider";
import { tours } from "@/lib/content/tours";
import { TourCard } from "./TourCard";

export default function ToursPage() {
    const { lang, t } = useI18n();

    return (
        <main className="flex flex-col gap-10 pb-16">
            <div className="space-y-10">
                {tours.map((tour, index) => {
                    const content = tour.locales[lang];

                    return (
                        <TourCard
                            key={tour.slug}
                            index={index}
                            image={tour.image}
                            gallery={tour.gallery}
                            title={content.title}
                            subtitle={content.shortTitle}
                            description={content.description}
                            rating={tour.rating}
                            priceFrom={content.priceFrom}
                            slug={tour.slug}
                            moreInfoLabel={t("home.tours.moreInfo")}
                        />
                    );
                })}
            </div>
        </main>
    );
}
