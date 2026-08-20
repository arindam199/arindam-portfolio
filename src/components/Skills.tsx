
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-gradient">Expertise</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, data], index) => {
            const Icon = data.icon;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group perspective"
              >
                <div className="glass-card p-6 md:p-8 h-full border-t border-t-white/10 hover:border-t-purple-500/80 hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] relative overflow-hidden rounded-2xl">
                  
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 group-hover:border-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {data.items.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm font-medium hover:bg-purple-500/20 hover:border-purple-500/40 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
