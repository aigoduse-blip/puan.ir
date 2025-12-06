
import React, { useState } from 'react';
import { Briefcase, Code, Users, Rocket, CheckCircle, Send } from 'lucide-react';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'frontend',
    linkedin: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = `درخواست همکاری: ${formData.position} - ${formData.name}`;
    const body = `نام: ${formData.name}\nایمیل: ${formData.email}\nتلفن: ${formData.phone}\nموقعیت: ${formData.position}\nلینکدین: ${formData.linkedin}\n\nپیام:\n${formData.message}`;
    
    window.location.href = `mailto:jobs@puan.ir?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 text-brand-red rounded-full font-bold mb-6">
            <Rocket className="w-5 h-5" />
            به تیم ما بپیوندید
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">ساختن آینده <span className="text-brand-gold">با هم</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            ما در پوان به دنبال افراد خلاق، پرانرژی و بلندپرواز هستیم تا مرزهای هوش مصنوعی در ایران را جابجا کنیم. اگر عاشق چالش هستید، جای شما اینجاست.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-t-4 border-brand-red text-center">
            <div className="bg-brand-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">رشد سریع</h3>
            <p className="text-slate-500">در محیطی استارتاپی و پویا کار کنید که هر روز چیز جدیدی برای یادگیری وجود دارد.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-t-4 border-brand-gold text-center">
            <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3">تکنولوژی لبه</h3>
            <p className="text-slate-500">کار با جدیدترین مدل‌های AI، LLMs و استک‌های مدرن توسعه نرم‌افزار.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 text-center">
            <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">کار تیمی منعطف</h3>
            <p className="text-slate-500">ساعت کاری شناور، امکان دورکاری و محیطی دوستانه و دور از بروکراسی.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Open Positions */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-brand-red" /> موقعیت‌های شغلی باز
            </h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-red transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg group-hover:text-brand-red transition-colors">Frontend Developer (React/Next.js)</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">تمام وقت</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">مسلط به Tailwind، TypeScript و مفاهیم SPA.</p>
                <div className="flex gap-2 text-xs text-slate-400">
                  <span>تهران / دورکاری</span>
                  <span>•</span>
                  <span>حقوق توافقی + بیمه</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-red transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg group-hover:text-brand-red transition-colors">AI Engineer (Python/NLP)</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">تمام وقت</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">تجربه کار با PyTorch، LangChain و Fine-tuning مدل‌های زبانی.</p>
                <div className="flex gap-2 text-xs text-slate-400">
                  <span>تهران (پارک فناوری)</span>
                  <span>•</span>
                  <span>سهام تشویقی</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-red transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg group-hover:text-brand-red transition-colors">Digital Marketing Specialist</h3>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">پروژه‌ای</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">مسلط به SEO، Google Ads و استراتژی محتوا برای محصولات B2B.</p>
                <div className="flex gap-2 text-xs text-slate-400">
                  <span>دورکاری</span>
                  <span>•</span>
                  <span>پورسانت بالا</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6">فرم ارسال رزومه</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSubmitted ? (
                 <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-8 rounded-xl flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
                  <CheckCircle className="w-16 h-16 mb-4" />
                  <h3 className="text-xl font-bold mb-2">درخواست شما دریافت شد!</h3>
                  <p>تیم منابع انسانی ما به زودی رزومه شما را بررسی خواهد کرد.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">نام و نام خانوادگی</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-red"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">شماره تماس</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-red dir-ltr text-right"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2">ایمیل</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-red dir-ltr text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">موقعیت شغلی مورد نظر</label>
                    <select 
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-red"
                    >
                      <option value="frontend">Frontend Developer</option>
                      <option value="backend">Backend Developer</option>
                      <option value="ai">AI Engineer</option>
                      <option value="marketing">Marketing & Sales</option>
                      <option value="intern">کارآموزی</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">لینک پروفایل لینکدین / گیت‌هاب</label>
                    <input 
                      type="url" 
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-red dir-ltr text-right"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">توضیحات کوتاه / کاور لتر</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-red"
                      placeholder="چرا فکر می‌کنید برای این موقعیت مناسب هستید؟"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2">
                    ارسال رزومه <Send className="w-4 h-4 rtl:-rotate-90" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
