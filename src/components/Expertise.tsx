import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Network, Cpu, Radar, Search, Activity } from 'lucide-react';

const Expertise = () => {
  const domains = [
    {
      title: "Cybersecurity",
      desc: "Protection globale des systèmes et des données contre les accès non autorisés et les cyberattaques.",
      icon: Shield
    },
    {
      title: "Network Security",
      desc: "Sécurisation des infrastructures réseau, filtrage de trafic et gestion des accès distants.",
      icon: Network
    },
    {
      title: "IoT Security",
      desc: "Sécurisation des dispositifs connectés et protection des écosystèmes Internet des Objets.",
      icon: Cpu
    },
    {
      title: "Intrusion Detection",
      desc: "Surveillance proactive et identification des comportements malveillants en temps réel.",
      icon: Radar
    },
    {
      title: "Vulnerability Analysis",
      desc: "Évaluation systématique des failles de sécurité et recommandations de remédiation.",
      icon: Search
    },
    {
      title: "Security Monitoring",
      desc: "Analyse continue des journaux et surveillance des indicateurs de compromission (IOC).",
      icon: Activity
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white opacity-60 font-bold tracking-widest uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Domaines de Spécialisation</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/40 transition-all hover:-translate-y-2"
            >
              <div className="p-4 rounded-xl inline-block mb-6 bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                <domain.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{domain.title}</h4>
              <p className="text-slate-400 leading-relaxed">{domain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;