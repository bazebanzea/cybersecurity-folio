import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white opacity-60 font-bold tracking-widest uppercase mb-4">Réalisations</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Projet Phare</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ae786309-58c1-4b9a-9d09-8aabef61e09f/ids-project-thumbnail-890a0d43-1773671085816.webp" 
                alt="IDS Project" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <BrainCircuit className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20 uppercase tracking-widest">
                  Featured Project
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs font-bold border border-white/10 uppercase tracking-widest">
                  Machine Learning
                </span>
              </div>

              <h4 className="text-3xl font-bold text-white mb-6">
                Intrusion Detection System using Machine Learning for IoT Networks
              </h4>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Conception d’un système intelligent capable de détecter automatiquement les activités malveillantes dans un réseau IoT. Le système utilise des techniques de machine learning pour analyser le trafic réseau et identifier les comportements anormaux.
              </p>

              <div className="space-y-4 mb-10">
                <h5 className="text-white font-bold flex items-center gap-2">
                  <ShieldCheck className="text-white opacity-60" />
                  Objectifs du projet :
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Améliorer la sécurité des réseaux IoT",
                    "Détecter les attaques en temps réel",
                    "Réduire les faux positifs",
                    "Optimiser l'analyse de trafic"
                  ].map((obj, i) => (
                    <li key={i} className="flex items-center space-x-2 text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-white opacity-70" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Cpu className="text-white opacity-60" />
                  Technologies utilisées :
                </h5>
                <div className="flex flex-wrap gap-3">
                  {["Python", "Machine Learning", "Network Traffic Analysis", "Cybersecurity Techniques"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/5 rounded-lg text-slate-200 border border-white/10 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;