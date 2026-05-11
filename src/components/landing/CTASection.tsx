'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#060d1c] to-[#030712]" />

      {/* Big glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-electric/8 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-electric border border-electric/20 mb-6">
            ¿Listo para empezar?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">¿Necesitas una solución eléctrica </span>
            <span className="gradient-text">realmente profesional?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-14">
            Atención rápida, instalaciones modernas y soluciones inteligentes para hogares
            y empresas. Cuéntanos tu proyecto y recibe una respuesta en menos de 1 hora.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.a
              href="https://wa.me/376338075?text=Hola%20%F0%9F%91%8B%20Gracias%20por%20contactar%20con%20Isaac%20Nieto%20Electricidad.%20%C2%BFC%C3%B3mo%20podemos%20ayudarte%3F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(56, 189, 248, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-electric-dark to-electric text-white font-semibold text-base sm:text-lg shadow-xl shadow-electric/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Business
            </motion.a>

            <motion.a
              href="https://wa.me/376338075?text=Hola%20%F0%9F%91%8B%20Necesito%20solicitar%20un%20presupuesto%20para%20un%20proyecto%20eléctrico."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-electric/30 text-electric font-semibold text-base sm:text-lg hover:bg-electric/10 transition-all duration-300 text-center"
            >
              Solicitar presupuesto
            </motion.a>

            <motion.a
              href="tel:+376338075"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold text-base sm:text-lg hover:bg-white/5 hover:text-white transition-all duration-300 text-center"
            >
              Llamar ahora
            </motion.a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              +376 338 075
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Andorra
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Respuesta en menos de 1h
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
