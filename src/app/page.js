export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white flex flex-col items-center justify-center px-4 py-16 space-y-10">
      {/* バナー画像 */}
      <img src="/banner.png" alt="#フルパを当たり前にする大学生" className="w-full max-w-3xl rounded-lg shadow mt-16" />

      <section className="text-center">
        <br />
        <br />
        <h1 className="text-4xl font-bold mb-4">
          🎮 フルパを当たり前にする世界へ
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          「今夜あと1人が見つからない──」<br />
          そんな夜を、なくしたい。<br />
          誰でも気軽にフルパが組めるマッチングサービスを開発中です。
          <br />
          <br />
        </p>
        <div className="h-8" />
      </section>

      {/* 思想ビジュアル */}
      <div className="flex justify-center mt-8">
        <img
          src="/fullparty.png"
          alt="思想ビジュアル：フルパ集結中"
          className="w-full max-w-3xl rounded-xl shadow-md"
        />
      </div>

      {/* プロトタイプUI紹介 */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">🔧 プロトタイプ イメージ</h2>
        <p className="text-md max-w-md mx-auto mb-6">
          現在UIを開発中です。以下は予約画面のイメージ例です（後日差し替え予定）。
        </p>
        <img
          src="/mockUI.png"
          alt="モックUIイメージ"
          className="w-full max-w-2xl rounded-lg shadow"
        />
      </section>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="https://note.com/tasu9ex"
          target="_blank"
          rel="noopener noreferrer"
          className="px-20 py-10 text-2xl border border-green-600 text-green-600 rounded-full hover:bg-green-50 hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          📝 構想を見る（note）
        </a>

        <a
          href="#"
          className="px-20 py-10 text-2xl border border-green-600 text-green-600 rounded-full hover:bg-green-50 hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          🧪 プロトタイプを見る
        </a>
      </div>
      <br />
      <br />

      <hr className="w-20 border-gray-300" />

      <footer className="mt-24 w-full flex justify-center">
        <section className="text-sm text-gray-200 w-full max-w-md px-4 py-[60px] rounded-lg" style={{ backgroundColor: "#222222" }}>
          <div className="flex items-start gap-4">
            <img
              src="/avatar.png"
              alt="たすくアイコン"
              style={{ width: "128px", height: "128px" }}
              className="rounded-full object-cover mt-1"
            />
            <div className="space-y-1">
              <p>
                <strong>開発者：たすく（大学生ゲーマー起業家）</strong><br />
                AIと共に「遊ぶ約束のコストを下げる世界」を目指して、日々構想と開発に挑戦中。
              </p>
              <div className="text-xs text-gray-500 space-y-0.5">
                <p>📧 fullparty.dev@gmail.com</p>
                <p>🐦 <a href="https://twitter.com/tasu9ex" target="_blank" className="underline">X（@tasu9ex）</a></p>
                <p>📘 <a href="https://note.com/tasu9ex" target="_blank" className="underline">noteページ</a></p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
