"use client";
import SmartphoneLayout from "@/components/SmartphoneLayout";

export default function Profile() {
  return (
    <SmartphoneLayout>
      <div className="h-full relative bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto max-h-full p-4 text-sm text-black">
          {/* アイコンとバナー */}
          <div className="relative mb-4">
            <img
              src="/banner.png"
              alt="Banner"
              className="h-24 w-full object-cover rounded-t-md"
            />
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-16 h-16 rounded-full border-2 border-white absolute left-4 -bottom-8"
            />
          </div>

          {/* 名前とひとこと */}
          <div className="mt-8 mb-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">たすく</h2>
              <button className="text-xs text-blue-600 border border-blue-600 rounded-full px-2 py-0.5 hover:bg-blue-50">
                プロフィールを編集
              </button>
            </div>
            <p className="text-gray-600 text-sm">よろしくお願いします！</p>
          </div>

          {/* サービスID */}
          <div className="mb-4">
            <p className="text-gray-500">ユーザーID</p>
            <p className="font-mono">tasu9ex</p>
          </div>

          {/* ベストクリップ */}
          <div className="mb-6">
            <p className="text-gray-500">マイクリップ</p>
            <div className="rounded overflow-hidden">
              <video
                controls
                className="w-full rounded border"
                src="/myclip.mp4"
              >
                お使いのブラウザは動画タグに対応していません。
              </video>
            </div>
          </div>

          {/* ゲームごとのInGameID */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-500">ゲーム内ID</p>
              <button className="text-xs text-blue-600 border border-blue-600 rounded-full px-2 py-0.5 hover:bg-blue-50">
                編集
              </button>
            </div>
            <ul className="pl-4 list-disc text-sm">
              <li>Apex: tasu9ex</li>
              <li>Valorant: t9ex#JP</li>
            </ul>
          </div>

          {/* VCツールごとのID */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-500">VCツールID</p>
              <button className="text-xs text-blue-600 border border-blue-600 rounded-full px-2 py-0.5 hover:bg-blue-50">
                編集
              </button>
            </div>
            <ul className="pl-4 list-disc text-sm">
              <li>Discord: tasu9#8822</li>
              <li>PSN: tasu9ex</li>
            </ul>
          </div>
        </div>
        <div className="h-28" />
      </div>
    </SmartphoneLayout>
  );
}