"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  "/images/carousel-1.png",
  "/images/carousel-2.png",
  "/images/carousel-3.png",
  "/images/carousel-4.png",
  "/images/carousel-5.png",
  "/images/carousel-6.png",
  "/images/carousel-7.png",
];

export default function MisionVision() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <div className="text-center mb-10">
          <div className="section-badge">Identidad</div>
          <h2 className="section-heading mt-4 text-3xl md:text-4xl">
            Misión y <span className="text-gradient-brand">visión</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <div className="glass rounded-2xl p-6 md:p-7 shadow-soft ring-1 ring-primary/[0.06] flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink">Misión</h3>
              </div>
              <p className="text-ink/55 leading-relaxed text-sm">
                Nuestro centro educativo es un espacio de formación integral de personas, que ofrece, mediante su
                propuesta educativa, contribuir con el desarrollo de habilidades, comportamientos sociales,
                reconociendo la diversidad, fomentando la inclusión socio-emocional, artística y valórica como
                pilares fundamentales en un ambiente de mutuo respeto, colaboración y empatía.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-7 shadow-soft ring-1 ring-primary/[0.06] flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink">Visión</h3>
              </div>
              <p className="text-ink/55 leading-relaxed text-sm">
                Buscamos ser un espacio de formación integral, inclusivo y de calidad, capaz de desarrollar
                al máximo las habilidades de nuestros estudiantes, preparándolos para vivir sana y
                responsablemente en la sociedad, donde logren descubrir su vocación y proyecto de vida,
                haciéndolos parte de la construcción de un mundo más humano, justo y fraterno.
              </p>
            </div>
          </div>

          {/* Photo carousel */}
          <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/[0.08] min-h-[320px] lg:min-h-0">
            {carouselImages.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <Image src={img} alt={`Colegio ${i + 1}`} fill className="object-cover" />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <button
              onClick={() => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-xl w-9 h-9 flex items-center justify-center transition-all z-10 border border-white/15"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % carouselImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-xl w-9 h-9 flex items-center justify-center transition-all z-10 border border-white/15"
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "bg-white w-5" : "bg-white/40 w-1.5"
                  }`}
                  aria-label={`Imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
