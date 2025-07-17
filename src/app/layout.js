import "./globals.css";

export const metadata = {
  title: "フルパを当たり前にする世界へ",
  description: "今夜あと1人が見つからない──その夜をなくすために。",
  openGraph: {
    title: "フルパを当たり前にする世界へ",
    description: "今夜あと1人が見つからない──その夜をなくすために。",
    url: "https://fullparty.dev",
    siteName: "fullparty",
    images: [
      {
        url: "https://fullparty-app.vercel.app/banner.png",
        width: 1200,
        height: 630,
        alt: "フルパを当たり前にする大学生",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tasu9ex",
    images: ["https://fullparty-app.vercel.app/banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
