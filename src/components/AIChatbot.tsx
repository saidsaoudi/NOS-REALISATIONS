import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, Bot, User } from 'lucide-react';
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

    setTimeout(() => {
      let botResponse = "Je n'ai pas bien compris votre demande. Pourriez-vous préciser si vous cherchez un projet spécifique ou un domaine particulier (Hôtel, E-commerce, Vitrine, Solutions) ?";
      const allItems = Object.values(projects).flatMap(cat => cat.items);
      const foundProject = allItems.find(p => currentInput.includes(p.name.toLowerCase()));
      
      if (foundProject) {
        botResponse = `Le projet **${foundProject.name}** est une de nos réalisations majeures. ${foundProject.details} Vous pouvez le consulter ici : ${foundProject.url}`;
      } else if (currentInput.includes('hotel') || currentInput.includes('tourisme')) {
        botResponse = "Nous avons une grande expertise dans l'hôtellerie. Nos projets incluent Park Suites Hotel, Bab Errih, Sahara Hotel Agadir. Quel projet vous intéresse ?";
      } else if (currentInput.includes('e-commerce') || currentInput.includes('boutique') || currentInput.includes('shop')) {
        botResponse = "Pour le E-commerce, nous avons développé 55 Pens et Merinos Shop, optimisés pour la conversion.";
      } else if (currentInput.includes('solution') || currentInput.includes('app') || currentInput.includes('gestion')) {
        botResponse = "Nos solutions sur-mesure comme Geo Sales ou Onessta Livraison permettent d'automatiser les processus métiers.";
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
            className="absolute bottom-24 left-0 w-[400px] max-w-[90vw] h-[600px] max-h-[75vh] flex flex-col bg-white border-8 border-black rounded-3xl overflow-hidden shadow-[15px_15px_0_#facc15] z-50"
          >
            {/* Header */}
            <div className="p-6 border-b-4 border-black flex items-center justify-between bg-yellow-400">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-black text-yellow-400 border-2 border-black">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-black uppercase text-xl">IA ASSISTANT</h3>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 border-2 border-black rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white scrollbar-thin scrollbar-thumb-black">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[90%] ${m.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shrink-0 ${m.type === 'user' ? 'bg-black text-white' : 'bg-yellow-400 text-black'}`}>
                      {m.type === 'user' ? <User className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                    </div>
                    <div className={`p-4 font-bold border-4 border-black ${m.type === 'user' ? 'bg-black text-white rounded-2xl rounded-tr-none' : 'bg-white text-black rounded-2xl rounded-tl-none shadow-[4px_4px_0_#000]'}`}>
                      <p className="text-sm leading-snug">{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t-4 border-black bg-yellow-400">
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez une question..."
                  className="w-full bg-white border-4 border-black rounded-xl py-3 px-5 text-sm font-black focus:outline-none shadow-[4px_4px_0_#000] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 border-4 border-black bg-black text-white rounded-xl shadow-[4px_4px_0_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  aria-label="Send"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ y: -5, x: -5, boxShadow: "10px 10px 0px #000" }}
        whileTap={{ scale: 0.95 }}
        className={`w-20 h-20 rounded-full border-4 border-black flex items-center justify-center shadow-[6px_6px_0_#000] transition-all relative ${isOpen ? 'bg-black text-white rotate-90' : 'bg-yellow-400 text-black'}`}
      >
        {isOpen ? <X className="w-10 h-10" /> : <Bot className="w-12 h-12" />}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-black flex items-center justify-center border-2 border-yellow-400">
               <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            </span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatbot;
