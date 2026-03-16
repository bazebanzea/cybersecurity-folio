import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Zap, Binary, Activity, Radar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">À propos</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Expert en protection des écosystèmes numériques</h3>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Spécialiste en informatique formé en sciences informatiques et mathématiques à 
                <span className="text-white font-semibold"> l’Université de Kinshasa (UNIKIN)</span>.
              </p>
              <p>
                Titulaire du <span className="text-emerald-400 font-semibold italic">Google Cybersecurity Professional Certificate</span>, 
                je combine une expertise théorique solide avec une maîtrise pratique des outils de sécurité.
              </p>
              <p>
                Mes recherches portent sur la <span className="text-blue-400">détection d’intrusion dans l’Internet des objets (IoT)</span> en utilisant l’apprentissage automatique. Je m'attache à concevoir des systèmes capables d'identifier les menaces les plus sophistiquées en temps réel.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <ShieldCheck className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="text-white font-bold">Certifié Google</h4>
                <p className="text-sm text-slate-400">Cybersecurity Professional</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <Radar className="w-8 h-8 text-emerald-500 mb-3" />
                <h4 className="text-white font-bold">IoT Security</h4>
                <p className="text-sm text-slate-400">Recherche & Développement</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 p-8 rounded-3xl backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="text-blue-500" />
                Intérêts Majeurs
              </h4>
              <ul className="space-y-4">
                {[
                  "Protection des infrastructures numériques",
                  "Cybersécurité des réseaux complexes",
                  "Sécurité des systèmes IoT",
                  "Analyse avancée des menaces",
                  "Machine Learning appliqué à la sécurité"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;