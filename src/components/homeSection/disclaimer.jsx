export default function Disclaimer() {
    return (
      <footer className="px-40 py-20 bg-white pt-5 pb-5">
        <div className="max-w-6xl mx-auto space-y-8 text-[14px] leading-[1.8] text-[#888] font-inter">
          
          <div className="flex gap-4">
            <span className="font-bold flex-shrink-0">【重要】</span>
            <div className="space-y-1">
              <p>本ウェブサイトは日本居住者を対象としたものではありません。</p>
              <p>CFDは複雑な金融商品であり、レバレッジの影響により急速に資金を失う高いリスクを伴います。取引前にリスク開示をよくお読みください。</p>
              <p>本ウェブサイト上の情報は、投資助言・推奨・勧誘を構成するものではありません。</p>
            </div>
          </div>
  
          <div className="space-y-6">
            <div className="flex gap-6">
              <span className="flex-shrink-0 w-4">*1</span>
              <p>本ページに記載のスプレッドは参考値（平均値等）であり、市場環境・流動性・時間帯等により変動します。流動性が低い時間帯等ではスプレッドが拡大し、市況が落ち着くと通常に戻る場合があります。最新の条件は取引プラットフォームでご確認ください。</p>
            </div>
            <div className="flex gap-6">
              <span className="flex-shrink-0 w-4">*2</span>
              <div className="space-y-1">
                <p>当社では入金および出金に手数料をいただいておりません。ただし、銀行や電子決済システム（EPS）が独自に手数料を課す場合があります。</p>
                <p>出金は迅速な処理を目指しており、ほとんどの取引は数分以内に完了する場合がありますが、決済事業者側で追加の処理時間を要することがあります。</p>
                <p>最小取引単位・必要証拠金・強制決済の条件は銘柄や口座タイプ等により異なります。</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="flex-shrink-0 w-4">*3</span>
              <p>取引開始前に商品仕様・取引条件をご確認のうえ、余裕をもった資金管理を行ってください。</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }