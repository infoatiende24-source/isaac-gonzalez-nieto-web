'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  time: string;
}

const BOT_NUMBER = '376338075';
const INITIAL_MESSAGE: Message = {
  id: 1,
  text: 'Hola 👋 Gracias por contactar con Isaac González Nieto Electricidad & Soluciones Inteligentes. ¿Cómo podemos ayudarte?',
  sender: 'bot',
  time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
};

const QUICK_REPLIES = [
  'Necesito un presupuesto',
  'Tengo una avería urgente',
  'Información sobre domótica',
  'Cargador de coche eléctrico',
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const getTime = () => new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  const sendToWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${BOT_NUMBER}?text=${encoded}`, '_blank');
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: messages.length + 1,
      text: input.trim(),
      sender: 'user',
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setIsTyping(true);
    setTimeout(() => {
      const botReply: Message = {
        id: messages.length + 2,
        text: '¡Gracias por tu mensaje! En breve un miembro de nuestro equipo se pondrá en contacto contigo por WhatsApp. Si necesitas atención inmediata, puedes llamarnos al +376 338 075.',
        sender: 'bot',
        time: getTime(),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
      sendToWhatsApp(userMsg.text);
    }, 1500);
  };

  const handleQuickReply = (text: string) => {
    setInput('');
    const userMsg: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      const botReply: Message = {
        id: messages.length + 2,
        text: `Perfecto, hemos recibido tu solicitud: "${text}". Un especialista de Isaac González Nieto Electricidad te contactará en los próximos minutos. ¡Gracias por confiar en nosotros! ⚡`,
        sender: 'bot',
        time: getTime(),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
      sendToWhatsApp(text);
    }, 1500);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full overflow-hidden animate-gold-breathe cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="w-full h-full object-contain p-1"
        />
      </motion.button>

      {/* Chat interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Glass container */}
            <div className="h-full flex flex-col glass-strong border border-gold/20">
              {/* Header */}
              <div className="relative px-5 py-4 bg-gradient-to-r from-[#0a1a0a] to-[#0a1520] border-b border-gold/20">
                <div className="absolute inset-0 bg-gold/3" />
                <div className="relative flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center">
                      <Image src="/logo.png" alt="IGN" width={28} height={28} className="w-7 h-7 object-cover rounded-full" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0a1a0a]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Isaac González Nieto</h3>
                    <p className="text-xs text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      En línea
                    </p>
                  </div>
                  {/* Close */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                    aria-label="Cerrar chat"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[400px]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(212,168,67,0.2) transparent' }}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 text-white rounded-br-md'
                          : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-md'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-gold/60 text-right' : 'text-gray-600'}`}>
                        {msg.time}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick replies */}
              {messages.length <= 2 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((reply) => (
                    <motion.button
                      key={reply}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-gold/10 border border-gold/20 text-gold-light hover:bg-gold/20 transition-colors cursor-pointer"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-4 py-3 border-t border-gold/10">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/30 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20 flex items-center justify-center hover:from-gold/40 hover:to-gold/20 transition-all cursor-pointer"
                    aria-label="Enviar"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-light">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
