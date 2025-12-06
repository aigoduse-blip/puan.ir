
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Send, Instagram, Cpu } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';

const Hero: React.FC = () => {
  const { setPage, scrollToSection } = useContext(NavigationContext);

  const handleStart = () => {
    setPage('pricing');
    setTimeout(() => scrollToSection('pricing'), 100);
  };

  const handleDemo = () => {
    setPage('demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="blob bg-brand-red w-96 h-96 rounded-full top-0 -left-20 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="blob bg-brand-gold w-96 h-96 rounded-full bottom-0 -right-20 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-right"
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-bold text-sm">
              ✨ نسل جدید اتوماسیون ایران | Puan.ir
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              هوش مصنوعی <span className="text-brand-red">پوان</span> برای
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-brand-gold to-brand-red">
                اتوماسیون بی‌نهایت
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              با پوان (Puan)، وب‌سایت وردپرسی خود را به یک ارتش هوشمند تبدیل کنید. اتصال خودکار به تلگرام، اینستاگرام و ساخت ایجنت‌های فروش بدون کدنویسی.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={handleStart} className="group flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all shadow-xl hover:shadow-red-500/30">
                شروع رایگان
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button onClick={handleDemo} className="flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                <Play className="w-5 h-5 fill-current" />
                مشاهده دمو پنل
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-500">
              <span>مورد اعتماد:</span>
              <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                <span className="flex items-center gap-1"><Instagram className="w-4 h-4"/> Digikala</span>
                <span className="flex items-center gap-1"><Send className="w-4 h-4"/> Snapp</span>
              </div>
            </div>
          </motion.div>

          {/* Graphic Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-lg mx-auto bg-gradient-to-br from-slate-800 to-black rounded-2xl p-4 shadow-2xl border border-slate-700">
              {/* Fake UI Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-slate-400 mr-4">puan-agent-core.js</div>
              </div>

              {/* Animated Nodes */}
              <div className="space-y-4">
                <motion.div 
                  className="bg-slate-800 p-4 rounded-lg border border-slate-600 flex items-center justify-between"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded">WP</div>
                    <span className="text-slate-200">مقاله جدید منتشر شد</span>
                  </div>
                  <ArrowLeft className="text-slate-500" />
                </motion.div>

                <div className="h-8 w-0.5 bg-slate-600 mx-auto"></div>

                <motion.div 
                  className="bg-slate-800 p-4 rounded-lg border border-brand-red/50 shadow-[0_0_15px_rgba(239,68,68,0.3)] flex items-center justify-between"
                   animate={{ scale: [1, 1.02, 1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-red p-2 rounded"><Cpu className="text-white"/></div>
                    <div>
                      <span className="text-white block font-bold">هسته مرکزی پوان</span>
                      <span className="text-xs text-slate-400">تولید کپشن + تصویر</span>
                    </div>
                  </div>
                </motion.div>

                <div className="h-8 w-0.5 bg-slate-600 mx-auto"></div>

                <div className="flex gap-4">
                   <motion.div 
                    className="flex-1 bg-slate-800 p-3 rounded-lg border border-slate-600 flex items-center gap-2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                   >
                    <div className="bg-pink-600 p-1.5 rounded"><Instagram className="w-4 h-4 text-white"/></div>
                    <span className="text-xs text-slate-300">استوری شد</span>
                  </motion.div>
                  <motion.div 
                    className="flex-1 bg-slate-800 p-3 rounded-lg border border-slate-600 flex items-center gap-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="bg-blue-400 p-1.5 rounded"><Send className="w-4 h-4 text-white"/></div>
                    <span className="text-xs text-slate-300">ارسال به کانال</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              className="absolute -top-10 -right-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="text-green-500 font-bold text-xl">+450%</div>
              <div className="text-sm text-slate-500">افزایش تعامل</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;