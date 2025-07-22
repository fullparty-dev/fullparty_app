"use client";

import SmartphoneLayout from "@/components/SmartphoneLayout";
import { PartyCard } from "@/components/PartyCard";
import { useUserStore, usePartyStore } from "@/lib/store";
import { useEvaluationStore } from "@/lib/store";
import Link from "next/link";
import { useEffect } from "react";

export default function PartyPage() {
  const user = useUserStore((state) => state.getCurrentUser());
  const leaveParty = usePartyStore((state) => state.leaveParty);
  const currentUserId = usePartyStore((state) => state.currentUserId);
  const parties = usePartyStore((state) => state.parties);
  const matchedPartyId = usePartyStore((state) => state.matchedPartyId);

  const evaluations = useEvaluationStore((state) => state.evaluations);
  const setEvaluation = useEvaluationStore((state) => state.setEvaluation);
  const clearEvaluationsForParty = useEvaluationStore((state) => state.clearEvaluationsForParty);
  const setMatchedPartyId = usePartyStore((state) => state.setMatchedPartyId);

  const joinedParties = parties.filter((party) => party.memberIds?.includes(user?.id));

  return (
    <SmartphoneLayout>
      <div className="w-full bg-white border-b border-gray-300 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <img src="/avatar.png" alt="My Icon" className="w-8 h-8 rounded-full" />
        <div className="flex bg-gray-200 rounded-full p-1 text-xs font-medium">
          <button className="px-3 py-1 rounded-full bg-white shadow text-black">参加中</button>
          <button className="px-3 py-1 rounded-full text-black">フレンド</button>
          <button className="px-3 py-1 rounded-full text-black">マッチ履歴</button>
        </div>
        <button className="text-xl">🔔</button>
      </div>
      <div className="px-4 pb-32 pt-0 overflow-y-auto max-h-full">

        {matchedPartyId && (
          <div className="mt-2"> {/* Added margin top */}
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-xl shadow mb-4">
              <h2 className="text-black text-xl mb-4 text-center">✅フルパーティ成立!</h2>
              <p className="text-sm text-gray-700 text-center mt-4 leading-relaxed">
                メンバーとIDを交換して<br />
                さっそく一緒に遊びましょう！
              </p>
              <div className="border border-gray-200 rounded-xl p-3 mb-4 shadow bg-white text-black w-full max-w-xl text-sm">
                {joinedParties.find(p => p.id === matchedPartyId)?.memberIds.map((id, index, array) => {
                  const member = useUserStore.getState().getUserById?.(id);
                  const isLast = index === array.length - 1;

                  return member ? (
                    <div
                      key={member.id}
                      className={`flex items-center py-3 space-x-3 text-black w-full px-4 ${
                        !isLast ? "border-b border-gray-300" : ""
                      }`}
                    >
                      <div className="flex flex-col items-center w-14">
                        <div className="relative w-10 h-10">
                          <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                          {member.id === joinedParties.find(p => p.id === matchedPartyId)?.hostId && (
                            <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs">👑</span>
                          )}
                        </div>
                        <div className="mt-1 text-sm">
                          {member.devices?.[0] === "PC" && "💻"}
                          {member.devices?.[0] === "PS" && "🎮"}
                          {member.devices?.[0] === "Switch" && "📱"}
                          {member.devices?.[0] === "Xbox" && "🕹️"}
                        </div>
                      </div>
                      <div className="flex flex-col w-full text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{member.name}</span>
                          {member.id !== currentUserId && (
                            <div className="flex space-x-2 ml-2">
                              <button
                                onClick={() => {
                                  const current = evaluations[matchedPartyId]?.[member.id];
                                  setEvaluation(
                                    matchedPartyId,
                                    member.id,
                                    current === "up" ? undefined : "up"
                                  );
                                }}
                                className={`px-2 py-1 text-sm rounded-full ${
                                  evaluations[matchedPartyId]?.[member.id] === "up" ? "bg-green-500 text-white" : "bg-gray-200 text-black"
                                }`}
                              >
                                👍
                              </button>
                              <button
                                onClick={() => {
                                  const current = evaluations[matchedPartyId]?.[member.id];
                                  setEvaluation(
                                    matchedPartyId,
                                    member.id,
                                    current === "down" ? undefined : "down"
                                  );
                                }}
                                className={`px-2 py-1 text-sm rounded-full ${
                                  evaluations[matchedPartyId]?.[member.id] === "down" ? "bg-red-500 text-white" : "bg-gray-200 text-black"
                                }`}
                              >
                                👎
                              </button>
                            </div>
                          )}
                        </div>
                        <span className="text-xs">ゲームID: {member.ingameId?.["Apex Legends"] || "未設定"}</span>
                        <span className="text-xs">VC ID: {member.vcId?.["Apex Legends"] || "未設定"}</span>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                ※評価は相手に通知されず、次回以降のマッチング最適化のために使用されます
              </p>
              <button
                className="block mx-auto mt-4 mb-2 text-sm text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition"
                onClick={() => {
                  const joinedParty = parties.find(p => p.memberIds.includes(currentUserId));

                  if (joinedParty) {
                    leaveParty(joinedParty.id, currentUserId);
                  }
                  setMatchedPartyId(null);
                  clearEvaluationsForParty(matchedPartyId);
                }}
              >
                プレイ終了(評価を終わる)
              </button>
            </div>
          </div>
        )}

        {joinedParties.length === 0 ? (
          <div className="mt-2 border border-dashed border-gray-300 rounded-xl p-3 mb-4 shadow-inner bg-white text-black w-full max-w-xl text-sm relative h-40">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p className="text-gray-400 text-center">
                まだパーティに参加していません<br />
                🔍から参加しましょう！
              </p>
            </div>
            <div className="flex justify-between items-end mt-1 invisible">
              <div className="flex items-end space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex flex-col items-center w-10 text-gray-400">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100">
                      ?
                    </div>
                    <span className="text-[10px] text-transparent">placeholder</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400 pr-1 pb-1">--:--</div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-300 invisible">
              <span>🗣 VCツール</span>
              <span>🏆 ランク帯</span>
              <span>🕹️ デバイス</span>
            </div>
          </div>
        ) : (
          <>
            {joinedParties.map((party) => (
              <div key={party.id}>
                <PartyCard party={party} showJoinButton />
                {!matchedPartyId && (
                  <button
                    className="mt-2 mb-6 text-sm text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition block mx-auto"
                    onClick={() => leaveParty(party.id, currentUserId)}
                  >
                    パーティから退出する
                  </button>
                )}
              </div>
            ))}
          </>
        )}

      </div>
    </SmartphoneLayout>
  );
}