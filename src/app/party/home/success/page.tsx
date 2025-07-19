"use client";

import SmartphoneLayout from "@/components/SmartphoneLayout";

import { PartyCard } from "@/components/PartyCard";
import { mockParties } from "@/lib/mockData";

export default function PartyPage() {
  return (
    <SmartphoneLayout>
      <div className="steps p-4 pb-[56px] overflow-y-auto max-h-full">
        <div className="flex items-center justify-between mb-4">
          <img src="/avatar.png" alt="My Icon" className="w-8 h-8 rounded-full" />
          <div className="flex bg-gray-200 rounded-full p-1 text-sm font-medium">
            <button className="px-3 py-1 rounded-full bg-white shadow text-black">参加中</button>
            <button className="px-3 py-1 rounded-full text-black">フレンド</button>
          </div>
          <button className="text-xl">🔔</button>
        </div>
        {/* フルパーティ成立セクション */}
        <h2 className="text-black text-xl mb-4 text-center">✅フルパーティ成立!</h2>
        <div className="border border-gray-200 rounded-xl p-3 mb-4 shadow bg-white text-black w-full max-w-xl text-sm">
          {mockParties[0].members.map((member) => (
            <div key={member.id} className="flex items-center border-b border-gray-300 py-3 space-x-3 text-black w-[80%] mx-auto">
              <div className="relative w-10 h-10">
                <img src={member.avatarUrl} alt={member.name} className="w-10 h-10 rounded-full" />
                {member.isHost && (
                  <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs">👑</span>
                )}
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-semibold">{member.name}</span>
                <span>ゲームID: player_{member.id}</span>
                <span>VC ID: vc_{member.id}</span>
                <span>デバイス: {member.device.toUpperCase()}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center border-b border-gray-300 py-3 space-x-3 text-black w-[80%] mx-auto">
            <img src="/avatar.png" alt="みやざき" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col text-sm">
              <span className="font-semibold">みやざき</span>
              <span>ゲームID: player_u11</span>
              <span>VC ID: vc_u11</span>
              <span>デバイス: PC</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-700 text-center mt-4 leading-relaxed">
          メンバーとIDを交換して<br />
          さっそく一緒に遊びましょう！
        </p>
      </div>
    </SmartphoneLayout>
  );
}