
import React from 'react';
import { Users, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              داستان پوان: <br/>
              <span className="text-brand-red">تکنولوژی جهانی،</span> <br/>
              <span className="text-brand-gold">هویت ایرانی</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              پوان (Puan) در سال ۱۴۰۳ با هدف پر کردن شکاف میان تکنولوژی‌های پیشرفته هوش مصنوعی و نیازهای بومی کسب‌وکارهای ایرانی تأسیس شد. ما باور داریم که اتوماسیون نباید پیچیده باشد.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <Code2 className="w-8 h-8 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">علی اویسی</h4>
                  <p className="text-brand-gold font-medium text-sm mb-2">Co-founder & Lead Developer</p>
                  <p className="text-slate-500 text-sm">متخصص توسعه سیستم‌های توزیع‌شده و معمار ارشد پلتفرم پوان.</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">افشین احمدی</h4>
                  <p className="text-brand-gold font-medium text-sm mb-2">Co-founder & AI Strategist</p>
                  <p className="text-slate-500 text-sm">متخصص هوش مصنوعی و طراح جریان‌های کاری اتوماتیک.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="font-bold text-lg mb-2">تماس مستقیم با بنیان‌گذاران:</p>
              <a href="tel:09123772681" className="text-2xl font-mono dir-ltr text-right text-brand-red hover:text-red-600 transition-colors">09123772681</a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                 alt="جلسه تیم فنی پوان" 
                 className="rounded-2xl shadow-lg mt-12 w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                 loading="lazy"
               />
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                 alt="کنفرانس هوش مصنوعی" 
                 className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                 loading="lazy"
               />
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-gold/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
