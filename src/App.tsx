import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check, Grid, Circle, Square, Star, HelpCircle, ShoppingCart, ShoppingBag, CreditCard, Layout, Zap, Cpu, Settings, Package, Hotel, MapPin, Briefcase, Utensils, Compass, Globe, Tag, Stars, Building, Users, Monitor, Terminal, Layers } from 'lucide-react';
import Particles from './components/Particles';
import GoToTop from './components/GoToTop';
import AIChatbot from './components/AIChatbot';
import { projects } from './data/projects';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-yellow-400/50 overflow-x-hidden pt-20">
      
      {/* Decorative Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="doodle top-[15%] left-[5%]"
        >
          <Grid className="w-16 h-16 text-gray-100" />
        </motion.div>
        
        <motion.div 
          animate={{ x: [0, 20, 0], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="doodle top-[25%] right-[15%]"
        >
          <Circle className="w-12 h-12 text-yellow-500 fill-yellow-500/20 border-2 border-black" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [45, 60, 45] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="doodle top-[60%] left-[8%]"
        >
          <Square className="w-10 h-10 text-black border-4 border-black" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="doodle top-[40%] right-[10%]"
        >
          <Star className="w-14 h-14 text-yellow-400 fill-yellow-400 border-2 border-black" />
        </motion.div>

        {/* New Doodles from image */}
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="doodle top-[10%] left-[45%]"
        >
          <HelpCircle className="w-12 h-12 text-gray-200" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="doodle top-[75%] right-[25%]"
        >
          <div className="w-10 h-10 rounded-full border-4 border-yellow-500 flex items-center justify-center">
             <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
        </motion.div>
        
        {/* Globe and Lock based on user image */}
        <motion.div 
           animate={{ rotate: [0, 10, -10, 0] }}
           transition={{ repeat: Infinity, duration: 4 }}
           className="doodle top-[30%] left-[30%]"
        >
           <svg className="w-16 h-16 text-black opacity-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
              <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
              <path d="M2 12h20" />
           </svg>
        </motion.div>
        
        <motion.div 
           animate={{ scale: [0.9, 1.1, 0.9] }}
           transition={{ repeat: Infinity, duration: 2 }}
           className="doodle top-[55%] left-[40%]"
        >
           <div className="p-3 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0_#000]">
              <div className="w-4 h-4 border-2 border-black rounded-t-full mb-1"></div>
              <div className="w-6 h-4 bg-black rounded-sm"></div>
           </div>
        </motion.div>

      </div>

      <AIChatbot />
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 mb-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="title-block">WEB</span>
              </div>
              <div className="mb-12">
                <span className="title-block yellow text-4xl lg:text-6xl px-4 py-2">SOLUTIONS</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 mb-12 flex-wrap">
                <div className="tag-badge">
                  <Check className="w-4 h-4 bg-black text-yellow-400 rounded-sm" strokeWidth={3} />
                  USER EXPERIENCE
                </div>
                <div className="tag-badge">
                   <Check className="w-4 h-4 bg-black text-yellow-400 rounded-sm" strokeWidth={3} />
                  USER INTERFACE
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap mt-8">
                 {Object.entries(projects).map(([key, category]) => (
                   <a 
                    key={key} 
                    href={`#${category.id}`} 
                    className="text-xs font-black uppercase tracking-widest border-b-4 border-yellow-400 hover:border-black transition-all"
                   >
                     {category.title.split(' ')[0]}
                   </a>
                 ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative z-20">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="hero-blob-container"
             >
                <div className="hero-blob shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Creative workspace"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-yellow-400/10 hover:bg-transparent transition-all pointer-events-none"></div>
                </div>
                <div className="hero-blob-shadow"></div>
                
                {/* Floating Elements around hero */}
                <div className="absolute -top-10 -right-10 animate-bounce"><Star className="w-16 h-16 text-yellow-400 fill-yellow-400" /></div>
                <div className="absolute -bottom-10 -left-10"><HelpCircle className="w-12 h-12 text-black" /></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-60 relative z-10">
        {Object.entries(projects).map(([key, category]) => {
          const Icon = category.icon;
          // Category-specific icons for background
          const backgroundIcons = {
            hotels: [
              <Hotel key="1" />, <MapPin key="2" />, <Star key="3" />, 
              <Utensils key="4" />, <Compass key="5" />, <Globe key="6" />
            ],
            ecommerce: [
              <ShoppingCart key="1" />, <ShoppingBag key="2" />, <CreditCard key="3" />,
              <Package key="4" />, <Tag key="5" />, <Stars key="6" />
            ],
            vitrines: [
              <Briefcase key="1" />, <Layout key="2" />, <Star key="3" />,
              <Building key="4" />, <Users key="5" />, <Monitor key="6" />
            ],
            solutions: [
              <Cpu key="1" />, <Zap key="2" />, <Settings key="3" />, 
              <Package key="4" />, <Terminal key="5" />, <Layers key="6" />
            ]
          }[key as keyof typeof projects] || [];

          return (
            <motion.section 
              key={key}
              id={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Category Doodles */}
              <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                 <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute -top-10 -left-10"
                 >
                    <div className="w-60 h-60 border-8 border-dashed border-gray-100 rounded-full" />
                 </motion.div>
                 
                 {backgroundIcons.map((icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, i % 2 === 0 ? 40 : -40, 0],
                        rotate: [0, i * 60, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ repeat: Infinity, duration: 5 + i, ease: "easeInOut" }}
                      className="absolute"
                      style={{
                        top: `${10 + (i * 15) % 80}%`,
                        left: `${(i * 17) % 90}%`,
                        opacity: 0.15
                      }}
                    >
                      {React.cloneElement(icon as React.ReactElement, { className: "w-24 h-24 text-black" })}
                    </motion.div>
                 ))}
              </div>

              <div className="mb-20 flex flex-col items-center lg:items-start relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-yellow-400 border-4 border-black flex items-center justify-center -rotate-6">
                    <Icon className="w-10 h-10 text-black" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase italic">{category.title}</h2>
                </div>
                <p className="text-xl max-w-2xl font-bold leading-tight uppercase bg-white px-2">
                  {category.description}
                </p>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
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
                      className="project-card-new group flex flex-col h-full relative"
                    >
                      <div className="h-64 mb-6 border-4 border-black rounded-xl overflow-hidden relative">
                         <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                         <div className="absolute top-4 left-4">
                           <span className="tag-badge text-[10px] py-1 px-3">PROJECT</span>
                         </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-3xl font-black mb-4 pl-[10px] uppercase leading-none group-hover:text-yellow-500 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm font-bold uppercase text-gray-500 line-clamp-3 mb-8 px-1">
                          {item.details || category.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs font-black uppercase tracking-widest bg-yellow-400 px-3 py-1 border-2 border-black inline-block">
                           {item.action}
                        </span>
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                           <ChevronRight className="w-6 h-6 text-yellow-400" />
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
      <footer className="border-t-8 border-black py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-4xl font-black italic uppercase">NOS RÉALISATIONS</div>
          <div className="flex flex-col md:flex-end items-center md:items-end gap-2 font-black uppercase text-sm">
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
