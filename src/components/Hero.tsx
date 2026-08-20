
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Code2, ArrowRight, Sparkles, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-shadow duration-300">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-300 tracking-wide">Available for Software Engineering Opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm <br />
              <span className="text-gradient leading-tight">{personalInfo.name}</span>.
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 drop-shadow-md">
              I build intelligent, scalable digital solutions.
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
              Computer Science Engineering student at VIT Vellore specializing in Blockchain Technology, with experience across software engineering, AI, IoT, and full-stack development.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="group flex items-center space-x-2 bg-white text-black px-6 py-3.5 rounded-xl font-bold hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              
              <a 
                href="#contact" 
                className="glass-card hover:bg-white/10 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 border border-white/20 hover:border-blue-500/50"
              >
                Let's Connect
              </a>
            </div>
            
            <div className="flex items-center space-x-5">
              {[
                { icon: Linkedin, link: personalInfo.socials.linkedin, color: "hover:text-blue-500", shadow: "hover:shadow-blue-500/50" },
                ...(personalInfo.socials.github ? [{ icon: Github, link: personalInfo.socials.github, color: "hover:text-white", shadow: "hover:shadow-white/50" }] : []),
                { icon: Code2, link: personalInfo.socials.leetcode, color: "hover:text-yellow-500", shadow: "hover:shadow-yellow-500/50" },
                { icon: Mail, link: personalInfo.socials.email, color: "hover:text-red-400", shadow: "hover:shadow-red-500/50" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-3 glass rounded-xl hover:-translate-y-1 hover:shadow-lg ${social.shadow} border border-white/10`}
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
            <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square group animate-float">
              {/* Outer glowing rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* The Photo Container */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden glass border-2 border-white/10 group-hover:border-blue-500/40 transition-colors duration-500 z-10 shadow-2xl">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Tech Badges */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 justify-center">
                  {["Software Engineer", "AI/ML", "IoT"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements - Clean & Simple */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-900/40 backdrop-blur-xl rounded-2xl z-20 flex items-center justify-center shadow-lg border border-blue-500/20 animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-900/40 backdrop-blur-xl rounded-2xl z-20 flex items-center justify-center shadow-lg border border-purple-500/20 animate-float" style={{ animationDelay: '2s' }}>
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
