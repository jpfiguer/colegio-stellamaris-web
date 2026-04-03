"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/semana-santa-1.jpg",
  "/images/semana-santa-2.jpg",
  "/images/semana-santa-3.jpg",
  "/images/semana-santa-4.jpg",
];

export default function SemanaSantaModal() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("semana-santa-2026");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("semana-santa-2026", "1");
  };

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={close}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-[fadeIn_0.4s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light px-6 py-4 text-center relative">
          <button
            onClick={close}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="text-3xl">✝️</span>
          <h2 className="font-heading font-bold text-white text-xl mt-1">Semana Santa 2026</h2>
          <p className="text-white/70 text-xs mt-0.5">Colegio Stella Maris</p>
        </div>

        {/* Image carousel */}
        <div className="relative aspect-[4/3] bg-surface-subtle">
          {images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image src={src} alt={`Semana Santa ${i + 1}`} fill className="object-contain bg-gray-50" />
            </div>
          ))}

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-md rounded-full w-9 h-9 flex items-center justify-center z-10 hover:bg-white transition-colors border border-gray-200"
          >
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-md rounded-full w-9 h-9 flex items-center justify-center z-10 hover:bg-white transition-colors border border-gray-200"
          >
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 py-3 bg-white">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-primary/20 w-2"
              }`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 pb-5 text-center">
          <p className="text-ink/60 text-sm mb-4">
            Les deseamos una feliz Semana Santa en familia. Que este tiempo sea de reflexión, paz y unión.
          </p>
          <button
            onClick={close}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-sm shadow-md hover:shadow-glow transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
