import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería Kinder 2024 - Colegio Stella Maris",
};

export default function GaleriaKinder2024Page() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-heading text-4xl font-bold text-dark mb-2 text-center">
          Galería Kinder Stella Maris 2024
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
        <div className="bg-bg-light rounded-xl p-8 text-center">
          <p className="text-gray-600 text-lg">
            Galería de fotos del kinder 2024. Próximamente disponible con todas las actividades del año.
          </p>
        </div>
      </div>
    </section>
  );
}
