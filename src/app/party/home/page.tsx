"use client";

import SmartphoneLayout from "@/components/SmartphoneLayout";
import { PartyCard } from "@/components/PartyCard";
import { mockParties } from "@/lib/mockData";

export default function PartyPage() {
  return (
    <SmartphoneLayout>
      <div className="p-4 pb-[56px] overflow-y-auto max-h-full">
        <div className="flex items-center justify-between mb-4">
          <img src="/avatar.png" alt="My Icon" className="w-8 h-8 rounded-full" />
          <div className="flex bg-gray-200 rounded-full p-1 text-xs font-medium max-w-full overflow-x-auto whitespace-nowrap">
            <button className="px-3 py-1 rounded-full bg-white shadow text-black">参加中</button>
            <button className="px-3 py-1 rounded-full text-black">フレンド</button>
            <button className="px-3 py-1 rounded-full text-black">マッチ履歴</button>
          </div>
          <button className="text-xl">🔔</button>
        </div>

        {mockParties.slice(0, 1).map((party) => (
          <PartyCard key={party.id} party={party} />
        ))}

        <div className="mt-4 px-4">
          <a
            href="/party/home/success"
            className="block text-center text-white text-sm bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition"
          >
            🎯 成立後の画面を見る（サンプル）
          </a>
        </div>
      </div>
    </SmartphoneLayout>
  );
}