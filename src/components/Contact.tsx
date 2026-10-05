
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Code2, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-dark-text">Let's Build Something <span className="font-handwriting text-blue-accent font-normal text-5xl inline-block -rotate-2">Together.</span></h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            I'm always interested in discussing software engineering, AI, full-stack development, emerging technologies, and exciting opportunities.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <a href={`tel:${personalInfo.phone?.replace(/ /g, '')}`} className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-green-200 transition-colors shadow-sm hover:shadow-md">
            <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-green-500 shadow-sm transition-colors">
              <Phone size={24} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 font-medium">Phone</div>
              <div className="text-lg text-dark-text font-semibold group-hover:text-green-600 transition-colors">{personalInfo.phone}</div>
            </div>
          </a>

          <a href={personalInfo.socials.email} className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
            <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-blue-accent shadow-sm transition-colors">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 font-medium">Email</div>
              <div className="text-lg text-dark-text font-semibold group-hover:text-blue-accent transition-colors">{personalInfo.email}</div>
            </div>
          </a>
          
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-blue-300 transition-colors shadow-sm hover:shadow-md">
            <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-blue-600 shadow-sm transition-colors">
              <Linkedin size={24} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 font-medium">LinkedIn</div>
              <div className="text-lg text-dark-text font-semibold group-hover:text-blue-700 transition-colors">arindam-banerjee</div>
            </div>
          </a>
          
          <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-yellow-200 transition-colors shadow-sm hover:shadow-md">
            <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-yellow-500 shadow-sm transition-colors">
              <Code2 size={24} />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 font-medium">LeetCode</div>
              <div className="text-lg text-dark-text font-semibold group-hover:text-yellow-600 transition-colors">arindamd25737</div>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
