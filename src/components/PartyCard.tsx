'use client';
import React from 'react';
import { Party } from '../types';
import { mockUsers } from '../lib/mockUsers';
import { usePartyStore } from '../lib/store';
import toast from 'react-hot-toast';

const deviceEmojiMap: Record<string, string> = {
  pc: '💻',
  ps: '🎮',
  ps4: '🎮',
  ps5: '🎮',
  switch: '🎮',
  xbox: '🎮',
  mobile: '📱',
};

export const PartyCard = ({
  party,
  isPreview = false,
  showJoinButton = false,
  showJoinStatus = false,
}: {
  party: Party;
  isPreview?: boolean;
  showJoinButton?: boolean;
  showJoinStatus?: boolean;
}) => {
  const members = party.memberIds.map((id) => mockUsers.find((u) => u.id === id)).filter(Boolean);
  const emptySlots = party.maxMembers - members.length;
  const currentUserId = usePartyStore((state) => state.currentUserId);
  const joinParty = usePartyStore((state) => state.joinParty);
  const setMatchedPartyId = usePartyStore((state) => state.setMatchedPartyId);

  const deviceOrder = ['pc', 'ps', 'ps4', 'ps5', 'switch', 'xbox', 'mobile'];
  const sortedAcceptedDevices =
    party.acceptedDevices?.slice().sort((a, b) =>
      deviceOrder.indexOf(a.toLowerCase()) - deviceOrder.indexOf(b.toLowerCase())
    ) || [];

  return (
    <div>

      {/* 既存の PartyCard コンテンツ */}
      <div className="border border-gray-200 rounded-xl p-3 mb-4 shadow bg-white text-black w-full max-w-xl text-sm relative">


        {/* Show Join Button based on party and user state */}
        {showJoinButton && (
          <div className="absolute top-2 right-2">
            {party.memberIds.includes(currentUserId) ? (
              <button className="text-xs px-2 py-1 bg-gray-300 text-gray-600 rounded shadow-sm cursor-default" disabled>
                参加中
              </button>
            ) : party.memberIds.length >= party.maxMembers ? (
              <button className="text-xs px-2 py-1 bg-gray-300 text-gray-600 rounded shadow-sm cursor-default" disabled>
                満員
              </button>
            ) : (
              <button
                className="text-xs px-2 py-1 bg-primary text-white rounded shadow-sm hover:opacity-90"
                onClick={() => {
                  const currentUser = mockUsers.find((u) => u.id === currentUserId);
                  const acceptedDevices = party.acceptedDevices?.map((d) => d.toLowerCase()) || [];
                  const userDevices = currentUser?.devices?.map((d) => d.toLowerCase()) || [];

                  const isDeviceMatched = userDevices.some((device) => acceptedDevices.includes(device));


                  if (!isDeviceMatched) {
                    toast.error('デバイスが募集対象外です');
                    return;
                  }

                  const result = joinParty(party.id, currentUserId);
                  if (result.success) {
                    if (result.established) {
                      if (result.matchedPartyId) {
                        setMatchedPartyId(result.matchedPartyId);
                      }
                      toast.success(party.requireFull ? 'フルパーティ成立！' : 'パーティ成立！');
                    } else {
                      toast.success('参加しました');
                    }
                  } else {
                    toast.error(result.message || '参加できませんでした');
                  }
                }}
              >
                参加する
              </button>
            )}
          </div>
        )}

        {/* Members section with time on the same line */}
        <div className="flex justify-between items-end mt-1">
          <div className="flex items-end space-x-2">
            {members.map((m, index) => (
              <div key={m.id} className="flex flex-col items-center relative w-10">
                {index === 0 && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs">👑</span>
                )}
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  title={m.name}
                />
                <span className="text-[10px] text-gray-500">
                  {m.devices?.map((d) => deviceEmojiMap[d.toLowerCase()] || '❓').join(' ')}
                </span>
              </div>
            ))}
            {Array.from({ length: emptySlots }).map((_, i) => (
              <div key={`empty-${i}`} className="flex flex-col items-center w-10 text-gray-400">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100">
                  ?
                </div>
                <span className="text-[10px] text-transparent">placeholder</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 pr-1 pb-1">
            {new Date(party.startAt).toLocaleTimeString('ja-JP', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}~
          </div>
        </div>

        {/* Rank section */}
        {party.type === 'rank' && (
          <div className="mt-2 text-xs text-gray-700">
            <span>🏆 </span>
            <span>
              {Array.isArray(party.rankRange) && party.rankRange.length === 2
                ? `${party.rankRange[0]}〜${party.rankRange[1]}`
                : party.rankRange}
            </span>
          </div>
        )}

        {/* Details section */}
        <div className="mt-2 flex flex-wrap gap-14 text-xs text-gray-700">
          <div className="min-w-[100px]">
            <span>VC: {party.vcTool}</span>
          </div>
          <div className="min-w-[100px]">
            <span>
              募集: {sortedAcceptedDevices.length > 0
                ? sortedAcceptedDevices.map((d) => deviceEmojiMap[d.toLowerCase()] || '❓').join(' ')
                : '未設定'}
            </span>
          </div>
        </div>

        {/* マッチング条件表示 */}
        <div className="mt-2 text-xs text-gray-700 font-medium">
          マッチング条件: {party.requireFull ? 'フルパで成立' : '集まり次第'}
        </div>
        {/* Message */}
        <p className="mt-2 text-black">{party.message}</p>
      </div>
    </div>
  );
};