'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Frequently() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "JMarketsは安全ですか？",
      answer: "JMarketsでは、お客さまの資産の分別管理、ログイン／取引時の多要素認証、通信の暗号化、不正アクセス検知など、複数のセキュリティ対策を講じています。",
      link: "詳しくはこちら"
    },
    {
      question: "JMarketsアプリは無料で使えますか？",
      answer: "はい、アプリのダウンロードおよび基本機能の利用は無料です。一部の取引手数料については別途発生いたします。",
    },
    {
      question: "JMarketsの手数料は？",
      answer: "取引の種類や口座タイプによって異なります。詳細は手数料一覧ページをご確認ください。",
    },
    {
      question: "米国株投資で、他の証券会社に比べてJMarketsの強みは何ですか？",
      answer: "業界最低水準の手数料に加え、リアルタイムの市場データ提供や、独自の分析ツールを無料で提供している点が強みです。",
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white px-6 py-20 pt-15 pb-5 font-sans text-[#333333] ">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <h2 className="text-[27px] font-bold -mb-2 ">よくあるご質問</h2>

        <div >
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 last:border-b-0">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 flex justify-between items-center text-left hover:bg-gray-50 transition-colors px-2"
              >
                <span className="text-[20px]  font-bold leading-tight">
                  {item.question}
                </span>
                {/* Only show arrows for items that look like accordions in the design */}
                {index >= 2 && (
                  <ChevronDown 
                    className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                )}
              </button>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-8 px-2">
                  <p className="text-[18px] leading-relaxed text-[#333333] mb-4 -mt-1">
                    {item.answer}
                  </p>
                  {item.link && (
                    <a href="#" className="text-[18px] text-[#C0C0C0] text-bold -mb-2 -mt-1 hover:text-gray-500 transition-colors underline-offset-4">
                      {item.link}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}