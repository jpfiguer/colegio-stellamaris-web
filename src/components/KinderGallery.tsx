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

const vueltaAlSolMarzo = [
  "/images/vuelta-al-sol/marzo/foto-1.jpg",
  "/images/vuelta-al-sol/marzo/foto-2.jpg",
  "/images/vuelta-al-sol/marzo/foto-3.jpg",
  "/images/vuelta-al-sol/marzo/foto-4.jpg",
  "/images/vuelta-al-sol/marzo/foto-5.jpg",
  "/images/vuelta-al-sol/marzo/foto-6.jpg",
  "/images/vuelta-al-sol/marzo/foto-7.jpg",
  "/images/vuelta-al-sol/marzo/foto-8.jpg",
  "/images/vuelta-al-sol/marzo/foto-9.jpg",
  "/images/vuelta-al-sol/marzo/foto-10.jpg",
];

type Section = "kinder" | "vuelta";

export default function KinderGallery() {
  const [section, setSection] = useState<Section>("kinder");
  const [current, setCurrent] = useState(0);

  const photos = section === "kinder" ? kinderPhotos : vueltaAlSolMarzo;

  // Auto-advance photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  // Reset to first photo when switching sections
  const switchSection = (s: Section) => {
    setSection(s);
    setCurrent(0);
  };

  return (
    <div className="glass rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/[0.06] h-full flex flex-col">
      {/* Tab selector */}
      <div className="flex border-b border-primary/10">
        <button
          onClick={() => switchSection("kinder")}
          className={`flex-1 py-2.5 text-xs font-bold tracking-tight text-center transition-all ${
            section === "kinder"
              ? "bg-gradient-to-r from-primary-dark to-primary text-white"
              : "bg-white text-ink/50 hover:text-primary hover:bg-primary/5"
          }`}
        >
          Kinder Stella Maris
        </button>
        <button
          onClick={() => switchSection("vuelta")}
          className={`flex-1 py-2.5 text-xs font-bold tracking-tight text-center transition-all ${
            section === "vuelta"
              ? "bg-gradient-to-r from-accent-dark to-accent text-white"
              : "bg-white text-ink/50 hover:text-accent hover:bg-accent/5"
          }`}
        >
          Vuelta al Sol
        </button>
      </div>

      {/* Subtitle bar */}
      <div className={`px-4 py-2 text-[11px] flex items-center justify-between ${
        section === "kinder"
          ? "bg-primary/5 text-primary/70"
          : "bg-accent/5 text-accent-dark/70"
      }`}>
        <span>
          {section === "kinder"
            ? "Nuestras aventuras y aprendizajes"
            : "Cumpleaños Marzo - Anexo 1"}
        </span>
        {section === "kinder" && (
          <div className="flex items-center gap-1">
            <Link href="/galeria-kinder-2024" className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors">
              2024
            </Link>
            <Link href="/galeria-kinder-2025" className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors">
              2025
            </Link>
          </div>
        )}
        {section === "vuelta" && (
          <span className="text-[9px] font-semibold bg-accent/10 text-accent-dark px-2 py-0.5 rounded-full">
            Marzo 2026
          </span>
        )}
      </div>

      {/* Carousel */}
      <div className="relative flex-1 min-h-[200px]">
        {photos.map((photo, i) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-all duration-700 ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image src={photo} alt={`${section === "kinder" ? "Kinder" : "Vuelta al Sol"} ${i + 1}`} fill className="object-cover" />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Controls */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + photos.length) % photos.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-xl w-8 h-8 flex items-center justify-center transition-all z-10 border border-white/10"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % photos.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-xl w-8 h-8 flex items-center justify-center transition-all z-10 border border-white/10"
          aria-label="Siguiente"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Counter + dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <span className="text-[10px] text-white/70 font-semibold bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {current + 1}/{photos.length}
          </span>
        </div>
      </div>
    </div>
  );
}
