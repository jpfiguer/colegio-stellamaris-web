import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipo Directivo - Colegio Stella Maris",
};

export default function EquipoDirectivoPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-dark mb-6">Equipo Directivo</h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
        <div className="bg-bg-light rounded-xl p-12">
          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-xl text-gray">
            Próximamente información sobre nuestro equipo directivo.
          </p>
        </div>
      </div>
    </section>
  );
}
