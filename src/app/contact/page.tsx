import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "合同会社RELAXMUSICBOXへのお問い合わせ。楽曲制作のご依頼やご質問はこちらからどうぞ。",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
        Contact
      </p>
      <h1 className="text-3xl font-light mb-6">お問い合わせ</h1>
      <p className="text-sm text-muted max-w-xl leading-relaxed mb-20">
        楽曲制作のご依頼、取材、その他のお問い合わせはメールにてご連絡ください。
      </p>

      {/* メール */}
      <div className="border-t border-border py-10 mb-20">
        <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-6">
          Email
        </p>
        <a
          href="mailto:rmb.studio86@gmail.com"
          className="text-lg font-light hover:text-muted transition-colors"
        >
          rmb.studio86@gmail.com
        </a>
        <p className="text-[10px] text-muted mt-3">
          通常2〜3営業日以内にご返信いたします
        </p>
      </div>

      {/* FAQ */}
      <section>
        <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
          FAQ
        </p>
        <h2 className="text-xl font-light mb-10">よくあるご質問</h2>
        <div className="border-t border-border">
          {[
            {
              q: "オルゴール楽曲の制作を依頼できますか？",
              a: "はい、オリジナル楽曲のオルゴールアレンジ制作を承っております。お気軽にメールにてご相談ください。",
            },
            {
              q: "楽曲を商用利用できますか？",
              a: "楽曲のライセンスについては個別にご相談ください。用途に応じてご案内いたします。",
            },
            {
              q: "どの配信プラットフォームで聴けますか？",
              a: "Spotify、Apple Music、Amazon Music、YouTube Music、LINE MUSICなど、主要な音楽配信サービスでお聴きいただけます。",
            },
          ].map((faq) => (
            <div key={faq.q} className="py-6 border-b border-border">
              <h3 className="text-sm font-medium mb-2">Q. {faq.q}</h3>
              <p className="text-xs text-muted leading-relaxed">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
