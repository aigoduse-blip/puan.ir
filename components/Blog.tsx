
import React, { useContext } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag } from 'lucide-react';
import { NavigationContext } from '../NavigationContext';

const Blog: React.FC = () => {
  const { setPage, setBlogPostId } = useContext(NavigationContext);

  const handlePostClick = (id: string) => {
    setBlogPostId(id);
    setPage('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6">وبلاگ <span className="text-brand-red">پوان</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          آخرین اخبار، آموزش‌ها و ترفندهای دنیای هوش مصنوعی و اتوماسیون.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            onClick={() => handlePostClick(post.id)}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" 
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex gap-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1 text-brand-gold"><Tag className="w-3 h-3" /> {post.category}</span>
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-brand-red transition-colors line-clamp-2">{post.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              <button className="text-brand-red font-bold text-sm hover:underline mt-auto self-start">ادامه مطلب</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
