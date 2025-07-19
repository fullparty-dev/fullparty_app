"use client";

import SmartphoneFrame from "@/components/SmartphoneFrame";
import SmartphoneWrapper from "@/components/SmartphoneWrapper";
import BottomNav from "@/components/BottomNav";

import { PartyCard } from "@/components/PartyCard";
import { mockParties } from "@/lib/mockData";

export default function PartyPage() {
  return (
    <main className="min-h-screen bg-primary px-4 flex flex-col items-center justify-center">
      <SmartphoneWrapper>
        <SmartphoneFrame>
        <div className="p-4 pb-14 overflow-y-auto max-h-full">
          <div className="flex items-center justify-between mb-4">
            <img src="/avatar.png" alt="My Icon" className="w-8 h-8 rounded-full" />
            <div className="flex bg-gray-200 rounded-full p-1 text-sm font-medium">
              <button className="px-3 py-1 rounded-full bg-white shadow text-black">参加中</button>
              <button className="px-3 py-1 rounded-full text-black">フレンド</button>
            </div>
            <button className="text-xl">🔔</button>
          </div>

          {mockParties.slice(0, 1).map((party) => (
            <PartyCard key={party.id} party={party} />
          ))}

          <div className="px-4 mt-2 space-y-2 text-sm text-gray-700">
            <input
              type="text"
              placeholder="ゲーム内IDを入力"
              className="w-full p-2 border rounded text-sm"
            />
            <input
              type="text"
              placeholder="VCツールIDを入力"
              className="w-full p-2 border rounded text-sm"
            />
            <p className="text-xs text-gray-500">
              フルパ成立後に公開されます（ホストが「成立後のみ表示」設定を有効にしているため）
            </p>
          </div>

          <div className="mt-4 px-4">
            <a
              href="/party/home/success"
              className="block text-center text-white text-sm bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition"
            >
              🎯 成立後の画面を見る（サンプル）
            </a>
          </div>
        </div>
        <BottomNav />
        </SmartphoneFrame>
      </SmartphoneWrapper>
    </main>
  );
}