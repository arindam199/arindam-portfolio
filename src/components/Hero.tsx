
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Code2, ArrowRight, Sparkles, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-light-bg">
      {/* Soft background accents */}
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-accent"></span>
              </span>
              <span className="text-sm font-medium text-blue-dark">Available for Opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-4 text-dark-text">
              <span className="font-handwriting text-blue-accent font-normal text-4xl sm:text-5xl block mb-2 -rotate-2">Hello there!</span>
              I'm {personalInfo.name.split(' ')[0]}.
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 mb-6">
              I build intelligent, scalable digital solutions.
            </h2>
            
            <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
              Grab a coffee while I take you on a little tour of my development adventures. I promise it will be fun :) 
              <br/><br/>
              (CS student specializing in Blockchain, AI, and Full-Stack Development.)
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="group flex items-center space-x-2 bg-dark-text text-white px-8 py-4 rounded-full font-medium hover:bg-black hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#contact" 
                className="flex items-center space-x-2 bg-white text-dark-text border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                Let's Connect
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              {[
                { icon: Linkedin, link: personalInfo.socials.linkedin, color: "hover:text-blue-600", bg: "hover:bg-blue-50" },
                ...(personalInfo.socials.github ? [{ icon: Github, link: personalInfo.socials.github, color: "hover:text-gray-900", bg: "hover:bg-gray-100" }] : []),
                { icon: Code2, link: personalInfo.socials.leetcode, color: "hover:text-yellow-600", bg: "hover:bg-yellow-50" },
                { icon: Mail, link: personalInfo.socials.email, color: "hover:text-red-500", bg: "hover:bg-red-50" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`text-gray-500 bg-white border border-gray-100 shadow-sm transition-all duration-300 p-4 rounded-full hover:-translate-y-1 ${social.color} ${social.bg}`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photographic/Interactive Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square group">
              {/* Soft underlying shadow */}
              <div className="absolute inset-4 bg-gray-200 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              {/* The Photo Container */}
              <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden bg-white border-4 border-white z-10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(255,0,144,0.1)] transition-all duration-500">
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop";
                    e.currentTarget.classList.add('opacity-50', 'grayscale');
                  }}
                />
                
                {/* Floating Tech Badges - Light Mode */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 justify-center">
                  {["Software Engineer", "AI/ML", "IoT"].map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 text-xs font-semibold bg-white/90 backdrop-blur-md border border-gray-100 rounded-full text-gray-800 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements - Playful */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl z-20 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] animate-float" style={{ animationDelay: '0s' }}>
                <Sparkles className="w-8 h-8 text-blue-accent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-2xl z-20 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] animate-float" style={{ animationDelay: '1.5s' }}>
                <Brain className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
