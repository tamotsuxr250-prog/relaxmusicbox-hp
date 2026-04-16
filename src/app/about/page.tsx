import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "合同会社RELAXMUSICBOXの会社概要。癒しのオルゴール音楽を世界に届ける音楽配信事業を行っています。",
};

const companyInfo = [
  ["会社名", "合同会社RELAXMUSICBOX"],
  ["代表社員", "髙根沢玲"],
  ["設立日", "2026年4月3日"],
  ["所在地", "東京都練馬区高松4-19-27-403"],
  ["事業内容", "音楽配信事業"],
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
        Company
      </p>
      <h1 className="text-3xl font-light mb-16">会社概要</h1>

      {/* 会社情報テーブル */}
      <div className="border-t border-border">
        {companyInfo.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-3 border-b border-border py-5"
          >
            <p className="text-xs text-muted tracking-wider">{label}</p>
            <p className="text-sm col-span-2">{value}</p>
          </div>
        ))}
      </div>

      {/* 理念 */}
      <section className="mt-24">
        <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
          Philosophy
        </p>
        <h2 className="text-2xl font-light mb-10">私たちの想い</h2>
        <div className="space-y-6 max-w-2xl">
          <p className="text-sm text-muted leading-loose">
            私たちは、オルゴールの優しい音色には人の心を癒す力があると信じています。
          </p>
          <p className="text-sm text-muted leading-loose">
            忙しい日常の中で、ほんの少しでも穏やかな時間を届けたい——
            その想いから、1,000曲以上のオルゴールアレンジを制作し、
            世界中の音楽配信プラットフォームを通じてお届けしてきました。
          </p>
          <p className="text-sm text-muted leading-loose">
            これからも、心安らぐ音楽を通じて、
            世界中の人々の日常に小さな幸せをお届けしてまいります。
          </p>
        </div>
      </section>
    </div>
  );
}
