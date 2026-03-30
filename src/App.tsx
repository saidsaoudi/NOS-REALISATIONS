import { motion } from 'motion/react';
import { ChevronRight, Sparkles } from 'lucide-react';
import Particles from './components/Particles';
import GoToTop from './components/GoToTop';
import AIChatbot from './components/AIChatbot';
import { projects } from './data/projects';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <div className="noise-overlay"></div>
      <Particles />
      <AIChatbot />
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden ai-bg">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium tracking-widest uppercase text-gray-300">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tighter leading-tight">
              NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">RÉALISATIONS</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap text-lg md:text-2xl text-gray-400 font-light tracking-wide">
              <a href="#ecommerce" className="hover:text-white transition-colors cursor-pointer">E-commerce</a>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              <a href="#hotels" className="hover:text-white transition-colors cursor-pointer">Hotels</a>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              <a href="#vitrines" className="hover:text-white transition-colors cursor-pointer">Vitrine</a>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              <a href="#solutions" className="hover:text-white transition-colors cursor-pointer">Solutions</a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
          />
        </motion.div>
      </div>

      {/* Projects Sections */}
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-40">
        {Object.entries(projects).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <motion.section 
              key={key}
              id={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-16 md:mb-20 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">{category.title}</h2>
                </div>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                    className="group h-full"
                  >
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card rounded-[2rem] overflow-hidden h-full flex flex-col block cursor-pointer"
                    >
                      <div className="relative h-56 md:h-72 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow justify-between relative z-20 -mt-12">
                        <h3 className="text-2xl font-display font-semibold mb-6 group-hover:text-blue-400 transition-colors drop-shadow-md">
                          {item.name}
                        </h3>
                        <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors mt-auto uppercase tracking-wider">
                          <span>{item.action}</span>
                          <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-20 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nos Réalisations. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
            <span className="hover:text-white transition-colors cursor-pointer">Mentions légales</span>
          </div>
        </div>
      </footer>
      <GoToTop />
    </div>
  );
}
