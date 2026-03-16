import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, MapPin, Mail, Phone, Lock, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae786309-58c1-4b9a-9d09-8aabef61e09f/cyber-hero-bg-2458a394-1773671086578.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Animated Scan Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase"
          >
            <Lock className="w-3 h-3" />
            <span>Statut : Sécurisé</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Henoc Bazebanzea <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Lipekene</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed"
          >
            Cybersecurity Specialist | Intrusion Detection | <br className="hidden md:block" />
            IoT Security | Machine Learning
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center mb-12"
          >
            <div className="flex items-center space-x-2 text-slate-400">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Kinshasa, RDC</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>henockipekene@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>+243 813353861</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25"
            >
              <span>Me Contacter</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#projects" 
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg transition-all"
            >
              <Terminal className="w-5 h-5" />
              <span>Voir mes projets</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;