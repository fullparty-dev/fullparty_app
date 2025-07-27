const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME;

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
        <p className="mb-8">
          <a href="https://note.com/tasu9ex" target="_blank" className="underline text-sm text-gray-300">
            開発ストーリーを見る（note）
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
        <h2 className="text-2xl font-bold">🧩 フルパ予約サービスの全体像と価値まとめ</h2>

        {/* ユーザーペルソナ */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-semibold">🧑‍💻 ユーザー像と初期リアクション（クローズドαテスト第1弾より）</h3>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
            <li><strong>💥 戦略系エンジョイ勢：</strong> フルパで目的をもって遊びたい層。信頼できる味方を求める。</li>
            <li><strong>🧠 課題共感・提案系：</strong> Discordや掲示板文化への不満が明確。構造的な解決を歓迎。</li>
            <li><strong>🎯 競技志向ロジカル勢：</strong> ロール配分や履歴、レビュー機能などに敏感。UXに厳密な期待あり。</li>
            <li><strong>🫣 安心感重視系：</strong> 初対面プレイに不安があり、プロフィールや過去の情報で信頼を測りたい。</li>
            <li><strong>🎮 素直な直感プレイヤー：</strong> 体験やデザインの“好き”が判断基準。第一印象が重要。</li>
          </ul>
          <p className="text-sm text-gray-300 mt-2">
            ※ クローズドαテスト第1弾にご参加いただいた皆さま、本当にありがとうございました。皆さんの声がこのサービスを育てています。
          </p>
        </div>

        {/* 主な課題と改善ポイント */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-semibold">🛠 主な課題と改善ポイント</h3>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
            <li>🕓 マッチの待ち時間：ON/OFF切替や補欠制度の検討</li>
            <li>✅ 信用の可視化：内部スコア＋レビューのハイブリッド案</li>
            <li>🔁 掲示板との差別化：履歴/ソート/プロフ検索の強調</li>
            <li>🎨 初期UI導線：ログイン直後の体験改善済・継続調整中</li>
            <li>👤 プロフィール強化：プレイ傾向やVC有無などの明記</li>
            <li>📷 安心材料：プロフにクリップ機能を追加検討</li>
          </ul>
        </div>

        {/* 新構想：信用スコア */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-semibold">✨ 新構想：信用スコア × AIマッチ最適化</h3>
          <p className="text-sm sm:text-base">
            パーティ解散後、各プレイヤーに「👍 / 👎 / 評価しない」の選択を提示。外部非公開の内部スコアに反映し、AIが“気が合う人”を上位表示します。
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
            <li><strong>👍：</strong> 信用スコア上昇＋似たタイプを優先表示</li>
            <li><strong>👎：</strong> スコア低下 → 表示頻度ダウン or 制限</li>
            <li><strong>評価なし：</strong> スコア変動なし。ただし最適化対象外に</li>
          </ul>
          <p className="text-xs text-gray-300">
            ※スコアは外部には見えず、安心して評価できる仕組みです。
          </p>
        </div>

        {/* 差別化ポイント */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-semibold text-center">📌 他サービスとの違い</h3>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
            <li>✅ ロール選択ができる</li>
            <li>⏰ 未来の予定をカバー（予約型マッチ対応）</li>
            <li>🧑‍🤝‍🧑 フルパになるまで始まらない</li>
            <li>📜 マッチ履歴が見られる</li>
            <li>🔍 掲示板のように時系列で流れない（充填率・開始時刻でソート）</li>
            <li>🧩 詳細検索（VCツールの有無、デバイス、ランクレンジ）</li>
            <li>📷 プロフィールに1クリップ可能</li>
            <li>🎮 クロスプレイ前提の設計</li>
            <li>🔎 利用者の見える化（現在の募集数）</li>
          </ul>
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
          <p className="text-xs text-gray-400 text-center mt-8">
            最終更新：{buildTime ? new Date(buildTime).toLocaleString('ja-JP') : '取得中…'}
          </p>
        </section>
      </footer>
    </main>
  );
}
