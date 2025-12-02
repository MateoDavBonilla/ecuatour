import { es, type Messages } from "./es";
import { en } from "./en";
import { de } from "./de";

export const languages = ["es", "en", "de"] as const;
export type Language = (typeof languages)[number];

export const messages: Record<Language, Messages> = {
  es,
  en,
  de,
};