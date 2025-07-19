export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white flex flex-col items-center justify-center px-4 py-16 space-y-10 max-w-screen-xl mx-auto">
      {/* バナー画像 */}
      <img src="/banner.png" alt="#フルパを当たり前にする大学生" className="w-full max-w-3xl rounded-lg shadow mt-16" />

      {/* キャッチコピー（思想） */}
      <div className="text-center max-w-2xl mt-20">
        <h2 className="text-3xl font-bold mb-4">🎮 フルパを当たり前にする世界へ</h2>
        <p className="text-lg leading-relaxed">
          「今夜あと1人が見つからない──」<br />
          そんな夜を、なくしたい。<br />
          誰でも気軽にフルパが組めるマッチングサービスを開発中です。
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="https://note.com/tasu9ex"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 sm:px-12 md:px-16 py-5 text-lg sm:text-xl md:text-2xl bg-primary text-white border border-white rounded-full shadow-md hover:bg-[#184437] hover:scale-105 transition-transform duration-200 cursor-pointer whitespace-nowrap"
        >
          📝 構想を見る（note）
        </a>

        <a
          href="/party/home"
          className="px-8 sm:px-12 md:px-16 py-5 text-lg sm:text-xl md:text-2xl bg-primary text-white border border-white rounded-full shadow-md hover:bg-[#184437] hover:scale-105 transition-transform duration-200 cursor-pointer whitespace-nowrap"
        >
          🧪 モックを触る
        </a>
      </div>

      {/* プロトタイプUI紹介（iPhone風枠で表示） */}
      <section className="text-center mt-16 bg-primary py-10 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">🔧 モック イメージ</h2>
        <p className="text-md max-w-md mx-auto mb-6">
          現在UIを開発中です。以下はそのイメージ画像です。
        </p>

        {/* PC表示用：モックイメージ画像 */}
        <div className="hidden sm:flex justify-center">
          <img
            src="/mockPICTURE.png"
            alt="プロトタイプイメージ"
            className="w-[50vw] max-w-[393px] h-auto aspect-[393/752] rounded-[40px] shadow-2xl object-cover"
          />
        </div>

        {/* スマホ表示用：モックイメージ画像 */}
        <div className="sm:hidden">
          <img
            src="/mockPICTURE.png"
            alt="モックイメージ"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      <br />
      <br />

      <hr className="w-20 border-gray-300" />

      <footer className="mt-24 w-full flex justify-center">
        <section className="text-sm text-gray-200 w-full max-w-4xl px-4 py-[60px] rounded-lg bg-[#0f2a28] shadow-xl">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="/avatar.png"
              alt="たすくアイコン"
              className="rounded-full object-cover w-24 h-24 ring-2 ring-white shadow"
            />
            <div className="space-y-2">
              <p>
                <strong>開発者：たすく（大学生ゲーマー起業家）</strong><br />
                AIと共に「遊ぶ約束のコストを下げる世界」を目指して、日々構想と開発に挑戦中。
              </p>
              <div className="text-xs text-gray-400 space-y-0.5">
                <p>📧 fullparty.dev@gmail.com</p>
                <p>🐦 <a href="https://twitter.com/tqsu9ex" target="_blank" className="underline">X（@tqsu9ex）</a></p>
                <p>📘 <a href="https://note.com/tasu9ex" target="_blank" className="underline">noteページ</a></p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
