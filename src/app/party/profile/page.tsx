"use client";
import SmartphoneLayout from "@/components/SmartphoneLayout";
import { useUserStore, usePartyTabStore } from "@/lib/store";
import { mockUsers } from "@/lib/mockUsers";

export default function Profile() {
  const currentUser = useUserStore((state) => state.getCurrentUser());
  const selectedGameTitle = usePartyTabStore((state) => state.selectedGameTitle);

  if (!currentUser) {
    return <div className="p-4">ユーザー情報を取得できませんでした。</div>;
  }

  return (
    <SmartphoneLayout>
      <div className="h-full relative bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto max-h-full p-4 text-sm text-black">
          {/* アイコンとバナー */}
          <div className="relative mb-4">
            <img
              src={currentUser.banner}
              alt="Banner"
              className="h-24 w-full object-cover rounded-t-md"
            />
            <img
              src={currentUser.avatar}
              alt="Avatar"
              className="w-16 h-16 rounded-full border-2 border-white absolute left-4 -bottom-8"
            />
          </div>

          {/* 名前とひとこと */}
          <div className="mt-8 mb-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{currentUser.name}</h2>
              <button className="text-xs text-blue-600 border border-blue-600 rounded-full px-2 py-0.5 hover:bg-blue-50">
                プロフィールを編集
              </button>
            </div>
            <p className="text-gray-600 text-sm">よろしくお願いします！</p>
          </div>

          {/* サービスID + デバイス */}
          <div className="mb-4 flex justify-between items-start">
            <div>
              <p className="text-gray-500">ユーザーID</p>
              <p className="font-mono">{currentUser.id}</p>
            </div>
            <div className="pl-4">
              <p className="text-gray-500">デバイス</p>
              <div className="text-sm space-x-1">
                {currentUser.devices?.map((d) => (
                  <img
                    key={d}
                    src={`/assets/icons/devices/${d}.png`}
                    alt={d}
                    className="inline w-5 h-5 mr-1"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ベストクリップ */}
          <div className="mb-6">
            <p className="text-gray-500">マイクリップ</p>
            <div className="rounded overflow-hidden">
              <video
                controls
                className="w-full rounded border"
                src={currentUser.clipUrl}
              >
                お使いのブラウザは動画タグに対応していません。
              </video>
            </div>
          </div>

          {/* デバイス表示はユーザーIDの隣に統合 */}

          {/* APEXカード内にゲームIDとVCツールID統合 */}
          <div className="mb-6 border rounded p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-black">{selectedGameTitle}</p>
              <button className="text-xs text-blue-600 border border-blue-600 rounded-full px-2 py-0.5 hover:bg-blue-50">
                編集
              </button>
            </div>

            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500">ゲーム内ID</p>
                <p>{currentUser.ingameId[selectedGameTitle]?.trim()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">VCツールID</p>
                <p>{currentUser.vcId[selectedGameTitle]?.trim()}</p>
              </div>
            </div>
          </div>
          <div className="mb-6 border-2 border-dashed rounded p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-gray-400">ゲームタイトルを追加</p>
              <button className="text-xs text-green-600 border border-green-600 rounded-full px-2 py-0.5 hover:bg-green-50">
                追加
              </button>
            </div>
          </div>
        </div>
        <div className="h-28" />
      </div>
    </SmartphoneLayout>
  );
}