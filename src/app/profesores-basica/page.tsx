"use client";

import { useState, FormEvent } from "react";

export default function ProfesoresBasicaPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Replace with your actual password
    if (password === "stellamaris2025") {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <section className="py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h1 className="font-heading text-2xl font-bold text-dark mb-2">Profesores Básica</h1>
            <p className="text-gray mb-6">Esta sección está protegida. Ingrese la contraseña para acceder.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Contraseña"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary ${error ? "border-red-500" : "border-gray-300"}`}
              />
              {error && <p className="text-red-500 text-sm">Contraseña incorrecta</p>}
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-light transition-colors"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold text-dark mb-8 text-center">
          Profesores Básica
        </h1>
        <div className="bg-bg-light rounded-xl p-8">
          <p className="text-gray text-center">Contenido para profesores de educación básica.</p>
        </div>
      </div>
    </section>
  );
}
