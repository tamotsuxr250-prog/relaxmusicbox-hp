import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "合同会社RELAXMUSICBOX",
    template: "%s | 合同会社RELAXMUSICBOX",
  },
  description:
    "合同会社RELAXMUSICBOXは、癒しのオルゴール音楽を世界に届ける音楽配信事業を行っています。",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Company" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* ヘッダー */}
        <header className="border-b border-border sticky top-0 z-50 bg-white">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase"
            >
              RELAXMUSICBOX
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-wider text-muted hover:text-foreground transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* モバイルメニュー */}
            <nav className="flex md:hidden items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[10px] tracking-wider text-muted hover:text-foreground transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-1">{children}</main>

        {/* フッター */}
        <footer className="border-t border-border mt-20">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                  RELAXMUSICBOX
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  合同会社RELAXMUSICBOX
                  <br />
                  癒しのオルゴール音楽を世界に届ける
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase mb-4">
                  Menu
                </p>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase mb-4">
                  Legal
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/legal"
                      className="text-xs text-muted hover:text-foreground transition-colors"
                    >
                      特定商取引法に基づく表記
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-xs text-muted hover:text-foreground transition-colors"
                    >
                      プライバシーポリシー
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-12 pt-8 text-center">
              <p className="text-[10px] text-muted tracking-wider">
                &copy; 2026 RELAXMUSICBOX LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
