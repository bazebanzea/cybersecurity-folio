import React from 'react';
import { Shield, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Shield className="w-8 h-8 text-white" />
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tighter">Henoc Bazebanzea Lipekene</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">Cybersecurity Expert</span>
            </div>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} HB Lipekene. Tous droits réservés.
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-700 uppercase tracking-[0.2em]">
            Protégé par des protocoles de chiffrement avancés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;