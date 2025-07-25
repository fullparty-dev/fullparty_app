// Imports
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePartyStore } from "@/lib/store";
import { useTimeFilterStore } from "@/lib/store";
import { PartyCard } from "@/components/PartyCard";
import { useModeStore } from "@/lib/store";
import SmartphoneLayout from "@/components/SmartphoneLayout";

export default function PartySearchPage() {
  const mode = useModeStore((state) => state.selectedMode);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("カジュアル");
  const parties = usePartyStore((state) => state.parties);
  // Matched party and error handling
  const matchedPartyId = usePartyStore((state) => state.matchedPartyId);

  const selectedTimeFilter = useTimeFilterStore((state) => state.selectedTimeFilter);
  const setSelectedTimeFilter = useTimeFilterStore((state) => state.setSelectedTimeFilter);


  return (
    <SmartphoneLayout>
      <div className="h-full relative bg-white flex flex-col overflow-hidden">
        {/* 上部ヘッダー */}
        <div className="p-3 border-b border-gray-300 text-sm text-gray-800 font-medium">
          <div className="flex justify-between items-center mb-2 relative">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-800">開始</span>
              <select
                value={selectedTimeFilter}
                onChange={(e) => {
                  setSelectedTimeFilter(e.target.value);
                }}
                className="text-sm font-semibold text-gray-800 border border-gray-300 rounded px-2 py-0.5 bg-white shadow-sm hover:bg-gray-50"
              >
                <option value="now">今すぐ</option>
                {Array.from({ length: 96 }).map((_, i) => {
                  const hours = String(Math.floor(i * 15 / 60)).padStart(2, "0");
                  const minutes = String((i * 15) % 60).padStart(2, "0");
                  const label = `${hours}:${minutes}`;
                  return (
                    <option key={label} value={label}>{label}</option>
                  );
                })}
              </select>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-800">
              APEX
            </div>
            <button className="px-2 py-1 text-xs border rounded">フィルター</button>
          </div>
          <div className="flex bg-gray-200 rounded-full overflow-hidden">
            {["カジュアル", "ランク", "その他"].map((label) => (
              <button
                key={label}
                onClick={() => setSelectedCategory(label)}
                className={`w-1/3 py-1 text-xs ${
                  selectedCategory === label
                    ? "bg-white text-gray-800 border-b-2 border-primary"
                    : "text-gray-500"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* カード一覧 */}
        <div className="flex-1 overflow-y-auto px-2 py-2 space-y-2 pb-28">
          {parties
            .filter((p) => {
              const categoryMap = {
                "カジュアル": "casual",
                "ランク": "rank",
                "その他": "other",
              };

              const isMatchingCategory = p.type === categoryMap[selectedCategory];

              if (selectedTimeFilter === "now") {
                return isMatchingCategory;
              }

              const partyTime = p.startAt ? new Date(p.startAt) : null;
              if (!partyTime) return false;

              const [h, m] = selectedTimeFilter.split(":").map(Number);
              const selectedMinutes = h * 60 + m;

              const partyMinutes = partyTime.getHours() * 60 + partyTime.getMinutes();

              return (
                isMatchingCategory &&
                partyMinutes >= selectedMinutes &&
                partyMinutes <= selectedMinutes + 15
              );
            })
            .sort((a, b) => {
              const now = new Date();
              const getTime = (party: any) => {
                if (!party.startAt) return 0;
                return new Date(party.startAt).getTime();
              };

              if (selectedTimeFilter === "now") {
                // "今すぐ" を優先、次に時刻順
                const aIsNow = !a.startAt;
                const bIsNow = !b.startAt;
                if (aIsNow && !bIsNow) return -1;
                if (!aIsNow && bIsNow) return 1;
                return getTime(a) - getTime(b);
              } else {
                // 指定時刻順
                return getTime(a) - getTime(b);
              }
            })
            .map((party) => (
              <PartyCard key={party.id} party={party} showJoinButton />
            ))}
        </div>

        {/* 投稿ボタン */}
        <div className="absolute bottom-24 right-4">
          <button className="text-3xl bg-primary text-white rounded-full w-12 h-12 shadow-md flex items-center justify-center leading-none">
            <span className="-translate-y-0.5 relative">+</span>
          </button>
        </div>
      </div>
    </SmartphoneLayout>
  );
}