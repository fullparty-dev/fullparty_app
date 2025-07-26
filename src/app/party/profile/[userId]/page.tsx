"use client";
import SmartphoneLayout from "@/components/SmartphoneLayout";
import { useParams } from "next/navigation";
import { mockUsers } from "@/lib/mockUsers";

export default function Profile() {
  const params = useParams();
  const userId = Array.isArray(params.userId) ? params.userId[0] : params.userId;
  const currentUser = mockUsers.find((user) => user.id === userId);

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
              <button className="text-sm text-blue-600 border border-blue-600 rounded-full px-2 py-0.5">
                ✉️メッセージを送る
              </button>
            </div>
            <p className="text-gray-600 text-sm">よろしくお願いします！</p>
          </div>

          {/* サービスID + デバイス */}
          <div className="mb-4 flex justify-between items-start">
            <div>
              <p className="text-gray-500">ID</p>
              <p className="font-mono text-sm text-gray-700">@{currentUser.id}</p>
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
        </div>
        <div className="h-28" />
      </div>
    </SmartphoneLayout>
  );
}