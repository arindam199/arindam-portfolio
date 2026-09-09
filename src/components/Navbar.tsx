import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl ${
      isScrolled ? 'py-3' : 'py-4'
    }`}>
      <div className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold tracking-tight text-dark-text hover:text-blue-accent transition-colors">
            arindam<span className="text-blue-accent font-handwriting text-2xl leading-none">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-blue-accent px-4 py-2 rounded-full hover:bg-blue-50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-blue-accent focus:outline-none p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full mt-2 transition-all duration-300 origin-top ${
        mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-2 bg-white rounded-3xl shadow-xl border border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-accent hover:bg-blue-50 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
