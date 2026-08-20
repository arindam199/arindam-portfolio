
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 border-t border-t-blue-500/30 relative overflow-hidden group"
        >
          {/* Decorative background element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div className="hidden md:flex p-6 bg-white/5 rounded-2xl border border-white/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
              <GraduationCap size={48} />
            </div>
            
            <div className="flex-grow">
              <div className="md:hidden p-3 bg-white/5 rounded-xl border border-white/10 text-blue-400 inline-block mb-4">
                <GraduationCap size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.education.university}</h3>
              
              <div className="text-xl text-blue-400 mb-2 font-medium">
                {personalInfo.education.degree}
              </div>
              
              <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium rounded-full mb-4">
                Specialization: {personalInfo.education.specialization}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>{personalInfo.education.timeline}</span>
                </div>
                <div className="hidden sm:block text-gray-600">•</div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  <span>Vellore, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
