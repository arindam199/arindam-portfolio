import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Code2, Send, Phone } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2c8d07d5-640d-49c7-a5cd-f50b2da568ad",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact from Portfolio!"
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Fetch Error:", error);
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => {
        if (submitStatus === 'success') setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-dark-text">Let's Build Something <span className="font-handwriting text-blue-accent font-normal text-5xl inline-block -rotate-2">Together.</span></h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              I'm always interested in discussing software engineering, AI, full-stack development, emerging technologies, and exciting opportunities.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${personalInfo.phone?.replace(/ /g, '')}`} className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-green-500 shadow-sm transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Phone</div>
                  <div className="text-lg text-dark-text font-semibold group-hover:text-green-600 transition-colors">{personalInfo.phone}</div>
                </div>
              </a>

              <a href={personalInfo.socials.email} className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-blue-accent shadow-sm transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <div className="text-lg text-dark-text font-semibold group-hover:text-blue-accent transition-colors">{personalInfo.email}</div>
                </div>
              </a>
              
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-blue-500 shadow-sm transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">LinkedIn</div>
                  <div className="text-lg text-dark-text font-semibold group-hover:text-blue-600 transition-colors">linkedin.com/in/arindam-banerjee-0a1627290</div>
                </div>
              </a>
              
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-4 group bg-soft-gray p-4 rounded-2xl border border-gray-100 hover:border-yellow-200 transition-colors">
                <div className="p-4 bg-white rounded-xl text-gray-400 group-hover:text-yellow-500 shadow-sm transition-colors">
                  <Code2 size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">LeetCode</div>
                  <div className="text-lg text-dark-text font-semibold group-hover:text-yellow-600 transition-colors">leetcode.com/u/arindam25737</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="white-card p-8 relative overflow-hidden rounded-[2rem]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold text-dark-text mb-6 relative z-10">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-soft-gray border border-gray-200 rounded-xl px-4 py-3 text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-soft-gray border border-gray-200 rounded-xl px-4 py-3 text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-soft-gray border border-gray-200 rounded-xl px-4 py-3 text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all resize-none placeholder-gray-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-accent hover:bg-blue-dark text-white font-bold py-4 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_8px_20px_rgba(255,0,144,0.2)] hover:shadow-[0_8px_25px_rgba(255,0,144,0.3)] hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-600 font-medium text-sm text-center">
                    Message received! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 font-medium text-sm text-center">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
