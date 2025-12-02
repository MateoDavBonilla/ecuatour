import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
        <I18nProvider>
          <Navbar />

          <main className="flex-1">
            <div className="w-full md:max-w-7/10 mx-auto px-4 md:px-6 py-8">
              {children}
            </div>
          </main>

          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
