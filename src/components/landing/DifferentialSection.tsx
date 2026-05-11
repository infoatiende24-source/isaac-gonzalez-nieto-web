'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, Brain, Network, TrendingUp, ShieldCheck } from 'lucide-react';

const differentiators = [
  {
    icon: Zap,
    title: 'Experiencia técnica avanzada',
    desc: 'Más de una década de experiencia en instalaciones eléctricas complejas, desde viviendas unifamiliares hasta grandes infraestructuras industriales. Cada proyecto refleja un dominio técnico profundo que garantiza resultados excepcionales.',
  },
  {
    icon: Clock,
    title: 'Rapidez sin comprometer calidad',
    desc: 'Respuesta inmediata y ejecución eficiente. Utilizamos metodologías optimizadas que reducen tiempos de intervención sin sacrificar la calidad de los materiales ni la precisión de cada conexión.',
  },
  {
    icon: Brain,
    title: 'Automatización inteligente',
    desc: 'Integramos sistemas domóticos y de automatización que transforman espacios convencionales en entornos inteligentes. Control total desde cualquier dispositivo con interfaces intuitivas.',
  },
  {
    icon: Network,
    title: 'Organización impecable',
    desc: 'Cada proyecto sigue un proceso estructurado con planificación detallada, documentación completa y comunicación constante. Sin sorpresas, sin retrasos innecesarios.',
  },
  {
    icon: TrendingUp,
    title: 'Eficiencia energética real',
    desc: 'No solo instalamos, optimizamos. Analizamos tu consumo actual y proponemos soluciones que reducen tu factura energética hasta un 60% manteniendo el máximo confort.',
  },
  {
    icon: ShieldCheck,
    title: 'Tecnología de vanguardia',
    desc: 'Trabajamos con las últimas tecnologías del sector: materiales premium, equipos de marcas líderes y sistemas de control que marcan la diferencia en durabilidad y rendimiento.',
  },
];

export default function DifferentialSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#060d1c] to-[#030712]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-electric border border-electric/20 mb-6">
            Nuestra diferencia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Mucho más que </span>
            <span className="gradient-text">electricidad.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Isaac González Nieto combina experiencia técnica, innovación tecnológica y un enfoque
            orientado a resultados para ofrecer un servicio que va mucho más allá de lo convencional.
          </p>
        </motion.div>

        {/* Visual dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-20"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 sm:p-8 electric-border overflow-hidden">
              {/* HUD Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-electric/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-electric animate-pulse" />
                  <span className="text-sm font-mono text-electric">SMART ENERGY DASHBOARD</span>
                </div>
                <span className="text-xs text-gray-600">LIVE</span>
              </div>
              {/* Dashboard grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Consumo Actual', value: '2.4 kW', change: '-23%', positive: true },
                  { label: 'Paneles Activos', value: '12/12', change: '100%', positive: true },
                  { label: 'Ahorro Mensual', value: '€180', change: '+15%', positive: true },
                  { label: 'Eficiencia', value: '94.2%', change: '+3.1%', positive: true },
                ].map((metric) => (
                  <div key={metric.label} className="p-3 sm:p-4 rounded-xl bg-electric/5 border border-electric/10">
                    <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                    <div className="text-lg sm:text-xl font-bold text-white">{metric.value}</div>
                    <div className={`text-xs mt-1 ${metric.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>
              {/* Fake energy bars */}
              <div className="mt-6 space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Energía Solar</span>
                    <span className="text-electric">78%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-electric/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '78%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-electric-dark to-electric"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Consumo Optimizado</span>
                    <span className="text-electric">92%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-electric/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Differentiators grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass electric-border hover:border-electric/30 transition-all duration-500">
                <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric/20 transition-colors">
                  <item.icon className="w-5 h-5 text-electric" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
