import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
};

const legalInfo = [
  ["販売業者", "合同会社RELAXMUSICBOX"],
  ["代表責任者", "髙根沢玲"],
  ["所在地", "東京都練馬区高松4-19-27-403"],
  ["メールアドレス", "rmb.studio86@gmail.com"],
  ["販売価格", "各配信プラットフォームの定める価格に準ずる"],
  ["商品の引渡し時期", "音楽配信プラットフォーム上で即時提供"],
  ["支払方法", "各配信プラットフォームの定める方法に準ずる"],
  [
    "返品・キャンセル",
    "デジタルコンテンツの性質上、返品・キャンセルには応じかねます",
  ],
];

export default function Legal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
        Legal
      </p>
      <h1 className="text-3xl font-light mb-16">特定商取引法に基づく表記</h1>

      <div className="border-t border-border">
        {legalInfo.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-3 border-b border-border py-5"
          >
            <p className="text-xs text-muted tracking-wider">{label}</p>
            <p className="text-sm col-span-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
