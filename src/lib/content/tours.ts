// src/lib/content/tours.ts
import type { Language } from "@/i18n/config";

export type TourMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type TourLocaleContent = {
  title: string;
  shortTitle: string;
  description: string;
  priceFrom: string;
};

export type Tour = {
  slug: string;
  city: string;        // etiqueta corta ("Quito", "Guayaquil")
  image: string;
  gallery?: TourMedia[];
  rating: number;
  isFeatured?: boolean; // 👈 para Home
  locales: Record<Language, TourLocaleContent>;
};

export const tours: Tour[] = [
  {
    slug: "quito-city-tour",
    city: "Quito",
    image: "/images/tour-quito.jpg",
    rating: 4.8,
    isFeatured: true, // aparece en la sección de destacados del Home
    gallery: [
      { type: "image", src: "/images/tours/quito/quit-card.jpg", alt: "Quito vista 1" },
      { type: "image", src: "/images/tours/quito/1.jpg", alt: "Quito vista 2" },
      { type: "image", src: "/images/tours/quito/2.jpg", alt: "Quito vista 3" },
    ],
    locales: {
      es: {
        title: "Quito",
        shortTitle: "Quito, la joya en el corazón de los Andes",
        description:
          "Ubicada a 2.850 metros sobre el nivel del mar, Quito es la capital de Ecuador y una de las ciudades más altas del mundo. Su centro histórico, declarado Patrimonio Cultural de la Humanidad por la UNESCO, combina calles coloniales, iglesias majestuosas y una energía moderna única.",
        priceFrom: "Desde $450 por persona",
      },
      en: {
        title: "Quito",
        shortTitle: "Quito, the jewel in the heart of the Andes",
        description:
          "Located at 2,850 meters above sea level, Quito is the capital of Ecuador and one of the highest cities in the world. Its historic center, a UNESCO World Heritage Site, blends colonial streets, majestic churches and a unique modern energy.",
        priceFrom: "From $450 per person",
      },
      de: {
        title: "Quito",
        shortTitle: "Quito, das Juwel im Herzen der Anden",
        description:
          "Quito liegt auf 2.850 Metern über dem Meeresspiegel und ist die Hauptstadt Ecuadors – eine der höchstgelegenen Städte der Welt. Die historische Altstadt, UNESCO-Weltkulturerbe, vereint koloniale Gassen, beeindruckende Kirchen und moderne Energie.",
        priceFrom: "Ab 450 $ pro Person",
      },
    },
  },
  {
    slug: "guayaquil-tour",
    city: "Guayaquil",
    image: "/images/tours/guayaquil/tour-guayaquil.jpg",
    rating: 4.7,
    isFeatured: true,
    locales: {
      es: {
        title: "Guayaquil",
        shortTitle: "La Perla del Pacífico te espera",
        description:
          "Guayaquil es la ciudad más grande del Ecuador y un vibrante punto turístico del litoral. Su famoso Malecón 2000, barrios coloridos como Las Peñas y su deliciosa gastronomía costeña hacen de esta ciudad una experiencia cultural inolvidable junto al río Guayas.",
        priceFrom: "Desde $390 por persona",
      },
      en: {
        title: "Guayaquil",
        shortTitle: "The Pearl of the Pacific awaits you",
        description:
          "Guayaquil is Ecuador’s largest city and a vibrant coastal destination. The Malecón 2000, colorful neighborhoods like Las Peñas, and rich coastal cuisine make it an unforgettable cultural experience along the Guayas River.",
        priceFrom: "From $390 per person",
      },
      de: {
        title: "Guayaquil",
        shortTitle: "Die Perle des Pazifiks erwartet dich",
        description:
          "Guayaquil ist die größte Stadt Ecuadors und ein pulsierendes Reiseziel an der Küste. Die Uferpromenade Malecón 2000, bunte Viertel wie Las Peñas und die Küstenküche machen die Stadt zu einem unvergesslichen Erlebnis am Río Guayas.",
        priceFrom: "Ab 390 $ pro Person",
      },
    },
  },
  {
    slug: "cuenca-tour",
    city: "Cuenca",
    image: "/images/tours/cuenca/tour-cuenca.webp",
    rating: 4.9,
    isFeatured: true,
    locales: {
      es: {
        title: "Cuenca",
        shortTitle: "Historia, arte y tradición en los Andes",
        description:
          "Reconocida por su arquitectura colonial, iglesias imponentes y calles empedradas, Cuenca es Patrimonio Cultural de la Humanidad. Es un destino perfecto para viajeros que buscan tranquilidad, historia y una belleza urbana rodeada de montañas.",
        priceFrom: "Desde $420 por persona",
      },
      en: {
        title: "Cuenca",
        shortTitle: "History, art and tradition in the Andes",
        description:
          "Known for its colonial architecture, impressive churches and cobblestone streets, Cuenca is a UNESCO World Heritage city. It’s ideal for travelers seeking calm, history and elegant urban beauty surrounded by mountains.",
        priceFrom: "From $420 per person",
      },
      de: {
        title: "Cuenca",
        shortTitle: "Geschichte, Kunst und Tradition in den Anden",
        description:
          "Cuenca ist bekannt für koloniale Architektur, beeindruckende Kirchen und Kopfsteinpflasterstraßen und gehört zum UNESCO-Weltkulturerbe. Ideal für Reisende, die Ruhe, Geschichte und urbane Schönheit inmitten von Bergen suchen.",
        priceFrom: "Ab 420 $ pro Person",
      },
    },
  },

];
