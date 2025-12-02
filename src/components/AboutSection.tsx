import Image from "next/image";


export default function AboutSection() {
    return (
        <section className="rounded-3xl bg-[#25937f] px-10 md:px-16 py-8 text-white relative overflow-hidden">
            {/* Título arriba a la derecha */}
            <div className="mb-4 flex md:justify-end m-5">
                <h2 className="text-2xl text-[var(--text-dark)] md:text-4xl font-bold">Sobre Nosotros</h2>
            </div>

            {/* Fondo del mapa (silhouette) */}
            <div className="absolute inset-0 pointer-events-none md:h-150 md:mt-5">

                <Image
                    src="/images/ecuador.png"
                    alt="Mapa de Ecuador"
                    fill
                    className="object-contain opacity-25 md:translate-x-[-10%] md:translate-y-[-5%]"
                />
            </div>

            {/* Contenido principal */}
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center relative mb-10">

                {/* Imagen — ARRIBA en mobile, DERECHA en desktop */}
                <div className="relative h-48 md:h-80 rounded-2xl overflow-hidden z-10 md:mt-10 order-1 md:order-2">
                    <Image
                        src="/images/team.jpg"
                        alt="Equipo de trabajo"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Tarjeta negra — ABAJO en mobile, IZQUIERDA en desktop */}
                <div className="relative z-10 max-w-md order-2 md:order-1">
                    <h3 className=" text-xl text-[var(--text-light)] font-bold mb-10">
                        Por que Elegirnos?
                    </h3>

                    <div className="rounded-2xl bg-black/70 px-5 py-4 shadow-lg text-sm leading-relaxed space-y-3">
                        <p>
                            Somos una agencia dedicada a ofrecer experiencias turísticas únicas
                            en Ecuador, conectando a viajeros con la riqueza natural, cultural y
                            gastronómica del país.
                        </p>
                        <p>
                            Creemos que cada viaje debe ser más que un recorrido: una
                            oportunidad para descubrir, aprender y crear recuerdos inolvidables.
                        </p>
                        <p>
                            Acompáñanos a explorar Ecuador, desde sus montañas andinas hasta sus
                            playas y selvas llenas de vida.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
