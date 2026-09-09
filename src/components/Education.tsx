
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark-text">Education</h2>
          <div className="w-24 h-1.5 bg-blue-accent rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="white-card p-8 md:p-10 relative overflow-hidden group border border-blue-100"
        >
          {/* Decorative background element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div className="hidden md:flex p-6 bg-soft-gray rounded-3xl border border-gray-100 text-blue-accent group-hover:-rotate-12 group-hover:bg-blue-50 transition-all duration-300">
              <GraduationCap size={48} />
            </div>
            
            <div className="flex-grow">
              <div className="md:hidden p-4 bg-blue-50 rounded-2xl text-blue-accent inline-block mb-4">
                <GraduationCap size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-dark-text mb-2">{personalInfo.education.university}</h3>
              
              <div className="text-xl text-gray-600 mb-2 font-medium">
                {personalInfo.education.degree}
              </div>
              
              <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-dark text-sm font-semibold rounded-full mb-6">
                Specialization: {personalInfo.education.specialization}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm font-medium">
                <div className="flex items-center gap-1.5 bg-soft-gray px-3 py-1 rounded-lg">
                  <Calendar size={16} />
                  <span>{personalInfo.education.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-soft-gray px-3 py-1 rounded-lg">
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
