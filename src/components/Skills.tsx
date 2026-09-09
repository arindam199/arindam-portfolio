
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-dark-text">
            Technical <span className="font-handwriting text-blue-accent font-normal text-5xl">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-accent rounded-full mx-auto"></div>
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
                className="group"
              >
                <div className="white-card p-6 md:p-8 h-full hover:-translate-y-2 relative overflow-hidden rounded-[2rem]">
                  
                  {/* Subtle background glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3.5 bg-soft-gray border border-gray-100 rounded-2xl text-blue-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-text group-hover:text-blue-600 transition-colors">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {data.items.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 hover:scale-105 transition-all duration-300 cursor-default"
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
