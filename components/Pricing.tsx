
import React, { useContext } from 'react';
import { Check, CreditCard, Rocket } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { NavigationContext } from '../NavigationContext';

const Pricing: React.FC = () => {
  const { setPage } = useContext(NavigationContext);

  const handleBuy = () => {
    setPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">تعرفه‌های <span className="text-brand-gold">مقرون‌به‌صرفه</span></h2>
          <p className="text-slate-600 dark:text-slate-400">
            برای خرید هر پلن، لطفا با واحد فروش تماس بگیرید یا فرم درخواست را پر کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl flex flex-col ${plan.recommended ? 'border-4 border-brand-red scale-105 z-10' : 'border border-slate-200 dark:border-slate-700'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  پیشنهاد ویژه
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-500 mb-2">{plan.name}</h3>
              <div className="text-4xl font-black mb-6 text-slate-800 dark:text-white">
                {plan.price}
                {plan.price !== 'تماس بگیرید' && <span className="text-sm font-normal text-slate-400 block mt-1">/ ماهانه</span>}
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleBuy}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${plan.recommended ? 'bg-brand-red text-white hover:bg-red-600 shadow-lg hover:shadow-red-500/40' : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-200'}`}
              >
                {plan.price === 'تماس بگیرید' ? 'مشاوره رایگان' : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    سفارش و خرید
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Integration/Careers Banner */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/20 mb-6">
               <Rocket className="w-8 h-8 text-brand-red" />
             </div>
             <h3 className="text-3xl font-bold mb-4">درخواست همکاری و استخدام در پوان</h3>
             <p className="mb-8 text-slate-300 max-w-2xl mx-auto text-lg">
               آیا شما یک متخصص هوش مصنوعی، برنامه‌نویس یا بازاریاب خلاق هستید؟ ما همیشه به دنبال استعدادهای ناب ایرانی برای پیوستن به تیم خود هستیم.
             </p>
             <button 
               onClick={() => {
                 setPage('careers');
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }} 
               className="inline-block bg-brand-gold text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-yellow-500/50"
             >
               ارسال رزومه و همکاری
             </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
