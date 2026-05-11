'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Search, FileText, Wrench, PhoneCall } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Contacto',
    desc: 'Ponte en contacto con nosotros por WhatsApp, teléfono o formulario. Te responderemos en menos de 1 hora para conocer tu proyecto y evaluar tus necesidades con detalle.',
  },
  {
    icon: Search,
    num: '02',
    title: 'Diagnóstico',
    desc: 'Realizamos una visita técnica profesional para analizar la situación actual de tu instalación, identificar puntos de mejora y evaluar todas las opciones disponibles.',
  },
  {
    icon: FileText,
    num: '03',
    title: 'Presupuesto',
    desc: 'Recibirás un presupuesto detallado y transparente sin compromiso. Incluye materiales, mano de obra, plazos y todas las condiciones del proyecto sin sorpresas.',
  },
  {
    icon: Wrench,
    num: '04',
    title: 'Instalación',
    desc: 'Nuestro equipo ejecuta el proyecto con precisión, limpieza y cumpliendo todos los plazos establecidos. Mantenemos una comunicación constante durante todo el proceso.',
  },
  {
    icon: PhoneCall,
    num: '05',
    title: 'Seguimiento',
    desc: 'Después de la instalación, realizamos un seguimiento completo para asegurar tu satisfacción. Ofrecemos soporte técnico continuo y mantenimiento preventivo.',
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-electric border border-electric/20 mb-6">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Cómo </span>
            <span className="gradient-text">trabajamos</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Un proceso estructurado, transparente y eficiente. Desde el primer
            contacto hasta el seguimiento post-instalación.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric/30 via-electric/10 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group"
              >
                <div className="flex gap-5 sm:gap-8">
                  {/* Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full glass border border-electric/20 flex items-center justify-center group-hover:border-electric/50 group-hover:shadow-lg group-hover:shadow-electric/10 transition-all duration-500">
                      <span className="text-sm sm:text-lg font-bold gradient-text">{step.num}</span>
                    </div>
                    {/* Connector dot (mobile) */}
                    {i < steps.length - 1 && (
                      <div className="sm:hidden absolute left-1/2 -translate-x-1/2 top-full w-px h-6 bg-electric/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-6 sm:pb-2">
                    <div className="p-5 sm:p-7 rounded-2xl glass electric-border hover:border-electric/25 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-5 h-5 text-electric" />
                        <h3 className="text-lg sm:text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
