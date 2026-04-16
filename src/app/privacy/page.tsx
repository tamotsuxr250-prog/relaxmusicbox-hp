import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
        Privacy Policy
      </p>
      <h1 className="text-3xl font-light mb-16">プライバシーポリシー</h1>

      <div className="max-w-2xl space-y-10">
        <p className="text-sm text-muted leading-loose">
          合同会社RELAXMUSICBOX（以下「当社」）は、お客様の個人情報の保護に努めております。
          以下のとおりプライバシーポリシーを定め、個人情報の適切な取扱いに取り組んでまいります。
        </p>

        <section>
          <h2 className="text-sm font-medium mb-3">1. 収集する情報</h2>
          <p className="text-xs text-muted leading-loose">
            当社は、お問い合わせの際にメールアドレス、お名前等の個人情報をご提供いただく場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-3">2. 利用目的</h2>
          <ul className="text-xs text-muted leading-loose space-y-1 pl-4">
            <li>- お問い合わせへの回答</li>
            <li>- 楽曲制作のご依頼に関するご連絡</li>
            <li>- サービスの改善・新サービスの開発</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-3">3. 第三者提供</h2>
          <p className="text-xs text-muted leading-loose">
            当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-3">4. アクセス解析</h2>
          <p className="text-xs text-muted leading-loose">
            当サイトでは、サービス向上のためアクセス解析ツールを使用する場合があります。
            これらのツールはCookie等を使用して情報を収集しますが、個人を特定する情報は含まれません。
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-3">5. ポリシーの変更</h2>
          <p className="text-xs text-muted leading-loose">
            本ポリシーの内容は、法令変更やサービス内容の変更に伴い、予告なく改定する場合があります。
            変更後のポリシーは、当サイトに掲載した時点で効力を生じます。
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium mb-3">6. お問い合わせ</h2>
          <p className="text-xs text-muted leading-loose">
            個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
          </p>
          <p className="text-xs text-muted mt-2">
            合同会社RELAXMUSICBOX
            <br />
            メール：
            <a
              href="mailto:rmb.studio86@gmail.com"
              className="text-foreground hover:text-muted transition-colors border-b border-foreground"
            >
              rmb.studio86@gmail.com
            </a>
          </p>
        </section>

        <p className="text-[10px] text-muted pt-6 border-t border-border">
          制定日：2026年4月17日
        </p>
      </div>
    </div>
  );
}
