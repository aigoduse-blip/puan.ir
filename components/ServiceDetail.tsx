
import React, { useContext } from 'react';
import { SERVICES } from '../constants';
import { NavigationContext } from '../NavigationContext';
import { ArrowRight, CheckCircle, Zap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from './SEO';

const ServiceDetail: React.FC = () => {
  const { serviceId, setPage } = useContext(NavigationContext);
  const service = SERVICES.find(s => s.id === serviceId);

  const handleOrder = () => {
    setPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!service) return <div>سرویس یافت نشد</div>;

  return (
    <>
      <SEO 
        title={`${service.title} | پوان`}
        description={service.shortDescription}
      />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => setPage('services')}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-red mb-8 transition-colors"
          >
            <ArrowRight className="w-4 h-4" /> بازگشت به خدمات
          </button>

          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <div className="inline-block p-4 rounded-2xl bg-brand-red/10 mb-6">
                {React.isValidElement(service.icon) 
                  ? React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-16 h-16 text-brand-red" })
                  : service.icon
                }
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">{service.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <button 
                onClick={handleOrder}
                className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-500/40"
              >
                {service.cta} (ثبت سفارش)
              </button>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="lg:w-1/2 space-y-8"
            >
               {/* Use Cases - New Section Highlighting Iranian Context */}
               {service.useCases && service.useCases.length > 0 && (
                 <div className="bg-gradient-to-br from-brand-red/5 to-brand-gold/5 rounded-3xl p-8 border border-brand-red/10 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-bl-full -mr-4 -mt-4"></div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-brand-red relative z-10">
                      <Briefcase className="w-6 h-6" /> کاربردها در بازار ایران
                    </h3>
                    <div className="flex flex-wrap gap-3 relative z-10">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="bg-white dark:bg-slate-900 px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                          {useCase}
                        </span>
                      ))}
                    </div>
                 </div>
               )}

               {/* Key Features */}
               <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="text-brand-gold" /> ویژگی‌های کلیدی
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm">
                        <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Benefits */}
               <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="text-brand-gold" /> مزایا
                  </h3>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>
          </div>

          {/* How it works placeholder */}
          <div className="bg-slate-900 text-white rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">مراحل انجام کار</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-4 relative">
                  <div className="text-4xl font-black text-brand-red mb-4">۱</div>
                  <h4 className="text-xl font-bold mb-2">نیازسنجی و مشاوره</h4>
                  <p className="text-slate-400">بررسی دقیق نیازهای کسب‌وکار شما در جلسه آنلاین.</p>
                </div>
                <div className="p-4 relative">
                   <div className="absolute top-8 left-0 hidden md:block w-full h-0.5 bg-slate-700 -z-10"></div>
                  <div className="text-4xl font-black text-brand-red mb-4">۲</div>
                  <h4 className="text-xl font-bold mb-2">توسعه و شخصی‌سازی</h4>
                  <p className="text-slate-400">تنظیم ایجنت‌ها و مدل‌ها بر اساس داده‌های شما.</p>
                </div>
                <div className="p-4 relative">
                  <div className="text-4xl font-black text-brand-red mb-4">۳</div>
                  <h4 className="text-xl font-bold mb-2">استقرار و پشتیبانی</h4>
                  <p className="text-slate-400">راه‌اندازی نهایی و آموزش پرسنل شما.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
