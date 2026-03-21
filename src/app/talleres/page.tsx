import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talleres - Colegio Stella Maris",
};

export default function TalleresPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-dark mb-6">Talleres Extraescolares</h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-8" />
        <div className="bg-bg-light rounded-xl p-12">
          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xl text-gray">
            Pronto estaremos actualizando esta página para ofrecerte más información sobre nuestros talleres.
          </p>
        </div>
      </div>
    </section>
  );
}
