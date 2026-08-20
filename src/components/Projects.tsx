
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, TerminalSquare } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group perspective h-full"
            >
              <div className="glass-card flex flex-col h-full border-t border-t-white/10 hover:border-t-blue-500/80 hover:bg-white/[0.08] hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] relative overflow-hidden rounded-2xl">
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Decorative glowing orb top right */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/30 group-hover:text-blue-300 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      <TerminalSquare size={24} />
                    </div>
                    <div className="flex gap-3">
                      {project.codeLink && (
                        <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                          <Github size={22} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all">
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {project.highlight && (
                    <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full mb-4 w-max group-hover:bg-green-500/20 transition-colors">
                      {project.highlight}
                    </div>
                  )}
                  
                  <p className="text-gray-400 mb-6 flex-grow group-hover:text-gray-300 transition-colors leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-300 mb-3 tracking-wide uppercase group-hover:text-blue-300 transition-colors">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 group/item">
                          <div className="w-1.5 h-1.5 bg-blue-500/50 rounded-full group-hover/item:bg-blue-400 group-hover/item:scale-150 transition-all"></div>
                          <span className="group-hover/item:text-gray-200 transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-auto group-hover:border-blue-500/30 transition-colors">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs font-bold font-mono text-blue-300 bg-blue-900/30 border border-blue-500/20 px-2.5 py-1.5 rounded-lg group-hover:bg-blue-500/20 group-hover:border-blue-400/50 transition-all cursor-default">
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
