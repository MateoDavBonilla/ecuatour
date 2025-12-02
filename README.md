README.md — Ecuatour Web Platform (Development Documentation)
# Ecuatour Web Platform

Repositorio del proyecto web de **Ecuatour**, una plataforma desarrollada para gestionar y presentar tours, destinos y experiencias turísticas dentro de Ecuador.

Este código corresponde al **sitio público** de la agencia y está construido con una arquitectura moderna enfocada en performance, mantenibilidad y escalabilidad.  
El repositorio se mantendrá **público durante la fase de desarrollo** y posteriormente será migrado a un repositorio **privado** bajo la organización interna.

---

## 📦 Tecnologías principales

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Swiper.js** (carousels)
- **Next/Image** para optimización de imágenes
- **ESLint + Prettier** (estándares de código)
- **Vercel** (despliegue continuo)

---

## 📁 Estructura del proyecto



/app
/tours
/about
/contact
layout.tsx
page.tsx

/components
Navbar.tsx
Footer.tsx
HeroCarousel.tsx
FeaturedTours.tsx
Testimonials.tsx
AboutSection.tsx
LanguageDropdown.tsx

/public
/images

/locales
es.json
en.json

/styles
globals.css


---

## ▶️ Requisitos previos

- **Node.js 18+**
- **npm, pnpm o yarn**
- Git instalado

---

## 🚀 Puesta en marcha (local)

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/ecuatour.git
cd ecuatour

2. Instalar dependencias
npm install

3. Ejecutar en modo desarrollo
npm run dev


Aplicación disponible en:
➡️ http://localhost:3000

🏗️ Build de producción
npm run build
npm start

🌐 Despliegue

El proyecto está configurado para flujos CI/CD con Vercel.

Flujo recomendado:

Merge a main

Vercel crea automáticamente un Preview Deployment

Tras revisión, se promueve a Production

🌍 Internacionalización (i18n)

Sistema simple basado en JSON:

/locales/en.json  
/locales/es.json


El selector de idioma está implementado en
components/LanguageDropdown.tsx.

🧩 Estándares de desarrollo
Convenciones

Componentes React → PascalCase

Hooks internos → camelCase

Imágenes → kebab-case

Contenido estructurado → JSON o constantes TS

Linter
npm run lint

🌱 Branching model

main → versión estable / producción

dev (opcional) → integración previa

Ramas de features → feature/nombre

Ramas de fixes → fix/nombre

🔐 Privacidad y seguridad

Antes de mantener el repositorio como privado:

No almacenar datos sensibles

Mantener variables de entorno en:

.env.local
.env.production


Ambos deben estar en .gitignore

🗺️ Roadmap (interno)

 Integrar un CMS para gestionar tours

 Formulario de contacto usando API Routes

 SEO avanzado (schemas, metadata dinámica)

 Mejoras de accesibilidad (A11y)

 Migración a repositorio privado bajo la organización NITE

🧑‍💻 Desarrollo y Mantenimiento

Desarrollador:
Mateo Bonilla

Empresa responsable:
NITE

Para soporte técnico interno:
📧 contacto corporativo pendiente de asignación

📜 Licencia

Proyecto de uso interno y propietario.
No autorizado para redistribución pública o comercial fuera de NITE.
