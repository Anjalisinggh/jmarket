'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#434343] text-white px-4 sm:px-6 md:px-12 lg:px-40 pt-12 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-20">
            <div className="">
                {/* Navigation Links - Organized into 5 rows */}
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
                    {/* Row 1: 5 links */}
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
                        {["TOP", "トレーディング", "取引口座タイプ", "入金及び出金", "クライアント保護"].map((link, idx) => (
                            <a key={idx} href="#" className="text-[14px] sm:text-[15px] md:text-[16px] text-white font-bold hover:text-gray-300 transition-colors whitespace-nowrap">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Row 2: 6 links */}
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
                        {["マーケット", "外国為替", "コモディティ", "株式", "インデックス", "仮想通貨"].map((link, idx) => (
                            <a key={idx} href="#" className="text-[14px] sm:text-[15px] md:text-[16px] text-white font-bold hover:text-gray-300 transition-colors whitespace-nowrap">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Row 3: 4 links */}
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
                        {["プラットフォーム", "MetaTrader 5", "MetaTrader 4", "MetaTraderモバイルアプリ"].map((link, idx) => (
                            <a key={idx} href="#" className="text-[14px] sm:text-[15px] md:text-[16px] text-white font-bold hover:text-gray-300 transition-colors whitespace-nowrap">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Row 4: 6 links */}
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
                        {["教育", "経済カレンダー", "通貨コンバーター", "取引記事", "教育ビデオ", "ヘルプセンター"].map((link, idx) => (
                            <a key={idx} href="#" className="text-[14px] sm:text-[15px] md:text-[16px] text-white font-bold hover:text-gray-300 transition-colors whitespace-nowrap">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Row 5: 5 links */}
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
                        {["会社", "法的文書", "企業ニュース", "取引記事", "お問い合わせ"].map((link, idx) => (
                            <a key={idx} href="#" className="text-[14px] sm:text-[15px] md:text-[16px] text-white font-bold hover:text-gray-300 transition-colors whitespace-nowrap">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Legal Disclaimer Text */}
                <div className="text-[14px] sm:text-[16px] md:text-[18px] text-white leading-[20px] sm:leading-[22px] md:leading-[24px]">
                    <p className="mb-3 sm:mb-4">
                        JGM International Pty Limitedは、バヌアツ金融サービス委員会（VFSC）が定める金融ディーラーライセンス クラスA・B・Cの下で認可を受けた、バヌアツ所在のライセンス保有金融ディーラー（登録番号700565）です。JGM International Pty Limitedの登録事務所所在地は、Law Partners House, Kumul Highway, Port Vila, Vanuatuです。
                    </p>
                    <p className="mb-3 sm:mb-4">
                        JGM Fintech Solutions Ltdは、登録番号 HE 471409 のもと、キプロスに登記されており、所在地は Aspelia Court, Floor 1, Office 103, Sofias Dimitra & List, 3052 Periochi Apostolos Andreas, Limassol, Cyprus です。同社は JGM International Pty Limited に対し、決済関連サービスを提供しています。
                    </p>
                    <p className="mb-3 sm:mb-4">
                        リスク警告：CFDは複雑な金融商品であり、レバレッジの影響により急速に資金を失う高いリスクを伴います。CFDの仕組みを十分に理解しているか、また資金損失のリスクを許容できるかを慎重にご検討ください。弊社のリスク開示をよくお読みいただき、内容を十分にご理解ください。
                    </p>
                    <p className="mb-3 sm:mb-4">
                        JGM International Pty Limitedは、日本の金融庁（JFSA）の監督下にはなく、日本国内において金融商品を提供したり、金融サービスの勧誘とみなされる活動には関与していません。本ウェブサイトは、日本居住者を対象としたものではありません。
                    </p>
                    <p className="mb-3 sm:mb-4">
                        本ウェブサイト上の情報は、投資助言、推奨、または投資活動への勧誘を構成するものではありません。ユーザーは本ウェブサイトにアクセスすることで、その内容との関わりが自己の判断による個人的かつ任意の行為であることを認識するものとします。本ウェブサイトの内容は、JMarketsが提供する金融サービスや商品に関する契約の申込みまたは勧誘を構成するものではありません。
                    </p>
                    <p className="mb-3 sm:mb-4">
                        JMarketsでは、スムーズな資金管理体験を提供することをお約束します。入金は即時に処理され、決済プロバイダーからの確認が済み次第、取引口座に反映されます。出金リクエストも迅速に対応され、通常は数分以内に処理されます。資金が弊社システムを離れた後の処理時間は、ご利用の決済プロバイダーによって異なります。
                    </p>
                </div>
            </div>
        </footer>
    );
}