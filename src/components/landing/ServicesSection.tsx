'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Zap,
  AlertTriangle,
  Home,
  Lightbulb,
  FileCheck,
  Cpu,
  Car,
  Building2,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Instalaciones eléctricas',
    description: 'Proyectos completos de instalación eléctrica para viviendas, oficinas y locales comerciales con los más altos estándares de calidad y seguridad.',
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    icon: AlertTriangle,
    title: 'Averías urgentes',
    description: 'Respuesta inmediata ante emergencias eléctricas. Diagnóstico rápido y reparación profesional las 24 horas para restaurar tu suministro.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Home,
    title: 'Reformas eléctricas',
    description: 'Renovación integral de instalaciones antiguas. Adaptamos tu hogar o negocio a las normativas actuales con tecnología moderna.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Lightbulb,
    title: 'Iluminación LED',
    description: 'Diseño e instalación de sistemas de iluminación LED de alto rendimiento. Ahorra hasta un 80% en consumo energético.',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    icon: FileCheck,
    title: 'Boletines eléctricos',
    description: 'Certificación oficial de tus instalaciones. Trámites completos para obtener el certificado de instalación eléctrica al día.',
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    icon: Cpu,
    title: 'Automatización inteligente',
    description: 'Domótica y automatización avanzada. Controla luces, climatización, persianas y seguridad desde tu smartphone.',
    gradient: 'from-cyan-400 to-sky-500',
  },
  {
    icon: Car,
    title: 'Cargadores para coche eléctrico',
    description: 'Instalación de puntos de recarga para vehículos eléctricos. Soluciones domésticas y comerciales con carga rápida.',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Building2,
    title: 'Soluciones para empresas',
    description: 'Instalaciones industriales y comerciales a medida. Mantenimiento preventivo, eficiencia energética y sistemas de emergencia.',
    gradient: 'from-blue-400 to-indigo-500',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050b18] to-[#030712]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-electric border border-electric/20 mb-6"
          >
            Nuestros servicios
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Soluciones eléctricas </span>
            <span className="gradient-text">de élite</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios eléctricos premium, desde instalaciones
            básicas hasta sistemas de automatización inteligente de última generación.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="relative h-full p-6 sm:p-7 rounded-2xl glass electric-border hover:border-electric/30 transition-all duration-500 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-electric/0 group-hover:from-electric/5 group-hover:to-transparent transition-all duration-500" />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-electric transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-2 text-electric/0 group-hover:text-electric transition-all duration-300">
                  <span className="text-sm font-medium">Saber más</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
