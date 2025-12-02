import type { Language } from "@/i18n/config";

export type TourLocaleContent = {
  title: string;
  shortTitle: string;
  description: string;
  priceFrom: string;
};

export type Tour = {
  slug: string;
  city: string;      
  image: string;
  rating: number;
  locales: Record<Language, TourLocaleContent>;
};

export type TestimonialLocaleContent = {
  text: string;
};

export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  avatar: string;
  locales: Record<Language, TestimonialLocaleContent>;
};