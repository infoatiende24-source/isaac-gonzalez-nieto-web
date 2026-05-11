'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]" />

      {/* Radial electric glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-electric/3 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent animate-scan-line" />
      </div>

      {/* Energy lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-electric/30 to-transparent animate-energy-line" />
      </div>
      <div className="absolute top-2/3 left-0 right-0 h-px overflow-hidden">
        <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-electric/20 to-transparent animate-energy-line" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12 inline-block"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-electric/10 blur-xl group-hover:bg-electric/20 transition-all duration-700" />
            <div className="relative glass rounded-2xl p-5 sm:p-8 electric-border">
              <Image
                src="/logo.png"
                alt="Isaac González Nieto Electricidad & Soluciones Inteligentes"
                width={320}
                height={320}
                className="w-48 sm:w-64 md:w-72 h-auto mx-auto drop-shadow-2xl rounded-xl"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm font-medium text-electric border border-electric/20">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            Tecnología avanzada al servicio de tu hogar y empresa
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 sm:mb-8"
        >
          <span className="text-white">Instalaciones eléctricas</span>
          <br />
          <span className="gradient-text">modernas e inteligentes</span>
          <br />
          <span className="text-white">para hogares y empresas.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed"
        >
          Tecnología, automatización y soluciones eléctricas premium para
          particulares y negocios que buscan{' '}
          <span className="text-electric font-medium">rapidez</span>,{' '}
          <span className="text-electric font-medium">profesionalidad</span> y{' '}
          <span className="text-electric font-medium">confianza</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(56, 189, 248, 0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#contacto')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-electric-dark to-electric text-white font-semibold text-base sm:text-lg shadow-xl shadow-electric/20 transition-all duration-300 cursor-pointer"
          >
            Solicitar presupuesto
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/376338075?text=Hola%20%F0%9F%91%8B%20Gracias%20por%20contactar%20con%20Isaac%20Nieto%20Electricidad.%20%C2%BFC%C3%B3mo%20podemos%20ayudarte%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-electric/30 text-electric font-semibold text-base sm:text-lg hover:bg-electric/10 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Business
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '500+', label: 'Proyectos realizados' },
            { value: '10+', label: 'Años de experiencia' },
            { value: '100%', label: 'Satisfacción' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 sm:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs tracking-widest uppercase">Descubre más</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
