const contact = {
  info: {
    title: "Contáctanos",
    subtitle: "¿Listo para planificar tu próxima aventura en Ecuador?",
    locationLabel: "Ubicación",
    locationValue: "Quito, Ecuador",
    phoneLabel: "Teléfono",
    emailLabel: "Email",
    imageAlt: "Quito de noche",
  },
  form: {
    mapAlt: "Mapa de Ecuador",
    title: "Queremos ser parte de tu próxima experiencia. ¡Hablemos!",
    heroAlt: "Personas planificando un viaje",
    fields: {
      tour: {
        label: "Tour",
        options: {
          all: "Quito, Guayaquil, Cuenca",
          quitonly: "Solo Quito",
          guayaquilly: "Solo Guayaquil",
          cuenconly: "Solo Cuenca",
        },
      },
      name: {
        label: "Nombre y apellido",
        placeholder: "Pedro Paredes",
      },
      email: {
        label: "Email",
        placeholder: "pedro@gmail.com",
      },
      message: {
        label: "Dinos en qué tour estás interesado",
        placeholder:
          "Me gustaría conocer más sobre los programas de Quito.",
      },
    },
    submit: "Enviar",
    helper: "Resolveremos todas tus dudas.",
  },
};

export default contact;
