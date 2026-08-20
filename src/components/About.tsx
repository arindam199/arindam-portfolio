
import { motion } from 'framer-motion';
import { aboutHighlights, personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 space-y-6 text-lg leading-relaxed"
          >
            <p>
              I am a Computer Science Engineering student at <strong>{personalInfo.education.university}</strong> specializing in Blockchain Technology. 
              My passion lies in building practical technology solutions that solve real-world problems.
            </p>
            <p>
              With hands-on experience spanning across AI, IoT, and full-stack development, I am comfortable working across application development, databases, data analysis, and system architecture. I thrive in environments where I can leverage technology to create intelligent, scalable systems.
            </p>
            <p>
              Whether it's modeling complex graph databases, analyzing soil data with machine learning, or building full-stack web applications, I bring a strong engineering mindset to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2">
            {aboutHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 border-t border-t-white/20 relative overflow-hidden group"
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors"></div>
                  <Icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{highlight.title}</h3>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
