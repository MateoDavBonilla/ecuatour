import { about } from "./about";
import { common } from "./common";
import { home } from "./home";

export const es = {
  common,
  home,
  about
} as const;

export type Messages = typeof es;