
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'سلام! 👋 من دستیار هوشمند پوان هستم. چطور می‌تونم امروز به رشد کسب‌وکار شما کمک کنم؟',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing and response
    setTimeout(() => {
      let botResponseText = 'متوجه منظور شما نشدم. لطفا با کارشناسان ما تماس بگیرید: ۰۹۱۲۳۷۷۲۶۸۱';
      const input = userMessage.text.toLowerCase();

      if (input.includes('سلام') || input.includes('درود') || input.includes('خوبی')) {
        botResponseText = 'سلام دوست عزیز! امیدوارم عالی باشید. چطور می‌تونم کمکتون کنم؟';
      } else if (input.includes('قیمت') || input.includes('هزینه') || input.includes('تعرفه') || input.includes('خرید')) {
        botResponseText = 'تعرفه‌های ما بسیار رقابتی هستند:\n✨ پلن پایه: ۶،۲۲۵،۰۰۰ تومان\n🚀 پلن حرفه‌ای: ۲۴،۷۵۰،۰۰۰ تومان\n\nپیشنهاد می‌کنم بخش "تعرفه‌ها" را در سایت بررسی کنید.';
      } else if (input.includes('تماس') || input.includes('شماره') || input.includes('تلفن') || input.includes('ارتباط')) {
        botResponseText = 'برای مشاوره رایگان می‌توانید با شماره مستقیم ما تماس بگیرید:\n📞 ۰۹۱۲۳۷۷۲۶۸۱\n\nیا در بخش "تماس با ما" فرم پر کنید.';
      } else if (input.includes('خدمات') || input.includes('سرویس') || input.includes('کار') || input.includes('چی داری')) {
        botResponseText = 'خدمات اصلی ما شامل موارد زیر است:\n🤖 ساخت ایجنت‌های هوشمند\n📱 اتوماسیون اینستاگرام و تلگرام\n📈 سئوی خودکار وردپرس\n💳 اتصال به درگاه‌های بانکی';
      } else if (input.includes('دمو') || input.includes('نمونه') || input.includes('پنل')) {
          botResponseText = 'شما می‌توانید نسخه دمو پنل کاربری را از منوی بالای سایت یا دکمه "مشاهده دمو" در صفحه اصلی بررسی کنید. کاملاً رایگان است!';
      } else if (input.includes('وردپرس') || input.includes('سایت')) {
        botResponseText = 'پلاگین ما کاملاً با وردپرس سازگار است و به راحتی روی سایت شما نصب می‌شود تا محتوا را اتوماتیک کند.';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-4 font-sans dir-rtl">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-slate-800 w-[320px] sm:w-[380px] h-[500px] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-l from-brand-red to-red-600 p-4 flex justify-between items-center text-white shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-brand-red rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-base">پشتیبان هوشمند</h3>
                <span className="text-[11px] text-white/90 opacity-90 block">پاسخگویی آنی با AI</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.sender === 'user' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-gradient-to-br from-brand-red to-brand-gold'}`}>
                  {msg.sender === 'user' ? <User className="w-5 h-5 text-slate-600 dark:text-slate-300" /> : <Bot className="w-5 h-5 text-white" />}
                </div>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                  msg.sender === 'user' 
                    ? 'bg-brand-red text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                  <span className={`text-[10px] block mt-1.5 text-right opacity-70 ${msg.sender === 'user' ? 'text-white' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString('fa-IR', {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
               <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-red to-brand-gold flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center shadow-sm">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="اینجا بنویسید..."
                className="w-full bg-slate-100 dark:bg-slate-900 rounded-xl pl-4 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all dark:text-white placeholder:text-slate-400 border border-transparent focus:border-brand-red/20"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-3 bg-brand-red text-white rounded-xl hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-5 h-5 rtl:-rotate-90" />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                 قدرت گرفته از <span className="font-bold text-brand-red">Puan AI</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-red text-white p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(239,68,68,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(239,68,68,0.6)] hover:scale-110 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden z-50 border-4 border-white dark:border-slate-900"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {isOpen ? (
          <X className="w-7 h-7 relative z-10" />
        ) : (
          <>
            <div className="flex flex-col items-start relative z-10 max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
              <span className="text-sm font-bold whitespace-nowrap px-1">نیاز به راهنمایی دارید؟</span>
              <span className="text-[10px] opacity-90 whitespace-nowrap px-1">کلیک کنید</span>
            </div>
            <div className="relative">
              <MessageSquare className="w-7 h-7 relative z-10" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-brand-red rounded-full animate-pulse z-20"></span>
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
