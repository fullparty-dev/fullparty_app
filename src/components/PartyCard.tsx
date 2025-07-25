'use client';
import React from 'react';
import { Party } from '../types';
import { mockUsers } from '../lib/mockUsers';
import { usePartyStore } from '../lib/store';
import toast from 'react-hot-toast';


const getDeviceIconPath = (device: string) => {
  const mapping: { [key: string]: string } = {
    pc: 'PC',
    ps: 'PS',
    switch: 'Switch',
    xbox: 'Xbox',
  };
  const key = device.toLowerCase();
  const fileName = mapping[key];
  if (fileName) {
    return `/assets/icons/devices/${fileName}.png`;
  }
  return null;
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

        <div className="flex text-xs text-gray-600 mb-1 space-x-16">
          <div>
            {party.startAt
              ? `${new Date(party.startAt).toLocaleTimeString('ja-JP', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}~`
              : '今すぐ'}
          </div>
          <div className="font-medium">
            {party.requireFull ? 'フルパで成立' : '集まり次第'}
          </div>
        </div>

        {/* Show Join Button based on party and user state */}
        {showJoinButton && (
          <div className="absolute top-2 right-2">
            <div className="flex justify-end">
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
                      toast.error('募集デバイスが対象外です');
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
            <div className="mt-2 text-xs text-gray-700">
              <div className="flex items-center gap-1">
                <span>募集:</span>
                {sortedAcceptedDevices.length > 0 ? (
                  sortedAcceptedDevices.map((d) => {
                    const path = getDeviceIconPath(d);
                    return path ? (
                      <img key={d} src={path} alt={d} className="w-4 h-4" />
                    ) : (
                      <span key={d}>❓</span>
                    );
                  })
                ) : (
                  <span>未設定</span>
                )}
              </div>
              <div>VC: {party.vcTool}</div>
            </div>
          </div>
        )}

        {/* Members section with time on the same line */}
        <div className="flex mt-1 space-x-2">
          {[
            ...members.map((m, index) => ({
              type: 'member',
              data: m,
              isHost: index === 0,
            })),
            ...Array.from({ length: emptySlots }).map((_, i) => ({
              type: 'empty',
              key: `empty-${i}`,
            })),
          ].map((item) => {
            if (item.type === 'member' && 'data' in item && 'isHost' in item) {
              return (
                <div key={item.data.id} className="flex flex-col items-center relative w-10">
                  {item.isHost && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs">👑</span>
                  )}
                  <img
                    src={item.data.avatar}
                    alt={item.data.name}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    title={item.data.name}
                  />
                  <div className="flex gap-0.5 mt-0.5">
                    {item.data.devices?.map((d) => {
                      const path = getDeviceIconPath(d);
                      return path ? (
                        <img key={d} src={path} alt={d} className="w-4 h-4" />
                      ) : (
                        <span key={d} className="text-[10px]">❓</span>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={'key' in item ? item.key : 'fallback-key'} className="flex flex-col items-center w-10 text-gray-400">
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100">
                    ?
                  </div>
                  <span className="text-[10px] text-transparent">placeholder</span>
                </div>
              );
            }
          })}
        </div>

        {/* Rank and combined PlayStyleTag and AgeTag section */}
        <div className="mt-2 text-xs text-gray-700 flex justify-between items-center">
          {party.type === 'rank' ? (
            <div>
              <span>🏆 </span>
              <span>
                {Array.isArray(party.rankRange) && party.rankRange.length === 2
                  ? `${party.rankRange[0]}〜${party.rankRange[1]}`
                  : party.rankRange}
              </span>
            </div>
          ) : <div />}

          <div className="flex gap-2">
            {party.playStyleTag && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full whitespace-nowrap">
                {party.playStyleTag}
              </span>
            )}
            {party.ageTag && (
              <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full whitespace-nowrap">
                {party.ageTag}
              </span>
            )}
          </div>
        </div>

        {/* マッチング条件表示 (removed as now shown above) */}
        {/* Message */}
        <p className="mt-2 text-black">{party.message}</p>
      </div>
    </div>
  );
};