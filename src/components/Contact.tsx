import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <Toaster position="top-right" theme="dark" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Contact</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Prêt à sécuriser votre avenir ?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Besoin d'un audit de sécurité, d'une expertise en IoT ou d'un conseil en cybersécurité ? Parlons de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                <p className="text-slate-400 mb-1">Contactez-moi directement par mail :</p>
                <a href="mailto:henockipekene@gmail.com" className="text-blue-400 font-medium hover:underline">henockipekene@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-emerald-600/10 rounded-2xl border border-emerald-500/20">
                <Phone className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Téléphone</h4>
                <p className="text-slate-400 mb-1">Disponible pour des échanges téléphoniques :</p>
                <a href="tel:+243813353861" className="text-emerald-400 font-medium hover:underline">+243 813353861</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Localisation</h4>
                <p className="text-slate-400">Kinshasa, République Démocratique du Congo</p>
                <p className="text-slate-500 text-sm">Disponible pour des interventions à distance et sur site.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Nom Complet</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Adresse Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-300 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Comment puis-je vous aider ?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-blue-500/20"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Envoyer le Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default Contact;