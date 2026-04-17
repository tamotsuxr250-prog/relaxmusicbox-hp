import Image from "next/image";
import Link from "next/link";

const TUNECORE_URL = "https://www.tunecore.co.jp/artists/RELAX-MUSIC-BOX";

const featuredAlbums = [
  { src: "/images/rain.jpg", title: "Rain (オルゴール)", year: "2026" },
  { src: "/images/spring-graduation.jpg", title: "春の卒業ソングオルゴール", year: "2026" },
  { src: "/images/soothing-ballad.jpg", title: "心やすらぐバラードオルゴール", year: "2025" },
  { src: "/images/relaxing-kpop.jpg", title: "リラックスK-POPオルゴール", year: "2025" },
];

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-6">
              Music for your peaceful moments
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
              癒しのオルゴール音楽を、
              <br />
              世界に届ける。
            </h1>
            <p className="text-sm text-muted max-w-md leading-relaxed mb-12">
              合同会社RELAXMUSICBOXは、心安らぐオルゴールアレンジを制作し、
              世界中の音楽配信プラットフォームを通じてお届けしています。
            </p>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="border border-foreground text-foreground text-xs tracking-wider uppercase px-8 py-3 hover:bg-foreground hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-xs tracking-wider uppercase px-8 py-3 text-muted hover:text-foreground transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
          {/* ヒーロー画像グリッド */}
          <div className="grid grid-cols-2 gap-3">
            {featuredAlbums.map((album) => (
              <a key={album.src} href={TUNECORE_URL} target="_blank" rel="noopener noreferrer" className="aspect-square relative overflow-hidden block">
                <Image
                  src={album.src}
                  alt={album.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 区切り線 */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-border" />
      </div>

      {/* 事業セクション */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
            What we do
          </p>
          <h2 className="text-2xl font-light mb-16">事業内容</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <p className="text-[10px] tracking-widest text-muted mb-4">01</p>
                <h3 className="text-base font-medium mb-4">オルゴール音楽制作</h3>
                <p className="text-xs text-muted leading-relaxed">
                  ポップス、アニメ、K-POP、クラシックなど幅広いジャンルの楽曲を、
                  温かみのあるオルゴールサウンドにアレンジ。1,000曲以上の制作実績。
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-muted mb-4">02</p>
                <h3 className="text-base font-medium mb-4">音楽配信</h3>
                <p className="text-xs text-muted leading-relaxed">
                  TuneCore Japanを通じて、Spotify、Apple Music、Amazon Music、
                  YouTube Music、LINE MUSICなど世界中の主要プラットフォームで楽曲を配信。
                </p>
              </div>
            </div>
            {/* 事業セクション画像 */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/images/arigatou.png", alt: "ありがとうの音色オルゴール" },
                { src: "/images/shiroi-koibito.png", alt: "白い恋人達" },
                { src: "/images/prema.jpg", alt: "Prema" },
                { src: "/images/pretender.jpg", alt: "Pretender" },
              ].map((img) => (
                <a key={img.src} href={TUNECORE_URL} target="_blank" rel="noopener noreferrer" className="aspect-square relative overflow-hidden block">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 数字セクション */}
      <section className="bg-accent py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { num: "1,000+", label: "配信楽曲数" },
              { num: "50+", label: "配信プラットフォーム数" },
              { num: "300K+", label: "月間再生数" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-light text-foreground mb-2">
                  {stat.num}
                </p>
                <p className="text-[10px] tracking-wider text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新リリース */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
            Latest Releases
          </p>
          <h2 className="text-2xl font-light mb-12">最新リリース</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/images/rain.jpg", title: "Rain (オルゴール)", year: "2026" },
              { src: "/images/spring-graduation.jpg", title: "春の卒業ソングオルゴール", year: "2026" },
              { src: "/images/soothing-ballad.jpg", title: "心やすらぐバラードオルゴール", year: "2025" },
              { src: "/images/relaxing-kpop.jpg", title: "リラックスK-POPオルゴール", year: "2025" },
              { src: "/images/arigatou.png", title: "ありがとうの音色オルゴール", year: "2025" },
              { src: "/images/shiroi-koibito.png", title: "白い恋人達", year: "2025" },
              { src: "/images/prema.jpg", title: "Prema", year: "2025" },
              { src: "/images/pretender.jpg", title: "Pretender", year: "2025" },
            ].map((album) => (
              <a key={album.src} href={TUNECORE_URL} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="aspect-square relative overflow-hidden mb-3">
                  <Image
                    src={album.src}
                    alt={album.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-xs font-medium group-hover:text-muted transition-colors">{album.title}</p>
                <p className="text-[10px] text-muted">{album.year}</p>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.tunecore.co.jp/artists/RELAX-MUSIC-BOX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-wider text-foreground border-b border-foreground pb-1 hover:text-muted hover:border-muted transition-colors"
            >
              すべてのリリースを見る &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-2xl font-light mb-6">お問い合わせ</h2>
          <p className="text-xs text-muted mb-10 leading-relaxed">
            楽曲制作のご依頼やお問い合わせはお気軽にどうぞ。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-foreground text-foreground text-xs tracking-wider uppercase px-10 py-3 hover:bg-foreground hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
