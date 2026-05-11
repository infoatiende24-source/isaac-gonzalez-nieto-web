'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marc Vives',
    role: 'Propietario de restaurante',
    text: 'Isaac transformó completamente la instalación eléctrica de nuestro restaurante. La automatización del sistema de iluminación y climatización nos ha permitido reducir la factura energética en un 45%. Un profesional de verdad.',
    rating: 5,
  },
  {
    name: 'Laura Sánchez',
    role: 'Propietaria de vivienda',
    text: 'Contratamos a Isaac para la reforma eléctrica completa de nuestra casa. La domótica que instaló es increíble, controlamos todo desde el móvil. La atención fue impecable de principio a fin.',
    rating: 5,
  },
  {
    name: 'Andreu Mas',
    role: 'Director de oficinas',
    text: 'Mantenemos un contrato de mantenimiento con Isaac González Nieto desde hace 3 años. La calidad del servicio es excepcional, responde siempre con rapidez y los resultados son perfectos. Totalmente recomendable.',
    rating: 5,
  },
  {
    name: 'Cristina Puig',
    role: 'Gerente de hotel',
    text: 'Instalamos cargadores de coche eléctrico en el parking del hotel. El trabajo fue limpio, rápido y con materiales de primera calidad. Nuestros clientes están encantados con la nueva infraestructura.',
    rating: 5,
  },
  {
    name: 'David Ribas',
    role: 'Propietario de local comercial',
    text: 'La iluminación LED que diseñó Isaac para nuestra tienda cambié por completo la experiencia de los clientes. Un diseño lumínico perfecto que destaca los productos y crea una atmósfera increíble.',
    rating: 5,
  },
  {
    name: 'Marta Soler',
    role: 'Propietaria de vivienda',
    text: 'Tuve una avería urgente un sábado por la noche y Isaac acudió en menos de una hora. Resolvió el problema con profesionalidad y rapidez. Desde entonces, es mi electricista de confianza sin ninguna duda.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050b18] to-[#030712]" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-electric border border-electric/20 mb-6">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Lo que dicen </span>
            <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            Cada proyecto es una oportunidad de superar expectativas.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 sm:p-7 rounded-2xl glass electric-border hover:border-electric/25 transition-all duration-500 relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-electric/10 absolute top-5 right-5" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-electric/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric/20 to-electric/5 border border-electric/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-electric">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
