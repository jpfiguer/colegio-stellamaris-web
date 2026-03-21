"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    headline: "Formación valórica y ciudadana",
    sub: "Formación integral inclusiva y de calidad",
    accent: "Aprendizaje activo, significativo y participativo",
  },
  {
    headline: "Valores",
    sub: "Solidaridad y empatía\nHonestidad y compromiso",
    accent: "Aprendizaje",
  },
  {
    headline: "Competencias",
    sub: "para el aprendizaje globalizado permanente\nsocio-emocional y de convivencia",
    accent: "Desarrollo integral",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.png" alt="" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/[0.92] via-primary/[0.85] to-primary-light/[0.70]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-primary-dark/30" />
      </div>

      {/* Decorative elements like original */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-[3px] border-white/[0.07] rounded-full pointer-events-none" aria-hidden />
      <div className="absolute top-20 left-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] border-[3px] border-white/[0.05] rounded-full pointer-events-none" aria-hidden />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] md:w-[350px] md:h-[350px] opacity-[0.06] pointer-events-none" aria-hidden>
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-accent w-full h-full">
          <line x1="10" y1="50" x2="90" y2="50" strokeWidth="3" />
          <line x1="50" y1="10" x2="50" y2="90" strokeWidth="3" />
          <line x1="20" y1="20" x2="80" y2="80" strokeWidth="2" />
          <line x1="80" y1="20" x2="20" y2="80" strokeWidth="2" />
        </svg>
      </div>

      {/* Slide content */}
      <div className="relative w-full container-wide py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 inline-block">
            <Image src="/images/logo.png" alt="Stella Maris" width={80} height={80} className="mx-auto opacity-90 drop-shadow-lg" />
          </div>

          <div key={current} className="animate-word-in">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
              {slide.headline}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-relaxed whitespace-pre-line mb-3">
              {slide.sub}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-accent leading-tight">
              {slide.accent}
            </p>
          </div>
        </div>

        {/* Carousel arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all border border-white/10 z-10"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all border border-white/10 z-10"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-accent w-8" : "bg-white/30 w-2"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f4f6fb] to-transparent pointer-events-none" />
    </section>
  );
}
