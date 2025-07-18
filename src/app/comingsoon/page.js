'use client';

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-primary text-white flex flex-col items-center justify-center px-4 py-24 text-center space-y-6">
      <h1 className="text-4xl font-bold">🧪 Coming Soon...</h1>
      <p className="text-lg">
        現在プロトタイプUIを鋭意開発中です。<br />
        準備が整い次第、ここでお試しいただけます！
      </p>
      <a href="/" className="mt-8 text-primary bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition">
        ← トップへ戻る
      </a>
    </main>
  );
}