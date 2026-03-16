import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="education" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white opacity-60 font-bold tracking-widest uppercase mb-4">Formation</h2>
            <h3 className="text-3xl font-bold text-white mb-10">Parcours Académique</h3>
            
            <div className="relative border-l-2 border-white/20 pl-8 ml-4 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-black"></div>
                <div className="flex items-center space-x-2 text-white/70 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-bold">2021 - Présent</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Licence – Sciences Informatiques et Mathématiques</h4>
                <p className="text-slate-400 mb-4">Université de Kinshasa (UNIKIN)</p>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-slate-300 text-sm">
                  Formation approfondie en algorithmique, structures de données, mathématiques appliquées et fondements des systèmes informatiques sécurisés.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white opacity-60 font-bold tracking-widest uppercase mb-4">Certification</h2>
            <h3 className="text-3xl font-bold text-white mb-10">Expertise Reconnue</h3>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/10 transition-colors">
                <Award className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Google Cybersecurity Professional</h4>
                </div>
                
                <p className="text-slate-300 mb-6">Certification professionnelle délivrée par Google couvrant les huit domaines essentiels de la cybersécurité moderne.</p>
                
                <div className="space-y-3">
                  <p className="text-sm font-bold text-white opacity-70 uppercase tracking-widest mb-2">Compétences acquises :</p>
                  <div className="grid grid-cols-2 gap-y-2">
                    {[
                      "Security Risk Management",
                      "Network Security",
                      "Threat Detection",
                      "Incident Response",
                      "Linux & SQL",
                      "Python Automation"
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2 text-xs text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Identifiant : GOOGLE-CYBER-2024</span>
                  <button className="flex items-center space-x-2 text-white hover:text-slate-300 text-sm font-bold transition-colors">
                    <span>Vérifier</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;