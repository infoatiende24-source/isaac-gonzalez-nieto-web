'use client';

import { motion } from 'framer-motion';
import {
  Home,
  Shield,
  Lightbulb,
  Wrench,
  Building2,
  Factory,
  Settings,
  BarChart3,
  Wifi,
} from 'lucide-react';

export default function SolutionsSection() {
  const particulares = [
    { icon: Home, label: 'Viviendas', desc: 'Instalaciones completas para hogares modernos' },
    { icon: Wrench, label: 'Reformas', desc: 'Renovación integral de tu sistema eléctrico' },
    { icon: Wifi, label: 'Domótica', desc: 'Hogar inteligente controlado desde tu móvil' },
    { icon: Lightbulb, label: 'Iluminación', desc: 'Diseño de iluminación LED personalizada' },
    { icon: Shield, label: 'Averías', desc: 'Intervención urgente y resolución rápida' },
  ];

  const empresas = [
    { icon: Building2, label: 'Oficinas', desc: 'Instalaciones eléctricas para espacios de trabajo' },
    { icon: Factory, label: 'Industria', desc: 'Sistemas eléctricos de alta potencia' },
    { icon: Settings, label: 'Mantenimiento', desc: 'Planes preventivos para máxima operatividad' },
    { icon: Wifi, label: 'Automatización', desc: 'Control inteligente de tus instalaciones' },
    { icon: BarChart3, label: 'Eficiencia', desc: 'Optimización energética para reducir costes' },
  ];

  return (
    <section id="soluciones" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/3 blur-[120px]" />

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
            Para ti y tu negocio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Soluciones para </span>
            <span className="gradient-text">particulares</span>
            <span className="text-white"> y </span>
            <span className="gradient-text">empresas</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Cada proyecto es único. Adaptamos nuestras soluciones eléctricas y de automatización
            a las necesidades específicas de cada cliente.
          </p>
        </motion.div>

        {/* Two blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Particulares */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl glass electric-border hover:border-electric/30 transition-all duration-500 h-full">
              {/* Glow */}
              <div className="absolute -top-1 -left-1 w-32 h-32 rounded-full bg-electric/10 blur-[60px] group-hover:bg-electric/15 transition-all" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Particulares</h3>
                    <p className="text-sm text-gray-500">Tu hogar, tu tecnología</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {particulares.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/3 transition-all duration-300 group/item cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-electric/20 transition-colors">
                        <item.icon className="w-5 h-5 text-electric" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Empresas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl glass electric-border hover:border-electric/30 transition-all duration-500 h-full">
              {/* Glow */}
              <div className="absolute -top-1 -right-1 w-32 h-32 rounded-full bg-electric/10 blur-[60px] group-hover:bg-electric/15 transition-all" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Empresas</h3>
                    <p className="text-sm text-gray-500">Tu negocio, nuestra especialidad</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {empresas.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/3 transition-all duration-300 group/item cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-electric/20 transition-colors">
                        <item.icon className="w-5 h-5 text-electric" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
