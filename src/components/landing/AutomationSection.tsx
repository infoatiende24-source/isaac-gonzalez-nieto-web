'use client';

import { motion } from 'framer-motion';
import { Cpu, Gauge, BarChart3, Wifi, Lightbulb, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Soluciones inteligentes integradas',
    desc: 'Implementamos ecosistemas tecnológicos que interconectan todos los sistemas eléctricos de tu propiedad. Desde la iluminación hasta la climatización, todo funciona en armonía con algoritmos de optimización que aprenden de tus hábitos para anticiparse a tus necesidades.',
  },
  {
    icon: Gauge,
    title: 'Automatización empresarial',
    desc: 'Transformamos operaciones manuales en procesos automatizados que incrementan la productividad de tu negocio. Sistemas de control de acceso, gestión de horarios de iluminación y climatización por zonas, monitorización de consumos en tiempo real y alertas automáticas ante anomalías.',
  },
  {
    icon: BarChart3,
    title: 'Optimización de procesos',
    desc: 'Analizamos cada aspecto de tu instalación para identificar ineficiencias ocultas. Nuestras auditorías energéticas detalladas revelan oportunidades de ahorro que pasan desapercibidas y proponemos soluciones con ROI demostrado.',
  },
  {
    icon: Wifi,
    title: 'Integración tecnológica total',
    desc: 'Conectamos tu infraestructura eléctrica con plataformas de IoT, asistentes de voz y aplicaciones móviles personalizadas. Compatible con los principales ecosistemas del mercado para una experiencia de usuario fluida e intuitiva.',
  },
  {
    icon: Lightbulb,
    title: 'Eficiencia energética avanzada',
    desc: 'Diseñamos instalaciones que minimizan el consumo y maximizan el rendimiento. Paneles solares, sistemas de almacenamiento, gestión de picos de demanda y tarifas inteligentes para reducir tu factura energética de forma significativa.',
  },
];

export default function AutomationSection() {
  return (
    <section id="tecnologia" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Big background glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-electric/4 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/3 blur-[120px]" />

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
            Innovación
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Electricidad y </span>
            <span className="gradient-text">automatización inteligente</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Llevamos la electricidad al siguiente nivel. Nuestras soluciones inteligentes
            transforman espacios convencionales en entornos tecnológicamente avanzados
            que optimizan confort, seguridad y eficiencia.
          </p>
        </motion.div>

        {/* HUD visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-20"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-3xl border border-electric/5 animate-rotate-slow" />

            <div className="glass-strong rounded-3xl p-6 sm:p-10 electric-border overflow-hidden">
              {/* Top HUD */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 tracking-wider">SYSTEM ONLINE</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-600">ISAAC NIETO SMART v3.0</span>
                  <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                </div>
              </div>

              {/* HUD grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-electric/10 to-transparent border border-electric/10">
                  <div className="text-xs text-gray-500 mb-2 font-mono">AUTOMATION MODULES</div>
                  <div className="text-2xl font-bold text-white mb-1">24</div>
                  <div className="text-xs text-electric">Activos y funcionando</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/10">
                  <div className="text-xs text-gray-500 mb-2 font-mono">DAILY SAVINGS</div>
                  <div className="text-2xl font-bold text-white mb-1">€6.20</div>
                  <div className="text-xs text-purple-400">Promedio por cliente</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/10">
                  <div className="text-xs text-gray-500 mb-2 font-mono">UPTIME</div>
                  <div className="text-2xl font-bold text-white mb-1">99.97%</div>
                  <div className="text-xs text-emerald-400">Disponibilidad del sistema</div>
                </div>
              </div>

              {/* Connection lines visualization */}
              <div className="relative h-32 sm:h-40 rounded-xl bg-electric/3 border border-electric/10 overflow-hidden flex items-center justify-center">
                {/* Animated grid lines */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }} />

                {/* Central node */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-electric/20 border-2 border-electric flex items-center justify-center">
                    <Cpu className="w-7 h-7 text-electric" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-electric/10 blur-xl" />
                </motion.div>

                {/* Orbiting nodes */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: [deg, deg + 360] }}
                    transition={{ repeat: Infinity, duration: 20 + i * 2, ease: 'linear' }}
                    className="absolute"
                    style={{
                      width: '140%',
                      height: '140%',
                      left: '-20%',
                      top: '-20%',
                    }}
                  >
                    <div
                      className="absolute w-3 h-3 rounded-full bg-electric/60"
                      style={{
                        left: '50%',
                        top: 0,
                        transform: `translateX(-50%) translateY(20%) rotate(-${deg}deg)`,
                      }}
                    />
                  </motion.div>
                ))}

                {/* Connecting lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 200">
                  <motion.line x1="300" y1="100" x2="150" y2="50" stroke="rgba(56,189,248,0.2)" strokeWidth="1"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }} />
                  <motion.line x1="300" y1="100" x2="450" y2="50" stroke="rgba(56,189,248,0.2)" strokeWidth="1"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.7 }} />
                  <motion.line x1="300" y1="100" x2="100" y2="160" stroke="rgba(56,189,248,0.15)" strokeWidth="1"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.9 }} />
                  <motion.line x1="300" y1="100" x2="500" y2="160" stroke="rgba(56,189,248,0.15)" strokeWidth="1"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 1.1 }} />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features list */}
        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="group"
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl glass electric-border hover:border-electric/30 transition-all duration-500">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric/20 to-electric/5 border border-electric/20 flex items-center justify-center group-hover:from-electric/30 group-hover:to-electric/10 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-electric" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
                    <ArrowRight className="w-4 h-4 text-electric opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
