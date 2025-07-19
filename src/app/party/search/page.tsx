"use client";

import { useRouter } from "next/navigation";
import SmartphoneFrame from "@/components/SmartphoneFrame";
import SmartphoneWrapper from "@/components/SmartphoneWrapper";
import { mockParties } from "@/lib/mockData";
import { PartyCard } from "@/components/PartyCard";
import { useModeStore } from "@/lib/store";

export default function PartySearchPage() {
  const mode = useModeStore((state) => state.selectedMode);
  const router = useRouter();

  return (
    <SmartphoneWrapper>
      <SmartphoneFrame>
        <div className="h-[852px] relative bg-white flex flex-col overflow-hidden">
          {/* 上部ヘッダー */}
          <div className="p-3 border-b border-gray-300 text-sm text-gray-800 font-medium">
            <div className="flex justify-between items-center mb-2">
              <span>21:00 開始予定</span>
              <button className="px-2 py-1 text-xs border rounded">フィルター</button>
            </div>
            <div className="flex bg-gray-200 rounded-full overflow-hidden">
              {["カジュアル", "ランク", "その他"].map((label) => (
                <button
                  key={label}
                  className="w-1/3 py-1 text-xs bg-white text-gray-800"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* カード一覧 */}
          <div className="flex-1 overflow-y-auto px-2 py-2 space-y-2">
            {mockParties
              .filter((p) => p.type === mode)
              .map((party) => (
                <PartyCard key={party.id} party={party} />
              ))}
          </div>

          {/* 投稿ボタン */}
          <div className="absolute bottom-16 right-4">
            <button className="text-3xl bg-primary text-white rounded-full w-12 h-12 shadow-md">+</button>
          </div>

          {/* 下部ナビ */}
          <div className="absolute bottom-0 left-0 w-full h-14 bg-gray-100 border-t border-gray-300 flex justify-around items-center text-xl">
            <button onClick={() => router.push("/party/home")}>🏠</button>
            <button onClick={() => router.push("/party/search")}>🔍</button>
            <button onClick={() => router.push("/profile")}>👤</button>
            <button onClick={() => router.push("/store")}>🛒</button>
            <button onClick={() => router.push("/messages")}>✉️</button>
          </div>
        </div>
      </SmartphoneFrame>
    </SmartphoneWrapper>
  );
}