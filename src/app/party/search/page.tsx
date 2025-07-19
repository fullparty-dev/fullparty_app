"use client";

import { useRouter } from "next/navigation";
import SmartphoneFrame from "@/components/SmartphoneFrame";
import SmartphoneWrapper from "@/components/SmartphoneWrapper";
import { mockParties } from "@/lib/mockData";
import { PartyCard } from "@/components/PartyCard";
import { useModeStore } from "@/lib/store";
import BottomNav from "@/components/BottomNav";

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

        </div>
        <BottomNav />
      </SmartphoneFrame>
    </SmartphoneWrapper>
  );
}