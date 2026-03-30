import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check, Grid, Circle, Square, Star, HelpCircle, ShoppingCart, ShoppingBag, CreditCard, Layout, Zap, Cpu, Settings, Package, Hotel, MapPin, Briefcase, Utensils, Compass, Globe, Tag, Stars, Building, Users, Monitor, Terminal, Layers } from 'lucide-react';
import Particles from './components/Particles';
import GoToTop from './components/GoToTop';
import AIChatbot from './components/AIChatbot';
import { projects } from './data/projects';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-yellow-400/50 overflow-x-hidden w-full relative pt-10 md:pt-20">
      
      {/* Header-like Blobs */}
      <div className="absolute top-0 right-0 pointer-events-none z-0">
         <motion.div 
           initial={{ x: 100, y: -100 }} 
           animate={{ x: 20, y: -20 }} 
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-yellow-400 border-4 md:border-8 border-black rounded-full" 
         />
      </div>

      <div className="absolute top-[-5%] left-[-10%] pointer-events-none z-0">
          <motion.div
             animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
             transition={{ repeat: Infinity, duration: 8 }}
             className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] border-4 md:border-8 border-black rounded-full bg-white opacity-40 shadow-inner"
          />
      </div>
      
      {/* Decorative Doodles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40 md:opacity-100">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="doodle top-[15%] left-[5%]"
        >
          <Grid className="w-8 md:w-16 h-8 md:h-16 text-gray-200" />
        </motion.div>
        
        <motion.div 
          animate={{ x: [0, 20, 0], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="doodle top-[25%] right-[15%]"
        >
          <Circle className="w-8 md:w-12 h-8 md:h-12 text-yellow-500 fill-yellow-500/10 border-2 border-black" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [45, 60, 45] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="doodle top-[60%] left-[8%]"
        >
          <Square className="w-6 md:w-10 h-6 md:h-10 text-black border-2 md:border-4 border-black" />
        </motion.div>
        
        <motion.div 
           animate={{ rotate: [0, 360] }}
           transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
           className="doodle bottom-[10%] left-[5%] opacity-20"
        >
           <div className="w-20 md:w-40 h-20 md:h-40 border-4 border-dashed border-black rounded-full" />
        </motion.div>

        {/* User reference icons */}
        <motion.div 
           animate={{ rotate: [0, 10, -10, 0] }}
           transition={{ repeat: Infinity, duration: 4 }}
           className="doodle top-[30%] left-[30%] hidden md:block"
        >
           <svg className="w-16 h-16 text-black opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
              <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
              <path d="M2 12h20" />
           </svg>
        </motion.div>
      </div>

      <AIChatbot />
      
      {/* Hero Section */}
      <section className="relative px-4 md:px-12 lg:px-24 mb-24 md:mb-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-center lg:text-left">
          
          <div className="flex-1 z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-2 md:mb-4 flex justify-center lg:justify-start">
                <span className="title-block text-3xl sm:text-4xl md:text-6xl lg:text-8xl px-4 md:px-10">WEB</span>
              </div>
              <div className="mb-8 md:mb-12 flex justify-center lg:justify-start">
                <span className="title-block yellow text-3xl sm:text-4xl md:text-6xl lg:text-8xl px-4 md:px-10">SOLUTIONS</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-8 mt-6 md:mt-10 mb-8 md:mb-12 flex-wrap">
                <div className="tag-badge text-[10px] md:text-sm">
                  <Check className="w-3 h-3 md:w-4 md:h-4 bg-black text-yellow-400 rounded-sm" strokeWidth={3} />
                  USER EXPERIENCE
                </div>
                <div className="tag-badge text-[10px] md:text-sm">
                   <Check className="w-3 h-3 md:w-4 md:h-4 bg-black text-yellow-400 rounded-sm" strokeWidth={3} />
                  USER INTERFACE
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 flex-wrap mt-8">
                 {Object.entries(projects).map(([key, category]) => (
                   <a 
                    key={key} 
                    href={`#${category.id}`} 
                    className="text-[10px] md:text-xs font-black uppercase tracking-widest border-b-2 md:border-b-4 border-yellow-400 hover:border-black transition-all"
                   >
                     {category.title.split(' ')[0]}
                   </a>
                 ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative z-20 w-full max-w-[450px] lg:max-w-none mx-auto">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="hero-blob-container mx-auto"
             >
                <div className="hero-blob shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Creative workspace"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-yellow-400/10 hover:bg-transparent transition-all pointer-events-none"></div>
                </div>
                <div className="hero-blob-shadow transform translate-x-4 translate-y-4"></div>
                
                <div className="absolute -top-6 md:-top-10 -right-6 md:-right-10 animate-bounce">
                  <Star className="w-10 md:w-16 h-10 md:h-16 text-yellow-500 fill-yellow-500" />
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 space-y-32 md:space-y-60 relative z-10">
        {Object.entries(projects).map(([key, category]) => {
          const Icon = category.icon;
          const backgroundIcons = {
            hotels: [<Hotel key="1" />, <MapPin key="2" />, <Star key="3" />, <Utensils key="4" />, <Compass key="5" />, <Globe key="6" />],
            ecommerce: [<ShoppingCart key="1" />, <ShoppingBag key="2" />, <CreditCard key="3" />, <Package key="4" />, <Tag key="5" />, <Stars key="6" />],
            vitrines: [<Briefcase key="1" />, <Layout key="2" />, <Star key="3" />, <Building key="4" />, <Users key="5" />, <Monitor key="6" />],
            solutions: [<Cpu key="1" />, <Zap key="2" />, <Settings key="3" />, <Package key="4" />, <Terminal key="5" />, <Layers key="6" />]
          }[key as keyof typeof projects] || [];

          return (
            <motion.section 
              key={key}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Category Background Icons */}
              <div className="absolute inset-0 pointer-events-none opacity-10 md:opacity-15 z-0">
                 {backgroundIcons.map((icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, i % 2 === 0 ? 30 : -30, 0],
                        rotate: [0, i * 60, 0]
                      }}
                      transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
                      className="absolute hidden sm:block"
                      style={{
                        top: `${10 + (i * 15) % 80}%`,
                        left: `${(i * 18) % 90}%`
                      }}
                    >
                      {React.cloneElement(icon as React.ReactElement, { className: "w-16 md:w-24 h-16 md:h-24 text-black" })}
                    </motion.div>
                 ))}
              </div>

              <div className="mb-12 md:mb-20 flex flex-col items-center lg:items-start relative z-10">
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8">
                  <div className="w-14 md:w-20 h-14 md:h-20 rounded-full bg-yellow-400 border-2 md:border-4 border-black flex items-center justify-center -rotate-6 shadow-solid">
                    <Icon className="w-7 md:w-10 h-7 md:h-10 text-black" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">{category.title}</h2>
                </div>
                <p className="text-base md:text-xl max-w-2xl font-bold leading-tight uppercase bg-white/80 backdrop-blur-sm px-2 text-center lg:text-left">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-new group flex flex-col h-full relative p-4 md:p-6"
                    >
                      <div className="h-48 md:h-64 mb-4 md:mb-6 border-2 md:border-4 border-black rounded-xl overflow-hidden relative">
                         <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                         <div className="absolute top-2 md:top-4 left-2 md:left-4">
                           <span className="tag-badge text-[8px] md:text-[10px] py-1 px-2 md:px-3">PROJECT</span>
                         </div>
                         {/* AI Scanning Line */}
                         <div className="ai-scan-line"></div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 pl-[10px] uppercase leading-none group-hover:text-yellow-500 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-[10px] md:text-sm font-bold uppercase text-gray-400 line-clamp-3 mb-6 md:mb-8 px-1">
                          {item.details || category.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest bg-yellow-400 px-2 md:px-3 py-1 border-2 border-black inline-block shadow-[2px_2px_0_#000]">
                           {item.action}
                        </span>
                        <div className="w-8 md:w-12 h-8 md:h-12 bg-black rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                           <ChevronRight className="w-4 md:w-6 h-4 md:h-6 text-yellow-400" />
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

      <footer className="relative border-t-4 md:border-t-8 border-black py-20 md:py-40 bg-yellow-400 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <motion.div 
             animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1] }} 
             transition={{ repeat: Infinity, duration: 10 }}
             className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-48 md:w-96 h-48 md:h-96 bg-white border-4 md:border-8 border-black rounded-full" 
           />
           <div className="absolute top-5 right-5"><Star className="w-8 md:w-12 h-8 md:h-12 text-black fill-black" /></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-black">
          <div className="text-2xl md:text-4xl font-black italic uppercase text-center md:text-left">NOS RÉALISATIONS</div>
          <div className="flex flex-col items-center md:items-end gap-2 font-black uppercase text-[10px] md:text-sm">
             <p>© {new Date().getFullYear()} - ALL RIGHTS RESERVED.</p>
             <div className="flex items-center gap-6 underline">
                <span>Contact</span>
                <span>Terms</span>
             </div>
          </div>
        </div>
      </footer>
      
      <GoToTop />
    </div>
  );
}
