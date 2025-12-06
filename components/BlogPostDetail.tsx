import React, { useContext } from 'react';
import { ArrowRight, Calendar, User, Tag, Share2, AlertCircle } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { NavigationContext } from '../NavigationContext';
import SEO from './SEO';

const BlogPostDetail: React.FC = () => {
  const { blogPostId, setPage } = useContext(NavigationContext);
  const post = BLOG_POSTS.find(p => p.id === blogPostId);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center container mx-auto px-4">
        <div className="flex flex-col items-center justify-center p-12 bg-slate-50 dark:bg-slate-800 rounded-3xl">
          <AlertCircle className="w-16 h-16 text-slate-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">مقاله مورد نظر پیدا نشد</h2>
          <button 
            onClick={() => setPage('blog')}
            className="text-brand-red hover:underline font-bold"
          >
            بازگشت به وبلاگ
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} | وبلاگ پوان`}
        description={post.excerpt}
        keywords={`هوش مصنوعی, ${post.category}, پوان, مقاله آموزشی, تکنولوژی, اخبار AI`}
      />
      <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={() => setPage('blog')}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-red mb-8 transition-colors group"
          >
            <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> بازگشت به وبلاگ
          </button>

          <article className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl">
            {/* Hero Image - Fetch priority high for LCP optimization */}
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 md:h-96 object-cover"
              width="1200"
              height="600" 
              loading="eager"
            />
            
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-2 text-brand-gold font-bold bg-brand-gold/10 px-2 py-0.5 rounded"><Tag className="w-4 h-4" /> {post.category}</span>
                <span className="flex items-center gap-2"><User className="w-4 h-4" /> تیم محتوای پوان</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-800 dark:text-white">{post.title}</h1>
              
              <div className="prose dark:prose-invert max-w-none prose-lg prose-slate prose-img:rounded-2xl prose-headings:font-bold">
                <p className="lead font-bold text-xl mb-6 text-slate-600 dark:text-slate-300 border-l-4 border-brand-red pl-4">{post.excerpt}</p>
                <p>
                  هوش مصنوعی در حال تغییر دادن تمامی جنبه‌های کسب‌وکار آنلاین در ایران است. در پلتفرم پوان، ما شاهد هستیم که چگونه استارتاپ‌های کوچک با استفاده از ایجنت‌های هوشمند، توانسته‌اند هزینه‌های عملیاتی خود را تا ۸۰ درصد کاهش دهند و بهره‌وری را به طرز چشمگیری بالا ببرند.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">چرا اتوماسیون ضروری است؟</h3>
                <p>
                  در بازار رقابتی امروز، پاسخگویی سریع به مشتریان یک مزیت نیست، بلکه یک ضرورت است. ابزارهایی مانند چت‌بات‌های پوان که به دیتابیس وردپرس متصل می‌شوند، می‌توانند در کسری از ثانیه موجودی کالا را چک کرده و به مشتری پاسخ دهند. این یعنی فروش حتی زمانی که شما خواب هستید.
                </p>
                <div className="bg-brand-red/5 border-r-4 border-brand-red p-6 my-8 rounded-l-xl italic text-slate-700 dark:text-slate-300">
                  "آینده متعلق به کسب‌وکارهایی است که می‌توانند با هوش مصنوعی همکاری کنند، نه آن‌هایی که از آن می‌ترسند."
                </div>
                <h3 className="text-2xl font-bold mt-8 mb-4">قدم بعدی چیست؟</h3>
                <p>
                  برای شروع، نیازی به تغییر کل سیستم خود ندارید. می‌توانید با یک ایجنت ساده اینستاگرام شروع کنید که کامنت‌ها را پاسخ می‌دهد. سپس به سراغ سئوی خودکار بروید و ترافیک ارگانیک سایت خود را افزایش دهید.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <div className="font-bold">اشتراک‌گذاری این مطلب:</div>
                <div className="flex gap-4">
                   <button className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-brand-red hover:text-white transition-colors" aria-label="Share">
                     <Share2 className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;