const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME;

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white flex flex-col items-center justify-center px-4 py-16 space-y-10 max-w-screen-xl mx-auto">
      <p className="text-xs text-gray-400 text-center mt-4">
        最終更新：{buildTime ? new Date(buildTime).toLocaleString('ja-JP') : '取得中…'}
      </p>
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
        <p className="mb-8">
          <a href="https://note.com/tasu9ex" target="_blank" className="underline text-sm text-gray-300">
            開発ストーリーを見る（note）｜週一更新
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center mt-8 space-y-4">
        <p className="text-sm text-center text-gray-300">
          テストユーザー募集中です。フィードバック・意見や感想をこちらにお願いします。
        </p>

        <a
          href="https://discord.gg/aETGfuBgFy"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 md:px-10 py-3 text-base sm:text-lg md:text-xl bg-[#5865F2] text-white border border-white rounded-full shadow-md hover:bg-[#4752c4] hover:scale-105 transition-transform duration-200 cursor-pointer whitespace-nowrap"
        >
          <span className="block w-[20ch] text-center">Discordコミュニティに参加</span>
        </a>
      </div>

      {/* プロトタイプUI紹介（iPhone風枠で表示） */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/party/home"
          className="px-6 sm:px-8 md:px-10 py-3 text-base sm:text-lg md:text-xl bg-[#f43f5e] text-white border border-white rounded-full shadow-md hover:bg-[#e11d48] hover:scale-105 transition-transform duration-200 cursor-pointer whitespace-nowrap"
        >
          <span className="block w-[20ch] text-center">🧪 プロトタイプを試す</span>
        </a>
      </div>
      <section className="text-center mt-8 bg-primary py-10 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">🔧 プロトタイプ イメージ</h2>
        <p className="text-md max-w-md mx-auto mb-6">
          現在UIを開発中です。以下はそのイメージ画像です。
        </p>

        {/* PC表示用：プロトタイプイメージ画像 */}
        <div className="hidden sm:flex justify-center">
          <img
            src="/mockPICTURE.png"
            alt="プロトタイプイメージ"
            className="w-full max-w-[393px] h-auto aspect-[393/752] rounded-[40px] shadow-2xl object-cover"
          />
        </div>

        {/* スマホ表示用：プロトタイプイメージ画像 */}
        <div className="sm:hidden">
          <img
            src="/mockPICTURE.png"
            alt="プロトタイプイメージ"
            className="w-1/2 max-w-[393px] mx-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      <br />
      <br />

      {/* ユーザー分析・新構想まとめセクション */}
      <section className="mt-32 text-white text-center max-w-4xl space-y-12 px-4">
        <h2 className="text-2xl font-bold">🧩 フルパ予約サービスの進化とこれから</h2>

        {/* ② どんな人にどう刺さってきたか */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-semibold">🎯 ユーザーテストで見えてきた課題と共感</h3>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
            <li>「仲間は欲しいけど、誘うのはちょっと重い」</li>
            <li>「Discordや掲示板は、時間が合わない / 人が多すぎる」</li>
            <li>「もう少しだけ“戦術的”に組みたい」</li>
          </ul>
          <p className="text-sm text-gray-300 mt-2">
            そんな声をもとに、「予約制」「成立条件あり」「プロフィールつき」などの仕組みを試行中です。
          </p>
        </div>

        {/* ③ どう進化してきたか */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-semibold">🚀 差別化から“体験”へ</h3>
          <p className="text-sm sm:text-base">
            最初のαテストでは「何が違うの？」という声が多く、構想の言語化に苦労しました。<br />
            しかし第2弾では、「前よりめっちゃ良くなった」「すごい！」といったリアクションが増加。<br />
            差別化を“語る”のではなく、“体験で伝える”UXへと手応えを感じ始めています。
          </p>
        </div>

        {/* ④ 今後どう広げるか */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-semibold">🔭 今後のアップデートと挑戦</h3>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
            <li>より柔軟な参加条件・マッチ成立制度</li>
            <li>安心できるプロフィール設計と過去履歴の活用</li>
            <li>「フルパに入りやすい空気感」のデザイン</li>
            <li>評価や信用スコアによる“組みやすさ”の最適化</li>
          </ul>
          <p className="text-sm text-gray-300 mt-2">
            小さく作って、試して、また改善する。そんな積み重ねで、フルパが当たり前の世界を目指します。
          </p>
        </div>
      </section>

      <footer className="mt-25 w-full flex justify-center">
        <section className="text-sm text-gray-200 w-full max-w-4xl px-4 py-[60px] rounded-lg bg-[#21645f] shadow-xl">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src="/avatar.png"
              alt="たすくアイコン"
              className="rounded-full object-cover w-24 h-24 ring-2 ring-white shadow"
            />
            <div className="space-y-2">
              <p>
                <strong>開発者：たすく（大学生ゲーマー）</strong><br />
                AIと共に「遊ぶ約束のコストを下げる世界」を目指して、日々構想と開発に挑戦中。<br /><br />
                #フルパを当たり前にする大学生
              </p>
              <div className="text-xs text-gray-400 space-y-0.5">
                <p>📧 fullparty.dev@gmail.com</p>
                <p>🐦 <a href="https://twitter.com/tqsu9ex" target="_blank" className="underline">X（@tqsu9ex）</a></p>
                <p>📘 <a href="https://note.com/tasu9ex" target="_blank" className="underline">noteで開発背景や構想を発信しています</a></p>
                <p>💬 <a href="https://discord.gg/aETGfuBgFy" target="_blank" className="underline">Discord コミュニティに参加する</a></p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
