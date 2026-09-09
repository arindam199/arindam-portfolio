
import { motion } from 'framer-motion';
import { aboutHighlights, personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-text">About Me</h2>
          <div className="w-24 h-1.5 bg-blue-accent rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 space-y-6 text-lg leading-relaxed bg-soft-gray p-8 rounded-[2rem] border border-gray-100"
          >
            <p>
              I am a Computer Science Engineering student at <strong className="text-dark-text font-semibold">{personalInfo.education.university}</strong> specializing in Blockchain Technology. 
              My passion lies in building practical technology solutions that solve real-world problems.
            </p>
            <p>
              With hands-on experience spanning across AI, IoT, and full-stack development, I am comfortable working across application development, databases, data analysis, and system architecture. I thrive in environments where I can leverage technology to create intelligent, scalable systems.
            </p>
            <p>
              Whether it's modeling complex graph databases, analyzing soil data with machine learning, or building full-stack web applications, I bring a strong engineering mindset to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-1 xl:grid-cols-2">
            {aboutHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="white-card p-8 relative overflow-hidden group"
                >
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors"></div>
                  <div className="relative z-10">
                    <Icon className="w-10 h-10 text-blue-accent mb-6 bg-blue-50 p-2 rounded-xl" />
                    <h3 className="text-xl font-bold mb-3 text-dark-text">{highlight.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
