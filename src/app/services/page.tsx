import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "合同会社RELAXMUSICBOXの音楽配信サービス。Spotify、Apple Music等で癒しのオルゴール音楽を配信中。",
};

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/" },
  { name: "Apple Music", url: "https://music.apple.com/" },
  { name: "Amazon Music", url: "https://music.amazon.co.jp/" },
  { name: "YouTube Music", url: "https://music.youtube.com/" },
  { name: "LINE MUSIC", url: "https://music.line.me/" },
];

const releases = [
  { src: "/images/rain.jpg", title: "Rain (オルゴール)", type: "シングル", year: "2026" },
  { src: "/images/spring-graduation.jpg", title: "春の卒業ソングオルゴール", type: "アルバム", year: "2026" },
  { src: "/images/soothing-ballad.jpg", title: "心やすらぐバラードオルゴール", type: "アルバム", year: "2025" },
  { src: "/images/relaxing-kpop.jpg", title: "リラックスK-POPオルゴール", type: "アルバム", year: "2025" },
  { src: "/images/arigatou.png", title: "ありがとうの音色オルゴール", type: "アルバム", year: "2025" },
  { src: "/images/shiroi-koibito.png", title: "白い恋人達 (オルゴールカバー)", type: "シングル", year: "2025" },
  { src: "/images/prema.jpg", title: "Prema (オルゴールカバー)", type: "シングル", year: "2025" },
  { src: "/images/pretender.jpg", title: "Pretender (オルゴールカバー)", type: "シングル", year: "2025" },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
        Services
      </p>
      <h1 className="text-3xl font-light mb-6">サービス</h1>
      <p className="text-sm text-muted max-w-xl leading-relaxed mb-20">
        TuneCore Japanを通じて、世界中の音楽配信プラットフォームで
        1,000曲以上のオルゴールアレンジ楽曲を配信しています。
      </p>

      {/* リリース一覧 */}
      <section className="mb-24">
        <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
          Releases
        </p>
        <h2 className="text-xl font-light mb-10">リリース楽曲</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {releases.map((r) => (
            <div key={r.src} className="group">
              <div className="aspect-square relative overflow-hidden mb-3">
                <Image
                  src={r.src}
                  alt={r.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="text-xs font-medium">{r.title}</p>
              <p className="text-[10px] text-muted">
                {r.type} / {r.year}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="https://www.tunecore.co.jp/artists/RELAX-MUSIC-BOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs tracking-wider text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
          >
            すべてのリリースを見る（TuneCore） &rarr;
          </a>
        </div>
      </section>

      {/* 配信プラットフォーム */}
      <section className="mb-24">
        <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
          Platforms
        </p>
        <h2 className="text-xl font-light mb-10">配信プラットフォーム</h2>
        <div className="border-t border-border">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 border-b border-border group"
            >
              <span className="text-sm group-hover:text-muted transition-colors">
                {p.name}
              </span>
              <span className="text-xs text-muted group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 制作依頼 */}
      <section>
        <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
          Custom Order
        </p>
        <h2 className="text-xl font-light mb-6">楽曲制作のご依頼</h2>
        <div className="max-w-xl">
          <p className="text-sm text-muted leading-loose mb-4">
            オリジナル楽曲のオルゴールアレンジ制作も承っております。
            結婚式、記念日、プレゼントなど、特別な場面に合わせた
            オーダーメイドのオルゴール楽曲をお作りします。
          </p>
          <a
            href="/contact"
            className="inline-block text-xs tracking-wider text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
          >
            お問い合わせはこちら &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
