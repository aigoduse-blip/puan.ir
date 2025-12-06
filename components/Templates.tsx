
import React, { useContext } from 'react';
import { TEMPLATES } from '../constants';
import { Download, Users, Star, Eye } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';

const Templates: React.FC = () => {
  const { setPage, setTemplateId } = useContext(NavigationContext);

  const handleTemplateClick = (id: string) => {
    setTemplateId(id);
    setPage('template-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6">قالب‌های <span className="text-brand-gold">آماده</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          ایجنت‌های از پیش ساخته شده برای سناریوهای مختلف. دانلود کنید، نصب کنید و استفاده کنید.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEMPLATES.map((template) => (
          <div 
            key={template.id} 
            onClick={() => handleTemplateClick(template.id)}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-brand-red/50 transition-all cursor-pointer group flex flex-col h-full"
          >
            <div className="rounded-xl overflow-hidden mb-4 relative bg-slate-200 dark:bg-slate-700 h-40">
              <img 
                src={template.image} 
                alt={template.title} 
                loading="lazy"
                width="600"
                height="400"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4"/> مشاهده
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded mb-2 inline-block">{template.category}</span>
                <h3 className="font-bold text-lg group-hover:text-brand-red transition-colors line-clamp-1">{template.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 mt-auto">
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {template.users} نصب</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> ۴.۸</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="font-bold text-lg">{template.price}</span>
              <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white p-2 rounded-lg hover:bg-brand-red hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
