
import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Moon, Sun, Cpu } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { NavigationContext, Page } from '../NavigationContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { page, setPage, scrollToSection } = useContext(NavigationContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleNavClick = (value: string) => {
    setPage(value as Page);
    if (value === 'home' || value === 'pricing' || value === 'about') {
      setTimeout(() => scrollToSection(value), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <div className="bg-brand-red p-2 rounded-lg transform group-hover:rotate-12 transition-transform">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-brand-red to-brand-gold">
            پوان
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.value)}
              className={`font-medium transition-colors relative group ${page === link.value ? 'text-brand-red' : 'hover:text-brand-red'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all ${page === link.value ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-brand-gold" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          <button 
            onClick={() => handleNavClick('pricing')}
            className="bg-brand-red hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-red-500/50 transition-all transform hover:-translate-y-1"
          >
            شروع کنید
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-brand-dark shadow-xl border-t dark:border-slate-800 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.value)}
              className="text-lg font-medium p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-right"
            >
              {link.name}
            </button>
          ))}
          <div className="flex justify-between items-center pt-4 border-t dark:border-slate-800">
             <button 
              onClick={toggleTheme}
              className="flex items-center gap-2"
            >
              {isDark ? <Sun className="w-5 h-5 text-brand-gold" /> : <Moon className="w-5 h-5 text-slate-700" />}
              <span>{isDark ? 'روز' : 'شب'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;