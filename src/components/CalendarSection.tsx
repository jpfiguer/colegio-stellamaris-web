"use client";

import { useState } from "react";

const DAYS = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export default function CalendarSection() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  const isToday = (day: number) =>
    day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const cells: { day: number; current: boolean }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, current: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({ day: i, current: true });
  }
  const remaining = 42 - cells.length;
  for (let i = 1; i <= remaining; i++) {
    cells.push({ day: i, current: false });
  }

  return (
    <div className="glass rounded-2xl shadow-card ring-1 ring-primary/[0.06] overflow-hidden h-full flex flex-col">
      {/* Blue header like Enlaces */}
      <div className="bg-gradient-to-r from-primary-dark to-primary px-5 py-3 border-b border-white/10">
        <h2 className="font-heading text-sm font-bold text-white tracking-tight">Calendario</h2>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button type="button" onClick={prevMonth} className="p-1.5 hover:bg-primary/[0.06] rounded-lg transition-colors" aria-label="Mes anterior">
          <svg className="w-4 h-4 text-ink/45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center">
          <h3 className="font-heading font-semibold text-ink text-sm tracking-tight">
            {MONTHS[month]}
          </h3>
          <span className="text-[10px] text-ink/40">{year}</span>
        </div>
        <button type="button" onClick={nextMonth} className="p-1.5 hover:bg-primary/[0.06] rounded-lg transition-colors" aria-label="Mes siguiente">
          <svg className="w-4 h-4 text-ink/45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-0.5 px-4 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-semibold text-ink/35 uppercase tracking-wide py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-0.5 px-4 flex-1">
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`text-center text-xs py-1.5 rounded-lg cursor-default transition-colors ${
              !cell.current
                ? "text-ink/12"
                : isToday(cell.day)
                ? "bg-primary text-white font-semibold shadow-sm ring-1 ring-primary/20"
                : "text-ink/65 hover:bg-primary/[0.06] hover:text-primary"
            }`}
          >
            {cell.day}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mx-4 mt-3 mb-4 pt-3 border-t border-primary/[0.08]">
        <div className="flex items-center gap-2 text-xs text-ink/45">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_0_2px_rgba(201,162,39,0.25)]" />
          Hoy: {today.getDate()} de {MONTHS[today.getMonth()]}
        </div>
      </div>
    </div>
  );
}
