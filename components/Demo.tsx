
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bot, MessageSquare, TrendingUp, Users, Activity, Settings, Bell, Search, Instagram, Send } from 'lucide-react';

const data = [
  { name: 'شنبه', messages: 400, agents: 240 },
  { name: 'یکشنبه', messages: 300, agents: 139 },
  { name: 'دوشنبه', messages: 200, agents: 980 },
  { name: 'سه‌شنبه', messages: 278, agents: 390 },
  { name: 'چهارشنبه', messages: 189, agents: 480 },
  { name: 'پنج‌شنبه', messages: 239, agents: 380 },
  { name: 'جمعه', messages: 349, agents: 430 },
];

const Demo: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">داشبورد مدیریتی پوان</h1>
            <p className="text-slate-500">خوش آمدید، وضعیت ایجنت‌های شما فعال است.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input type="text" placeholder="جستجو..." className="bg-white dark:bg-slate-800 rounded-lg pr-10 pl-4 py-2 border-none focus:ring-2 focus:ring-brand-red outline-none" />
            </div>
            <button className="bg-white dark:bg-slate-800 p-2 rounded-lg relative">
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold">
              AO
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-green-500 text-sm font-bold flex items-center gap-1">
                +12% <TrendingUp className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-slate-500 text-sm mb-1">ایجنت‌های فعال</h3>
            <p className="text-2xl font-bold">14</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-brand-red/10 p-3 rounded-xl">
                <MessageSquare className="w-6 h-6 text-brand-red" />
              </div>
              <span className="text-green-500 text-sm font-bold flex items-center gap-1">
                +25% <TrendingUp className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-slate-500 text-sm mb-1">پیام‌های پردازش شده</h3>
            <p className="text-2xl font-bold">8,542</p>
          </div>

           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-brand-gold/10 p-3 rounded-xl">
                <Users className="w-6 h-6 text-brand-gold" />
              </div>
              <span className="text-red-500 text-sm font-bold flex items-center gap-1">
                -2% <TrendingUp className="w-3 h-3 rotate-180" />
              </span>
            </div>
            <h3 className="text-slate-500 text-sm mb-1">تعامل کاربران</h3>
            <p className="text-2xl font-bold">45.2K</p>
          </div>

           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-green-500 text-sm font-bold flex items-center gap-1">
                +99% <TrendingUp className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-slate-500 text-sm mb-1">آپتایم سیستم</h3>
            <p className="text-2xl font-bold">99.9%</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-bold mb-6 text-lg">آمار عملکرد هفتگی</h3>
            <div className="h-[300px] w-full dir-ltr">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="messages" stroke="#EF4444" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-bold mb-6 text-lg">فعالیت‌های اخیر</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">پاسخ خودکار به کامنت</p>
                  <p className="text-xs text-slate-500">2 دقیقه پیش</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Send className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">ارسال پست به کانال</p>
                  <p className="text-xs text-slate-500">15 دقیقه پیش</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <Bot className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">آموزش مدل جدید</p>
                  <p className="text-xs text-slate-500">1 ساعت پیش</p>
                </div>
              </div>
            </div>
             <button className="w-full mt-4 py-2 text-sm text-brand-red font-bold hover:bg-brand-red/5 rounded-lg transition-colors">
              مشاهده همه
            </button>
          </div>
        </div>

        {/* Active Agents Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-bold text-lg">ایجنت‌های فعال</h3>
            <button className="bg-brand-red text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors">
              + ایجنت جدید
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500">
                <tr>
                  <th className="p-4">نام ایجنت</th>
                  <th className="p-4">وضعیت</th>
                  <th className="p-4">پلتفرم</th>
                  <th className="p-4">آخرین فعالیت</th>
                  <th className="p-4">تنظیمات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                <tr>
                  <td className="p-4 font-medium">پشتیبان فروشگاه</td>
                  <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">فعال</span></td>
                  <td className="p-4">وب‌سایت</td>
                  <td className="p-4 text-slate-500">همین الان</td>
                  <td className="p-4"><Settings className="w-4 h-4 text-slate-400 cursor-pointer hover:text-brand-red"/></td>
                </tr>
                 <tr>
                  <td className="p-4 font-medium">ادمین اینستاگرام</td>
                  <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">فعال</span></td>
                  <td className="p-4">Instagram</td>
                  <td className="p-4 text-slate-500">5 دقیقه پیش</td>
                  <td className="p-4"><Settings className="w-4 h-4 text-slate-400 cursor-pointer hover:text-brand-red"/></td>
                </tr>
                 <tr>
                  <td className="p-4 font-medium">خبرخوان تلگرام</td>
                  <td className="p-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">در حال آموزش</span></td>
                  <td className="p-4">Telegram</td>
                  <td className="p-4 text-slate-500">2 روز پیش</td>
                  <td className="p-4"><Settings className="w-4 h-4 text-slate-400 cursor-pointer hover:text-brand-red"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Demo;