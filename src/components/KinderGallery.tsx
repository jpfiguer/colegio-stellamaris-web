"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const kinderPhotos = [
  "/images/kinder/k1.jpg",
  "/images/kinder/k2.jpg",
  "/images/kinder/k3.jpg",
  "/images/kinder/k4.jpg",
  "/images/kinder/k5.jpg",
];

export default function KinderGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % kinderPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/[0.06] h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light px-5 py-3 flex items-center justify-between border-b border-white/10">
        <div>
          <h2 className="font-heading text-sm font-bold text-white tracking-tight">Kinder Stella Maris</h2>
          <p className="text-white/55 text-[11px]">Nuestras aventuras, experiencias y aprendizajes</p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <Link href="/galeria-kinder-2024" className="text-[10px] font-semibold bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20 hover:bg-white/25 transition-colors">
            2024
          </Link>
          <Link href="/galeria-kinder-2025" className="text-[10px] font-semibold bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20 hover:bg-white/25 transition-colors">
            2025
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative flex-1 min-h-[200px]">
        {kinderPhotos.map((photo, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image src={photo} alt={`Kinder ${i + 1}`} fill className="object-cover" />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Controls */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + kinderPhotos.length) % kinderPhotos.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-xl w-8 h-8 flex items-center justify-center transition-all z-10 border border-white/10"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % kinderPhotos.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-xl w-8 h-8 flex items-center justify-center transition-all z-10 border border-white/10"
          aria-label="Siguiente"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {kinderPhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "bg-white w-5" : "bg-white/40 w-1.5"
              }`}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
