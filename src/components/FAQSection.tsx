"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Necesito obtener un certificado (matrícula, alumno regular)",
    answer: "El apoderado debe contactar a su profesor/a jefe, quien solicitará los datos para procesar el documento.",
  },
  {
    question: "¿Existen cobros por matrícula o mensualidades?",
    answer: "Nuestro colegio es 100% gratuito.",
  },
  {
    question: "¿Cómo es el sistema de postulación?",
    answer: "Nuestro colegio está adscrito al sistema SAE establecido por el Ministerio de Educación, por lo que los plazos y procedimientos dependen de las decisiones del ministerio.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Lunes a Viernes de 8:00 a 18:00 hrs. Sábados de 9:00 a 14:00 hrs. Domingos cerrado.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-10">
          <div className="section-badge">Ayuda</div>
          <h2 className="section-heading mt-4 text-3xl md:text-4xl">
            Preguntas <span className="text-gradient-brand">frecuentes</span>
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "shadow-card ring-1 ring-primary/12" : "shadow-soft ring-1 ring-primary/[0.04]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
              >
                <span className="font-heading font-semibold text-ink/80 group-hover:text-primary transition-colors text-sm pr-4">
                  {faq.question}
                </span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === i
                    ? "bg-primary text-white rotate-180"
                    : "bg-primary/5 text-primary/40 group-hover:bg-primary/10"
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-5 pb-4 text-ink/50 text-sm leading-relaxed border-t border-primary/[0.05] pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
