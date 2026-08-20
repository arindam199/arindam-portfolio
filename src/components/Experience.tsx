
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="relative md:max-w-5xl md:mx-auto">
          {/* Central Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent -ml-[1px]"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-16 relative pl-12 md:pl-0 w-full flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full z-10 border-4 border-[#030712] ${exp.highlight ? 'bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 'bg-gray-500'}`}>
                {exp.highlight && (
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                )}
              </div>

              {/* Connector Line (Desktop) */}
              <div className={`hidden md:block absolute top-7 w-8 h-0.5 bg-white/10 ${index % 2 === 0 ? 'left-[calc(50%+1rem)]' : 'right-[calc(50%+1rem)]'}`}></div>

              <div className="md:w-[45%] group perspective">
                <div className={`glass-card p-8 border-t hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden ${exp.highlight ? 'border-t-blue-500/50 bg-blue-900/10' : 'border-t-white/10'}`}>
                  
                  {/* Subtle gradient hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors">
                        <div className={`p-2 rounded-lg ${exp.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-gray-400'}`}>
                          <Briefcase size={20} />
                        </div>
                        {exp.role}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 text-sm">
                      <span className="font-bold text-lg text-blue-400 tracking-wide">{exp.company}</span>
                      <span className="hidden sm:inline text-gray-600 font-bold">•</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        <Calendar size={14} className="text-gray-400" />
                        {exp.timeline}
                      </span>
                    </div>

                    <ul className="space-y-3 text-gray-300 text-sm md:text-base mb-6">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ChevronRight size={18} className="text-blue-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 text-xs font-semibold bg-gray-900/50 border border-white/10 hover:border-blue-500/50 rounded-lg text-gray-300 hover:text-blue-300 transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
