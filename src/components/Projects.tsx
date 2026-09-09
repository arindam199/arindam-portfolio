
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, TerminalSquare } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-dark-text">Projects</h2>
          <div className="w-24 h-1.5 bg-blue-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="white-card flex flex-col h-full hover:-translate-y-2 hover:border-blue-200 relative overflow-hidden rounded-[2rem]">
                
                {/* Decorative glowing orb top right */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-accent group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                      <TerminalSquare size={28} />
                    </div>
                    <div className="flex gap-3">
                      {project.codeLink && (
                        <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-dark-text hover:bg-gray-100 p-2 rounded-full transition-all">
                          <Github size={22} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-accent hover:bg-blue-50 p-2 rounded-full transition-all">
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-dark-text mb-3 group-hover:text-blue-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {project.highlight && (
                    <div className="inline-block px-3 py-1 bg-green-50 border border-green-200 text-green-600 text-xs font-bold rounded-full mb-4 w-max">
                      {project.highlight}
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8 bg-gray-50 p-5 rounded-2xl border border-gray-100 group-hover:border-blue-100 transition-colors">
                    <h4 className="text-sm font-bold text-dark-text mb-3 tracking-wide uppercase">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-accent rounded-full mt-1.5 shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg group-hover:border-blue-200 group-hover:text-blue-accent transition-all cursor-default">
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
