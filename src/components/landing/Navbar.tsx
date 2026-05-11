'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => scrollTo('#hero')}
            >
              <Image
                src="/logo.png"
                alt="Isaac González Nieto Electricidad"
                width={120}
                height={120}
                className="h-9 sm:h-11 w-auto rounded-lg"
                priority
              />
            </motion.div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-electric transition-colors duration-300 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="https://wa.me/376338075?text=Hola%20%F0%9F%91%8B%20Gracias%20por%20contactar%20con%20Isaac%20Nieto%20Electricidad.%20%C2%BFC%C3%B3mo%20podemos%20ayudarte%3F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-electric-dark to-electric text-white shadow-lg shadow-electric/20 hover:shadow-electric/40 transition-all duration-300"
              >
                Contactar ahora
              </motion.a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-electric rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-electric rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-electric rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-[#0a0f1e]/95 backdrop-blur-xl border-l border-electric/10"
            >
              <div className="flex flex-col pt-24 px-6 gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-4 py-3 text-lg font-medium text-gray-300 hover:text-electric transition-colors rounded-xl hover:bg-white/5"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 px-4"
                >
                  <a
                    href="https://wa.me/376338075?text=Hola%20%F0%9F%91%8B%20Gracias%20por%20contactar%20con%20Isaac%20Nieto%20Electricidad.%20%C2%BFC%C3%B3mo%20podemos%20ayudarte%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center font-semibold rounded-xl bg-gradient-to-r from-electric-dark to-electric text-white"
                  >
                    Contactar ahora
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
