
import React, { useContext } from 'react';
import { SERVICES } from '../constants';
import { NavigationContext } from '../NavigationContext';
import { ArrowLeft, Cpu, ShieldCheck, Layers, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { setPage, setServiceId } = useContext(NavigationContext);

  const handleServiceClick = (id: string) => {
    setServiceId(id);
    setPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-sm">
             خدمات جامع پوان
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">ابزارهای <span className="text-brand-red">قدرتمند</span> ما</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            مجموعه‌ای کامل از ابزارهای هوش مصنوعی که برای بازار ایران و پلتفرم وردپرس بهینه‌سازی شده‌اند. ما هر آنچه برای اتوماسیون نیاز دارید را فراهم کرده‌ایم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={service.id}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-brand-red/30 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              
              <div className="mb-6 relative z-10 bg-slate-100 dark:bg-slate-700 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-red transition-colors">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                {service.shortDescription}
              </p>
              
              <button
                onClick={() => handleServiceClick(service.id)}
                className="mt-auto w-full py-4 px-6 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-brand-red hover:text-white dark:hover:bg-brand-red transition-all duration-300 font-bold flex items-center justify-between group-hover:shadow-lg border-2 border-transparent hover:border-brand-red/50"
              >
                <span>مشاهده جزئیات و کاربردها</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">تکنولوژی‌های پشت صحنه</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg">
                ما در پوان از ترکیب قدرتمندترین مدل‌های زبانی جهان و زیرساخت‌های بومی استفاده می‌کنیم تا سرعتی باورنکردنی و دقتی مثال‌زدنی را ارائه دهیم. سیستم‌های ما برای زبان فارسی بهینه‌سازی شده‌اند.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl h-fit">
                    <Cpu className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">مدل‌های زبانی ترکیبی</h4>
                    <p className="text-sm text-slate-500">استفاده همزمان از GPT-4 و مدل‌های سبک فارسی برای کاهش هزینه و افزایش دقت.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                   <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl h-fit">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">امنیت داده سازمانی</h4>
                    <p className="text-sm text-slate-500">رمزنگاری سرتاسری و امکان استقرار روی سرورهای شخصی (On-Premise).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                   <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl h-fit">
                    <Layers className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">معماری مقیاس‌پذیر</h4>
                    <p className="text-sm text-slate-500">قابلیت پردازش میلیون‌ها درخواست در ثانیه با استفاده از کوبرنتیز.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform border border-slate-100 dark:border-slate-700">
                 <div className="text-3xl font-black text-brand-red mb-2">99.9%</div>
                 <div className="text-sm text-slate-500">آپتایم تضمین شده</div>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform translate-y-8 border border-slate-100 dark:border-slate-700">
                 <div className="text-3xl font-black text-brand-gold mb-2">50ms</div>
                 <div className="text-sm text-slate-500">سرعت پاسخگویی</div>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform border border-slate-100 dark:border-slate-700">
                 <div className="text-3xl font-black text-blue-500 mb-2">24/7</div>
                 <div className="text-sm text-slate-500">پشتیبانی فنی</div>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition-transform translate-y-8 border border-slate-100 dark:border-slate-700">
                 <div className="text-3xl font-black text-green-500 mb-2">+12</div>
                 <div className="text-sm text-slate-500">ماژول اختصاصی</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
