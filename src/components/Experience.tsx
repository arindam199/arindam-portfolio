
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-dark-text">
            Professional <span className="font-handwriting text-blue-accent font-normal text-5xl">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative md:max-w-5xl md:mx-auto">
          {/* Central Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-100 -ml-[1px]"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-blue-100"></div>

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
              <div className={`absolute left-[11px] md:left-1/2 transform -translate-x-1/2 top-6 w-5 h-5 rounded-full z-10 border-4 border-white ${exp.highlight ? 'bg-blue-accent shadow-[0_0_0_4px_rgba(255,0,144,0.1)]' : 'bg-blue-300'}`}>
              </div>

              {/* Connector Line (Desktop) */}
              <div className={`hidden md:block absolute top-8 w-8 h-[2px] bg-blue-100 ${index % 2 === 0 ? 'left-[calc(50%+1rem)]' : 'right-[calc(50%+1rem)]'}`}></div>

              <div className="md:w-[45%] group">
                <div className={`white-card p-8 hover:-translate-y-1 relative overflow-hidden ${exp.highlight ? 'border-blue-200 bg-blue-50/30' : ''}`}>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-dark-text flex items-center gap-3 group-hover:text-blue-accent transition-colors">
                        <div className={`p-2.5 rounded-xl ${exp.highlight ? 'bg-blue-100 text-blue-accent' : 'bg-gray-100 text-gray-500'}`}>
                          <Briefcase size={20} />
                        </div>
                        {exp.role}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 text-sm">
                      <span className="font-bold text-lg text-gray-800 tracking-wide">{exp.company}</span>
                      <span className="hidden sm:inline text-gray-300 font-bold">•</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-gray text-gray-600 font-medium">
                        <Calendar size={14} className="text-blue-accent" />
                        {exp.timeline}
                      </span>
                    </div>

                    <ul className="space-y-3 text-gray-600 text-sm md:text-base mb-6">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ChevronRight size={18} className="text-blue-accent mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-100">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 text-xs font-semibold bg-white border border-gray-200 shadow-sm rounded-lg text-gray-600 hover:border-blue-200 hover:text-blue-accent transition-colors cursor-default">
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
