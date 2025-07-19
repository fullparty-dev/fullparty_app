'use client';
import React from 'react';
import { Party } from '../types';

export const PartyCard = ({ party, isPreview = false }: { party: Party; isPreview?: boolean }) => {
  const emptySlots = party.maxMembers - party.members.length;

  return (
    <div>

      {/* 既存の PartyCard コンテンツ */}
      <div className="border border-gray-200 rounded-xl p-3 mb-4 shadow bg-white text-black w-full max-w-xl text-sm relative">

        {/* Members section with time on the same line */}
        <div className="flex justify-between items-end mt-1">
          <div className="flex items-end space-x-2">
            {party.members.map((m, index) => (
              <div key={m.id} className="flex flex-col items-center relative w-10">
                {index === 0 && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs">👑</span>
                )}
                <img
                  src={m.avatarUrl}
                  alt={m.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  title={m.name}
                />
                <span className="text-[10px] text-gray-500">{m.device}</span>
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

        {/* Details section */}
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-700">
          <span>🗣 {party.vcTool}</span>
          {party.type === 'rank' && <span>🏆 {party.rankRange}</span>}
          <span>
            🕹️ {party.acceptedDevices && party.acceptedDevices.length > 0
              ? party.acceptedDevices.join(', ')
              : '未設定'}
          </span>
        </div>

        {/* Message */}
        <p className="mt-2 text-black">{party.message}</p>
      </div>
    </div>
  );
};