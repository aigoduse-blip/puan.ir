
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Blog from './components/Blog';
import BlogPostDetail from './components/BlogPostDetail';
import Templates from './components/Templates';
import TemplateDetail from './components/TemplateDetail';
import Contact from './components/Contact';
import Demo from './components/Demo';
import ChatWidget from './components/ChatWidget';
import Careers from './components/Careers';
import SEO from './components/SEO';
import { NavigationContext, Page } from './NavigationContext';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [blogPostId, setBlogPostId] = useState<string | null>(null);
  const [templateId, setTemplateId] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <SEO 
              title="Puan | پلتفرم هوش مصنوعی و اتوماسیون پوان"
              description="پلتفرم ساخت ایجنت‌های هوش مصنوعی، چت‌بات و اتوماسیون اینستاگرام و تلگرام. افزایش فروش و کاهش هزینه با دستیاران هوشمند Puan."
              keywords="هوش مصنوعی, اتوماسیون کسب و کار, ایجنت هوشمند, ربات اینستاگرام, چت بات تلگرام, سئو سایت وردپرس, تولید محتوا با AI, پوان, استارتاپ هوش مصنوعی, کاهش هزینه با AI, فروش آنلاین"
            />
            <Hero />
            <Services />
            <About />
            <Pricing />
          </>
        );
      case 'services':
        return (
          <>
             <SEO 
              title="خدمات اتوماسیون هوش مصنوعی | پوان"
              description="لیست خدمات پوان شامل ایجنت‌های هوشمند، اتوماسیون شبکه‌های اجتماعی، سئوی AI، چت‌بات فروش و تحلیل داده."
              keywords="خدمات هوش مصنوعی, ساخت چت بات, اتوماسیون اینستاگرام, سئو اتوماتیک, طراحی سایت هوشمند, خدمات AI ایران, API زرین پال, هوش مصنوعی فارسی"
            />
             <div className="pt-20">
                <Services />
                <Pricing />
             </div>
          </>
        );
      case 'service-detail':
        return <ServiceDetail />;
      case 'pricing':
        return (
          <div className="pt-20">
            <SEO 
              title="تعرفه‌ها و قیمت‌گذاری | پوان"
              description="مشاهده پلن‌های قیمتی پوان برای کسب‌وکارهای کوچک و سازمان‌های بزرگ. شروع رایگان، پرداخت ماهانه و سالانه."
              keywords="قیمت هوش مصنوعی, تعرفه ساخت ربات, هزینه اتوماسیون, خرید اشتراک Puan, قیمت طراحی سایت AI, تعرفه سئو"
            />
            <Pricing /><Contact />
          </div>
        );
      case 'about':
        return (
          <div className="pt-20">
            <SEO 
              title="درباره پوان | تیم توسعه هوش مصنوعی"
              description="آشنایی با تیم پوان، ماموریت ما و بنیان‌گذاران. ما تکنولوژی‌های جهانی را بومی‌سازی می‌کنیم."
              keywords="درباره پوان, تیم هوش مصنوعی, علی اویسی, افشین احمدی, شرکت دانش بنیان, استارتاپ AI, تماس با ما"
            />
            <About /><Contact />
          </div>
        );
      case 'blog':
        return (
          <>
            <SEO 
              title="وبلاگ آموزشی هوش مصنوعی | پوان"
              description="مقالات آموزشی درباره AI، اتوماسیون، ChatGPT و تکنولوژی‌های روز دنیا به زبان فارسی."
              keywords="آموزش هوش مصنوعی, اخبار AI, مقالات فناوری, بلاگ پوان, آموزش ChatGPT, راهنمای اتوماسیون, ترندهای تکنولوژی"
            />
            <Blog />
          </>
        );
      case 'blog-detail':
        return <BlogPostDetail />;
      case 'templates':
        return (
          <>
            <SEO 
              title="فروشگاه قالب‌های ایجنت AI | پوان"
              description="دانلود قالب‌های آماده ایجنت هوش مصنوعی برای اینستاگرام، تلگرام و وب‌سایت. نصب آسان و سریع."
              keywords="قالب آماده هوش مصنوعی, دانلود ربات اینستاگرام, خرید ایجنت تلگرام, قالب چت بات, مارکت پلیس AI, ابزارهای آماده پوان"
            />
            <Templates />
          </>
        );
      case 'template-detail':
        return <TemplateDetail />;
      case 'contact':
        return (
          <>
            <SEO 
              title="تماس با ما | پوان"
              description="راه‌های ارتباطی با تیم پوان جهت مشاوره و سفارش پروژه. تلفن، ایمیل و مراجعه حضوری."
              keywords="تماس با پوان, پشتیبانی پوان, مشاوره هوش مصنوعی, سفارش پروژه AI, شماره تماس پوان"
            />
            <Contact />
          </>
        );
      case 'demo':
        return (
          <>
            <SEO 
              title="دمو پنل مدیریت ایجنت‌ها | پوان"
              description="پیش‌نمایش زنده پنل مدیریت ایجنت‌های هوشمند پوان. تجربه کاربری داشبورد اختصاصی ما را امتحان کنید."
              keywords="دمو پنل پوان, تست رایگان, داشبورد مدیریت, پیش نمایش نرم افزار, پنل کاربری هوش مصنوعی"
            />
            <Demo />
          </>
        );
      case 'careers':
        return (
          <>
            <SEO 
              title="فرصت‌های شغلی و استخدام | پوان"
              description="به تیم پوان بپیوندید. ما به دنبال توسعه‌دهندگان و متخصصان AI خلاق هستیم."
              keywords="استخدام برنامه نویس, کار در هوش مصنوعی, فرصت شغلی, استخدام frontend, کارآموزی AI, استخدام تهران"
            />
            <Careers />
          </>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <NavigationContext.Provider value={{ 
      page, setPage, 
      serviceId, setServiceId, 
      blogPostId, setBlogPostId, 
      templateId, setTemplateId, 
      scrollToSection 
    }}>
      <div className="min-h-screen relative flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {renderContent()}
        </main>

        <Footer />
        
        {/* Functional Chat Widget */}
        <ChatWidget />
      </div>
    </NavigationContext.Provider>
  );
};

export default App;
