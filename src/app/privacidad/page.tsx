import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Stella Maris App",
  description:
    "Política de privacidad de la aplicación móvil Stella Maris del Complejo Educacional Stella Maris.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-surface-canvas py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-3xl shadow-card ring-1 ring-primary/[0.06] p-8 md:p-12">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary/70 hover:text-primary transition-colors mb-4"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-ink tracking-tight">
              Política de Privacidad — Stella Maris App
            </h1>
            <p className="text-sm text-ink/50 mt-2">
              <strong>Última actualización:</strong> 9 de abril de 2026
            </p>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none text-ink/75 space-y-6">
            <p>
              Complejo Educacional Stella Maris (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;el Colegio&quot;) opera la aplicación móvil Stella Maris (en adelante &quot;la App&quot;). Esta política describe cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestra App.
            </p>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">1. Información que recopilamos</h2>

              <h3 className="font-heading font-semibold text-base text-ink mt-4 mb-2">1.1 Información que proporcionas directamente</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Datos de cuenta</strong>: nombre completo, correo electrónico, tipo de usuario (apoderado, estudiante, profesor, directivo)</li>
                <li><strong>Datos académicos</strong>: curso, asignaturas (para profesores), vinculación con alumno (para apoderados y estudiantes)</li>
                <li><strong>Contenido generado</strong>: mensajes, adjuntos, justificaciones, comunicados, planificaciones</li>
              </ul>

              <h3 className="font-heading font-semibold text-base text-ink mt-4 mb-2">1.2 Información recopilada automáticamente</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Token de notificaciones push</strong> para enviar comunicados del colegio</li>
                <li><strong>Datos de uso</strong> básicos para mejorar el servicio</li>
              </ul>

              <h3 className="font-heading font-semibold text-base text-ink mt-4 mb-2">1.3 Información del alumno (solo visible para staff y apoderados vinculados)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Notas, asistencia, anotaciones de convivencia escolar</li>
                <li>Material de estudio, calendario de evaluaciones</li>
                <li>Planificaciones docentes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">2. Cómo usamos la información</h2>
              <p className="mb-2">Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Proporcionar acceso a los servicios educacionales del colegio</li>
                <li>Enviar comunicados y notificaciones relevantes</li>
                <li>Facilitar la comunicación entre apoderados, profesores y estudiantes</li>
                <li>Cumplir con las obligaciones normativas establecidas por el MINEDUC y la Superintendencia de Educación (Circular N°30)</li>
                <li>Mejorar la experiencia del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">3. Uso de Inteligencia Artificial</h2>
              <p className="mb-2">La App utiliza servicios de IA de terceros para:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Planificación docente</strong>: generar planes de clase basados en los Objetivos de Aprendizaje del Curriculum Nacional</li>
                <li><strong>Generación de evaluaciones</strong>: crear pruebas estilo SIMCE</li>
                <li><strong>OCR del libro de clases</strong>: lectura de imágenes de libros físicos para exportación al sistema SIGE</li>
              </ul>
              <p className="mt-3">
                Los datos procesados por IA son únicamente los que el usuario proporciona directamente y no incluyen información personal identificable de alumnos en los prompts enviados.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">4. Compartir información</h2>
              <p className="mb-2">
                No vendemos ni compartimos tu información personal con terceros con fines comerciales. Compartimos datos únicamente con:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Firebase (Google Cloud)</strong>: para autenticación, almacenamiento y notificaciones push</li>
                <li><strong>Ministerio de Educación de Chile (SIGE)</strong>: cuando el colegio exporta datos oficiales requeridos por normativa</li>
                <li><strong>Servicios de IA</strong>: únicamente para generación de contenido pedagógico, sin datos personales de alumnos</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">5. Seguridad de los datos</h2>
              <p className="mb-2">Implementamos medidas de seguridad técnicas y organizativas:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Autenticación segura con Firebase Authentication</li>
                <li>Reglas de acceso estrictas por rol en la base de datos</li>
                <li>Encriptación en tránsito (HTTPS/TLS)</li>
                <li>Acceso restringido a información sensible solo a personal autorizado</li>
                <li>Respaldo de información por al menos 5 años según Circular N°30</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">6. Derechos del usuario</h2>
              <p className="mb-2">Como usuario de la App, tienes derecho a:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos incorrectos</li>
                <li>Solicitar la eliminación de tu cuenta</li>
                <li>Retirar tu consentimiento para el tratamiento de datos</li>
              </ul>
              <p className="mt-3">
                Para ejercer estos derechos, contacta al administrador del colegio o escribe a: <a href="mailto:contacto@colegiostellamaris.cl" className="text-primary font-semibold hover:underline">contacto@colegiostellamaris.cl</a>
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">7. Menores de edad</h2>
              <p>
                La App es utilizada por menores de edad (alumnos) bajo el consentimiento y supervisión de sus apoderados y el establecimiento educacional. Los apoderados tienen acceso completo a la información de sus hijos a través de la App.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">8. Retención de datos</h2>
              <p>
                Los datos académicos se conservan por un mínimo de <strong>5 años</strong> según lo exigido por la Superintendencia de Educación para propósitos de fiscalización.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">9. Cambios en esta política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política. Los cambios serán notificados a través de la App y entrarán en vigencia al ser publicados.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mt-8 mb-3">10. Contacto</h2>
              <p className="mb-4">Para cualquier consulta sobre esta política de privacidad:</p>

              <div className="rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-5 space-y-1">
                <p className="font-bold text-ink">Complejo Educacional Stella Maris</p>
                <p className="text-sm">📍 Primera Transversal 10516, El Bosque, Santiago, Chile</p>
                <p className="text-sm">🌐 <a href="https://colegiostellamaris.cl" className="text-primary hover:underline">colegiostellamaris.cl</a></p>
                <p className="text-sm">📧 <a href="mailto:contacto@colegiostellamaris.cl" className="text-primary hover:underline">contacto@colegiostellamaris.cl</a></p>
              </div>

              <div className="rounded-2xl bg-accent/5 ring-1 ring-accent/15 p-5 mt-4 space-y-1">
                <p className="font-bold text-ink">Desarrollo técnico</p>
                <p className="text-sm">TIC-IA Soluciones de Inteligencia Artificial</p>
                <p className="text-sm">🌐 <a href="https://tic-ia.com" className="text-primary hover:underline">tic-ia.com</a></p>
                <p className="text-sm">📧 <a href="mailto:jpfigueroa@tic-ia.com" className="text-primary hover:underline">jpfigueroa@tic-ia.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
