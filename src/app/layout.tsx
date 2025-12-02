import type { Metadata } from "next";
import "./globals.css";
import { LanguageDropdown } from "@/components/LanguageDropdown";

export const metadata: Metadata = {
  title: "Ecuatour",
  description: "Agencia de turismo en Ecuador",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-screen flex flex-col bg-slate-100 text-slate-900">
        {/* HEADER */}
        <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">
                EC
              </div>
              <span className="font-semibold tracking-tight">Ecuatour</span>
            </a>

            <div className="hidden md:flex gap-6 text-sm">
              <a href="/" className="hover:text-emerald-600">
                Inicio
              </a>
              <a href="/tours" className="hover:text-emerald-600">
                Viajes
              </a>
              <a href="/about" className="hover:text-emerald-600">
                Acerca de
              </a>
              <a href="/contact" className="hover:text-emerald-600">
                Contacto
              </a>
              <div className="flex items-center gap-3 text-xs">
                <LanguageDropdown />
              </div>
            </div>
          </nav>
        </header>

        {/* CONTENIDO */}
        <main className="flex-1">
          <div className="w-full md:max-w-7/10 mx-auto px-4 md:px-6 py-8">
            {children}
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#f5f5f5]">
          <div className="border-t-4 border-emerald-600" />

          <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6 grid-cols-2 md:grid-cols-3 text-xs text-slate-700">
            <div>
              <p className="font-bold mb-1">Ecuatour</p>
              <p>
                Agencia dedicada a crear experiencias turísticas únicas en
                Ecuador, combinando naturaleza, cultura y gastronomía.
              </p>
            </div>

            <div className="hidden md:block text-center md:text-right">
              <p className="font-bold mb-1">Menú</p>
              <ul className="space-y-1 list-inside">
                <li>
                  <a href="/" className="hover:text-emerald-600">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/tours" className="hover:text-emerald-600">
                    Viajes
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-emerald-600">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-emerald-600">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:text-right space-y-1">
              <p className="font-bold mb-1">Contacto</p>
              <p>📍 Quito, Ecuador</p>
              <p>📱 +593 99 999 9999</p>
              <p>✉️ agencia@ecuatour.com</p>
            </div>
          </div>

          <div className="border-t border-slate-300" />
          <div className="max-w-6xl mx-auto px-6 py-3 text-[11px] text-center text-slate-500">
            © 2025 Agencia de Turismo · Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
