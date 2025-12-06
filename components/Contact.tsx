
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    // Simulate backend submission or open mail client
    const subject = `پیام جدید از سایت پوان: ${formData.name}`;
    const body = `نام: ${formData.name}\nشماره تماس: ${formData.phone}\n\nپیام:\n${formData.message}`;
    
    // Open email client
    window.location.href = `mailto:info@puan.ir?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show success state
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div id="contact" className="pt-32 pb-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8 text-center">تماس با <span className="text-brand-red">پوان</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">اطلاعات تماس</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              برای مشاوره رایگان در مورد اتوماسیون کسب‌وکار خود، همین حالا تماس بگیرید یا فرم روبرو را پر کنید.
            </p>
            
            <div className="space-y-6">
              <a href="tel:09123772681" className="flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-700 p-3 rounded-xl transition-colors">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">شماره تماس</p>
                  <p className="font-bold font-mono dir-ltr text-right text-lg">09123772681</p>
                </div>
              </a>

              <a href="mailto:info@puan.ir" className="flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-700 p-3 rounded-xl transition-colors">
                <div className="bg-brand-gold/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">ایمیل پشتیبانی</p>
                  <p className="font-bold font-mono">info@puan.ir</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3">
                <div className="bg-blue-500/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">آدرس دفتر</p>
                  <p className="font-bold">تهران، پارک علم و فناوری پردیس</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSubmitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-6 rounded-xl flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in">
                <CheckCircle className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">پیام شما ارسال شد!</h3>
                <p>کارشناسان ما به زودی با شما تماس خواهند گرفت.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-bold mb-2">نام و نام خانوادگی</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 border-none focus:ring-2 focus:ring-brand-red outline-none transition-all" 
                    placeholder="مثال: علی رضایی" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">شماره موبایل</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 border-none focus:ring-2 focus:ring-brand-red outline-none transition-all dir-ltr text-right" 
                    placeholder="0912..." 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">پیام شما</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg p-3 border-none focus:ring-2 focus:ring-brand-red outline-none transition-all" 
                    placeholder="چطور می‌توانیم کمکتان کنیم؟"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-red-500/30">
                  ارسال پیام <Send className="w-4 h-4 rtl:-rotate-90" />
                </button>
              </>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
