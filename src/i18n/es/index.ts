import { about } from "./about";
import { common } from "./common";
import contact from "./contact";
import { home } from "./home";

export const es = {
  common,
  home,
  about,
  contact
} as const;

export type Messages = typeof es;