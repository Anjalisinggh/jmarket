'use client';

import { useState } from 'react';

export default function News() {
  const [activeTab, setActiveTab] = useState('announcements');

  const newsItems = [
    { date: "2026/12/09", tag: "お知らせ", title: "令和7年青森県東方沖を震源とする地震に伴う災害救助法の適用について" },
    { date: "2026/12/09", tag: "お知らせ", title: "【復旧のお知らせ】 【iOS日本専用版アプリ】 ウィジェット機能連携に関するお知らせ" },
    { date: "2026/12/09", tag: "お知らせ", title: "【iOS日本専用版アプリ】 ウィジェット機能連携に関するお知らせ" },
    { date: "2026/12/09", tag: "お知らせ", title: "令和7年11月18日大分市佐賀関の大規模火災に伴う災害救助法の適用について" },
    { date: "2026/12/09", tag: "お知らせ", title: "2025年年末年始のお取引と営業時間について" },
    { date: "2026/12/09", tag: "お知らせ", title: "令和7年青森県東方沖を震源とする地震に伴う災害救助法の適用について" },
  ];

  return (
    <div className="bg-white px-4 md:px-20 py-24 font-sans text-[#4C4C4C]">
      <div className="max-w-6xl mx-auto">
        {/* Tab Header */}
        <div className="flex border-b border-gray-100 mb-8">
          <button 
            onClick={() => setActiveTab('announcements')}
            className={`flex-1 pb-4 text-[20px] font-bold transition-all relative ${activeTab === 'announcements' ? 'text-[#FFA500]' : 'text-gray-300'}`}
          >
            お知らせ
            {activeTab === 'announcements' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFA500]"></span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('press')}
            className={`flex-1 pb-4 text-[20px] font-bold transition-all relative ${activeTab === 'press' ? 'text-[#FFA500]' : 'text-gray-300'}`}
          >
            プレスリリース
            {activeTab === 'press' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFA500]"></span>
            )}
          </button>
        </div>

        {/* News List */}
        <div className="space-y-6 pl-10">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer border-b border-gray-50 pb-6 last:border-0">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[14px] text-gray-500">{item.date}</span>
                <span className="bg-[#E5E5E5] text-[#4C4C4C] text-[11px] px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-[16px] leading-relaxed group-hover:text-[#FFA500] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#FFA500] text-white px-16 py-3.5 rounded-full font-bold text-[16px] hover:bg-[#e69500] transition-all shadow-md">
            もっとみる
          </button>
        </div>
      </div>
    </div>
  );
}