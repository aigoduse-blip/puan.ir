import React, { useContext } from 'react';
import { Cpu, Send, Instagram, Twitter, MapPin, Phone, Mail, ChevronLeft } from 'lucide-react';
import { NavigationContext, Page } from '../NavigationContext';

const Footer: React.FC = () => {
  const { setPage } = useContext(NavigationContext);

  const handleLink = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-24 border-t border-slate-800 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleLink('home')}>
              <div className="bg-brand-red p-1.5 rounded-lg group-hover:bg-red-600 transition-colors">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                پوان
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 text-justify">
              اولین پلتفرم جامع ساخت ایجنت‌های هوش مصنوعی در ایران. ما به کسب‌وکارها کمک می‌کنیم تا با اتوماسیون هوشمند، سریع‌تر رشد کنند و هزینه‌ها را کاهش دهند.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110" aria-label="Telegram"><Send className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110" aria-label="Instagram"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="hover:text-white transition-colors transform hover:scale-110" aria-label="Twitter"><Twitter className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-1 after:bg-brand-red after:rounded-full">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleLink('home')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> خانه</button></li>
              <li><button onClick={() => handleLink('templates')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> قالب‌های آماده</button></li>
              <li><button onClick={() => handleLink('blog')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> وبلاگ آموزشی</button></li>
              <li><button onClick={() => handleLink('careers')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> همکاری و استخدام</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-1 after:bg-brand-gold after:rounded-full">خدمات</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleLink('services')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> اتوماسیون اینستاگرام</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> چت‌بات‌های تلگرام</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> سئوی وردپرس</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-brand-red transition-colors w-full text-right py-1 flex items-center gap-2 group"><ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors"/> API زرین‌پال</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-1 after:bg-blue-500 after:rounded-full">تماس با ما</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span className="leading-relaxed">تهران، پارک علم و فناوری پردیس،<br/>ساختمان نوآوری، طبقه ۳</span>
              </li>
              <li>
                <a href="tel:09123772681" className="flex items-center gap-3 hover:text-brand-red transition-colors group">
                  <Phone className="w-5 h-5 text-brand-red shrink-0 group-hover:rotate-12 transition-transform" />
                  <span className="font-mono dir-ltr text-lg font-bold">09123772681</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@puan.ir" className="flex items-center gap-3 hover:text-brand-red transition-colors group">
                  <Mail className="w-5 h-5 text-brand-red shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">info@puan.ir</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© ۲۰۲۵ پوان (Puan.ir). تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">قوانین و مقررات</a>
            <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-white transition-colors">گزارش باگ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;