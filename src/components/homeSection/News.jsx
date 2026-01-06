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
    <div className="bg-white px-4 md:px-36 py-16 pb-5 font-sans text-[#4C4C4C] ">
      <div className="">
        {/* Tab Header */}
        <div className="flex border-b-2 border-gray-100 mb-16">
          <button
            onClick={() => setActiveTab('announcements')}
            className={`flex-1 pb-2 px-6 text-[24px] md:text-[28px] font-bold transition-all relative rounded-lg ${activeTab === 'announcements' ? 'text-[#FFA500]' : 'text-[#B7B7B7]'}`}
          >
            お知らせ
            {activeTab === 'announcements' && (
              <span className="absolute bottom-[-0.5px] left-0 right-0 h-1 bg-[#FFA500]"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('press')}
            className={`flex-1 pb-2 text-[24px] md:text-[28px] font-bold transition-all relative ${activeTab === 'press' ? 'text-[#FFA500]' : 'text-[#B7B7B7]'}`}
          >
            プレスリリース
            {activeTab === 'press' && (
              <span className="absolute bottom-[-0.5px] left-0 right-0 h-1 bg-[#FFA500]"></span>
            )}
          </button>
        </div>

        {/* News List */}
        <div className="px-20">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer border-b border-gray-100 pb-8 last:border-0">
              <div className="flex items-center gap-6 mb-3">
                {/* Increased Date Font Size */}
                <span className="text-[18px] text-[#333333] font-[400] font-inter">{item.date}</span>
                {/* Increased Tag Font Size */}
                <span className="bg-[#E8E4E4] text-[#4C4C4C] font-[400] font-inter text-[14px] px-8 py-1 rounded-full font-medium">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-[20px] md:text-[22px] text-[#333333] font-medium leading-relaxed group-hover:text-[#FFA500] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="bg-[#FFA500] text-white px-40 py-4  rounded-full font-bold text-[20px] hover:bg-[#e69500] transition-all shadow-md">
            もっとみる
          </button>
        </div>
      </div>
    </div>
  );
}