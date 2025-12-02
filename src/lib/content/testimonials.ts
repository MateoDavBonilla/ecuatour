import { Testimonial } from "../types/content";


export const testimonials: Testimonial[] = [
    {
        id: "belen-bosmediano",
        name: "Belén Bosmediano",
        rating: 5,
        avatar: "/images/avatar-1.jpg",
        locales: {
            es: {
                text: "¡Reservar fue rapidísimo y el viaje, impecable!",
            },
            en: {
                text: "Booking was super fast and the trip was flawless!",
            },
            de: {
                text: "Die Buchung ging sehr schnell und die Reise war perfekt!",
            },
        },
    },
    {
        id: "sofia-lopez",
        name: "Sofía Lopez",
        rating: 4,
        avatar: "/images/avatar-1.jpg",
        locales: {
            es: {
                text: "La mejor agencia. No es un viaje, es una aventura perfectamente organizada.",
            },
            en: {
                text: "The best agency. It’s not just a trip, it’s a perfectly organized adventure.",
            },
            de: {
                text: "Die beste Agentur. Es ist nicht nur eine Reise, sondern ein perfekt organisiertes Abenteuer.",
            },
        },
    },

];
