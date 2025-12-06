import React, { useContext } from 'react';
import { ArrowRight, Check, Star, Download, Shield, CreditCard, AlertCircle } from 'lucide-react';
import { TEMPLATES } from '../constants';
import { NavigationContext } from '../NavigationContext';
import SEO from './SEO';

const TemplateDetail: React.FC = () => {
  const { templateId, setPage } = useContext(NavigationContext);
  const template = TEMPLATES.find(t => t.id === templateId);

  const handlePurchase = () => {
    setPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!template) {
    return (
      <div className="pt-40 pb-20 text-center container mx-auto px-4">
        <div className="flex flex-col items-center justify-center p-12 bg-slate-50 dark:bg-slate-800 rounded-3xl">
          <AlertCircle className="w-16 h-16 text-slate-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">قالب مورد نظر پیدا نشد</h2>
          <button 
            onClick={() => setPage('templates')}
            className="text-brand-red hover:underline font-bold"
          >
            بازگشت به فروشگاه قالب‌ها
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${template.title} | قالب هوشمند پوان`}
        description={`خرید و دانلود قالب ایجنت هوشمند ${template.title} برای ${template.category}. نصب آسان و افزایش فروش.`}
        keywords={`قالب AI, ایجنت ${template.category}, خرید چت‌بات, پوان, ${template.title}, دانلود ربات`}
      />
      <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => setPage('templates')}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-red mb-8 transition-colors group"
          >
            <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> بازگشت به قالب‌ها
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-700 border border-slate-200 dark:border-slate-700">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  width="800"
                  height="400" 
                  loading="eager"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-sm font-bold">{template.category}</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-slate-400 text-sm mr-2 font-medium">(۴۸ نظر)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-black mb-6 text-slate-800 dark:text-white">{template.title}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  این قالب هوشمند به طور اختصاصی برای {template.category} طراحی شده است. با نصب این ایجنت، می‌توانید تا ۸۰٪ از زمان پاسخگویی به مشتریان را کاهش دهید. این قالب به صورت پیش‌فرض با کلمات کلیدی صنعت شما آموزش دیده و آماده اتصال به زیرساخت وردپرس شماست.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">ویژگی‌های اصلی</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className="font-medium">پاسخگویی ۲۴ ساعته</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className="font-medium">اتصال به پنل پیامکی</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className="font-medium">یادگیری خودکار از مکالمات</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className="font-medium">نصب آسان در ۵ دقیقه</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-black mb-2 text-brand-red">{template.price}</div>
                <p className="text-slate-500 text-sm mb-8">پرداخت یک‌بار برای همیشه</p>

                <button 
                  onClick={handlePurchase}
                  className="w-full bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 mb-4 transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5" /> خرید و دانلود آنی
                </button>
                
                <button className="w-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold py-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-2">
                  پیش‌نمایش زنده
                </button>

                <div className="mt-8 space-y-4 text-sm text-slate-500">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>گارانتی بازگشت وجه ۷ روزه</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    <span>پرداخت امن با زرین‌پال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateDetail;