import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/projects';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Bonjour ! Je suis l'assistant IA de 'Nos Réalisations'. Comment puis-je vous aider aujourd'hui ? Je peux vous parler de nos projets en Hôtellerie, E-commerce, ou nos Solutions sur-mesure."
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input.toLowerCase();
    setInput('');

    // AI Mock Logic
    setTimeout(() => {
      let botResponse = "Je n'ai pas bien compris votre demande. Pourriez-vous préciser si vous cherchez un projet spécifique ou un domaine particulier (Hôtel, E-commerce, Vitrine, Solutions) ?";
      
      const allItems = Object.values(projects).flatMap(cat => cat.items);
      const foundProject = allItems.find(p => currentInput.includes(p.name.toLowerCase()));
      
      if (foundProject) {
        botResponse = `Le projet **${foundProject.name}** est une de nos réalisations majeures. ${foundProject.details} Vous pouvez le consulter ici : ${foundProject.url}`;
      } else if (currentInput.includes('hotel') || currentInput.includes('tourisme')) {
        botResponse = "Nous avons une grande expertise dans l'hôtellerie. Nos projets incluent Park Suites Hotel, Bab Errih, Sahara Hotel Agadir, et bien d'autres. Quel projet vous intéresse ?";
      } else if (currentInput.includes('e-commerce') || currentInput.includes('boutique') || currentInput.includes('shop')) {
        botResponse = "Pour le E-commerce, nous avons développé des plateformes robustes comme 55 Pens et Merinos Shop, optimisées pour la conversion.";
      } else if (currentInput.includes('solution') || currentInput.includes('app') || currentInput.includes('gestion')) {
        botResponse = "Nos solutions sur-mesure comme Geo Sales ou Onessta Livraison permettent aux entreprises d'automatiser leurs processus métiers complexes.";
      } else if (currentInput.includes('vitrine') || currentInput.includes('corporate')) {
        botResponse = "Nos sites vitrines (Solar Power, Polytel, Mind Bridge) sont conçus pour offrir une image de marque forte et professionnelle.";
      } else if (currentInput.includes('prix') || currentInput.includes('devis') || currentInput.includes('combien')) {
        botResponse = "Chaque projet est unique. Je vous invite à nous contacter via la section contact pour obtenir un devis personnalisé selon vos besoins.";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), type: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-10 left-10 z-[10001]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="absolute bottom-20 left-0 w-[400px] max-w-[90vw] h-[600px] max-h-[80vh] flex flex-col glass-card bg-black/80 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.2)] border-purple-500/20"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-purple-600/10 to-blue-600/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-medium">Assistant IA Portfolio</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">En ligne</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-xl transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${m.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.type === 'user' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                      {m.type === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.type === 'user' ? 'bg-blue-500/80 text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'}`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10 bg-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez une question sur nos projets..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-5 pr-14 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 p-2.5 rounded-xl bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/20 transition-all active:scale-95"
                  aria-label="Envoyer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center text-gray-500 mt-4 tracking-tight">IA Portfolio v1.0 - Entraînée sur nos réalisations </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-5 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all ${isOpen ? 'bg-white/10 text-white rotate-90' : 'bg-purple-600 text-white border border-white/20'}`}
      >
        {isOpen ? <X className="w-8 h-8 text-white" /> : <Bot className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatbot;
