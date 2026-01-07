'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useFadeInUp, useStaggerFadeIn } from '@/utils/scrollAnimations';

export default function Frequently() {
    const headerRef = useFadeInUp(0);
    const faqListRef = useStaggerFadeIn(0.1);
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
    <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-6 py-12 sm:py-16 md:py-20 pt-10 sm:pt-12 md:pt-15 mb-4 sm:mb-16 md:mb-20 font-sans text-[#333333]">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <h2 ref={headerRef} className="text-[22px] sm:text-[24px] md:text-[27px] font-bold mb-3">よくあるご質問</h2>

        <div ref={faqListRef}>
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#9d9d9d] last:border-b-0">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-4 sm:py-4.5 md:py-5 font-inter flex justify-between items-center text-left hover:bg-gray-50 transition-colors px-2 sm:px-3"
              >
                <span className="text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-tight pr-2 sm:pr-4">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-6 sm:pb-7 md:pb-8 px-2 sm:px-3">
                  <p className="text-[13px] font-inter font-[500] sm:text-[16px] md:text-[18px] leading-relaxed text-[#333333] mb-3 sm:mb-4 -mt-1">
                    {item.answer}
                  </p>
                  {item.link && (
                    <a href="#" className="text-[14px] sm:text-[16px] md:text-[18px] text-[#C0C0C0] text-bold -mb-2 -mt-1 hover:text-gray-500 transition-colors underline-offset-4">
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