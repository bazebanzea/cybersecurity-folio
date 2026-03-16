import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Terminal, 
  Search, 
  AlertTriangle, 
  Network, 
  Lock, 
  Database, 
  Layout, 
  FileSearch, 
  BrainCircuit,
  Settings,
  Monitor,
  Activity,
  Scan
} from 'lucide-react';

const Skills = () => {
  const securitySkills = [
    { name: "Cybersecurity", icon: Shield },
    { name: "Intrusion Detection (IDS)", icon: Scan },
    { name: "Vulnerability Assessment", icon: Search },
    { name: "Incident Response", icon: AlertTriangle },
    { name: "Network Security", icon: Network },
    { name: "Threat Detection", icon: Lock },
    { name: "Risk Management", icon: Shield },
  ];

  const tools = [
    { name: "Python", icon: Terminal },
    { name: "Linux", icon: Layout },
    { name: "SQL", icon: Database },
    { name: "Wireshark", icon: Activity },
    { name: "Nmap", icon: Search },
    { name: "Kali Linux", icon: Settings },
    { name: "SIEM Concepts", icon: Monitor },
    { name: "Machine Learning", icon: BrainCircuit },
    { name: "Traffic Analysis", icon: Activity },
    { name: "Security Log Analysis", icon: FileSearch },
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white opacity-60 font-bold tracking-widest uppercase mb-4">Compétences</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Arsenal Technologique</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Maîtrise des protocoles de sécurité, des frameworks d'analyse de menaces et des technologies d'intelligence artificielle appliquées à la cybersécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Cyber Skills */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 border-l-4 border-white pl-4">Expertise Cyber</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securitySkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Tech */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 border-l-4 border-white/40 pl-4">Outils & IA</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-200 font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;