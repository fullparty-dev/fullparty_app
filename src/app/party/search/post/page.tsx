"use client";

// Imports
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePartyTabStore } from "@/lib/store";
import { usePartyStore } from "@/lib/store";
import { PartyCard } from "@/components/PartyCard";
import SmartphoneLayout from "@/components/SmartphoneLayout";

// Utility function for device icon paths
const getDeviceIconPath = (device: string) => {
  return `/assets/icons/devices/${device}.png`;
};

export default function PartySearchPage() {
  const mode = usePartyTabStore((state) => state.selectedMode);
  const router = useRouter();
  const selectedGameTitle = usePartyTabStore((state) => state.selectedGameTitle) || "カジュアル";
  const setSelectedGameTitle = usePartyTabStore((state) => state.setSelectedGameTitle);

  const parties = usePartyStore((state) => state.parties);
  // Matched party and error handling
  const matchedPartyId = usePartyStore((state) => state.matchedPartyId);

  const selectedTimeFilter = usePartyTabStore((state) => state.selectedTimeFilter) || "now";
  const setSelectedTimeFilter = usePartyTabStore((state) => state.setSelectedTimeFilter);

  const [selectedRankRange, setSelectedRankRange] = useState<[number, number]>([1, 7]);
  const [activeHandle, setActiveHandle] = useState<"left" | "right" | null>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedDevices, setSelectedDevices] = useState<string[]>(["PC", "PS", "Switch", "Xbox"]);
  const [selectedVcTool, setSelectedVcTool] = useState<string>("なし");
  const [selectedPlayStyle, setSelectedPlayStyle] = useState<string>("エンジョイ");
  const [selectedAgeStance, setSelectedAgeStance] = useState<string>("誰でも歓迎");
  const [requireFull, setRequireFull] = useState<boolean>(true);
  const [maxMembers, setMaxMembers] = useState<number>(3);

  // ランク情報
  const ranks = [
    { name: "ルーキー", color: "#8B4513" },
    { name: "ブロンズ", color: "#CD7F32" },
    { name: "シルバー", color: "#C0C0C0" },
    { name: "ゴールド", color: "#FFD700" },
    { name: "プラチナ", color: "#40E0D0" },
    { name: "ダイヤ", color: "#0066CC" },
    { name: "マスター", color: "#8A2BE2" },
    { name: "プレデター", color: "#DC143C" }
  ];

  // デバイス選択の切り替え
  const toggleDevice = (device: string) => {
    setSelectedDevices(prev => 
      prev.includes(device) 
        ? prev.filter(d => d !== device)
        : [...prev, device]
    );
  };

  useEffect(() => {
    if (!selectedTimeFilter) setSelectedTimeFilter("now");
    if (!selectedGameTitle) setSelectedGameTitle("カジュアル");

    // Mouse and touch event handlers for drag functionality
    const handleMouseMove = (e: MouseEvent) => {
      if (activeHandle && dragPosition) {
        const sliderElement = document.querySelector('.rank-slider-track');
        if (sliderElement) {
          const rect = sliderElement.getBoundingClientRect();
          const relativeX = e.clientX - rect.left;
          const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
          const rankIndex = Math.round((percentage / 100) * 7);
          
          if (activeHandle === "left" && rankIndex <= selectedRankRange[1]) {
            setSelectedRankRange([rankIndex, selectedRankRange[1]]);
          } else if (activeHandle === "right" && rankIndex >= selectedRankRange[0]) {
            setSelectedRankRange([selectedRankRange[0], rankIndex]);
          }
          
          setDragPosition({ x: e.clientX, y: e.clientY });
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (activeHandle && dragPosition) {
        const sliderElement = document.querySelector('.rank-slider-track');
        if (sliderElement) {
          const rect = sliderElement.getBoundingClientRect();
          const touch = e.touches[0];
          const relativeX = touch.clientX - rect.left;
          const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
          const rankIndex = Math.round((percentage / 100) * 7);
          
          if (activeHandle === "left" && rankIndex <= selectedRankRange[1]) {
            setSelectedRankRange([rankIndex, selectedRankRange[1]]);
          } else if (activeHandle === "right" && rankIndex >= selectedRankRange[0]) {
            setSelectedRankRange([selectedRankRange[0], rankIndex]);
          }
          
          setDragPosition({ x: touch.clientX, y: touch.clientY });
        }
      }
    };

    const handleEnd = () => {
      setActiveHandle(null);
      setDragPosition(null);
    };

    if (activeHandle) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [activeHandle, dragPosition, selectedRankRange]);


  return (
    <SmartphoneLayout>
      <div className="h-full relative bg-orange-100 flex flex-col overflow-hidden">
        {/* 上部ヘッダー */}
        <div className={`p-3 border-b border-gray-300 text-sm text-gray-800 font-medium bg-orange-35`}>
          <div className="flex justify-between items-center mb-2 relative">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-800">開始</span>
            <select
                value={selectedTimeFilter}
                onChange={(e) => {
                  setSelectedTimeFilter(e.target.value);
                }}
                className="text-sm font-semibold border rounded px-2 py-0.5 shadow-sm hover:bg-gray-50 bg-orange-200 text-orange-800 border-orange-300"
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
            <div className="absolute right-0">
              <button
                className="w-full py-1.5 px-4 text-sm font-bold text-white bg-orange-500 rounded shadow"
                onClick={() => {
                  // 投稿処理（仮）
                  console.log("投稿しました");
                }}
              >
                投稿
              </button>
            </div>
          </div>
          <div className="flex bg-gray-200 rounded-full overflow-hidden">
            {["カジュアル", "ランク", "その他"].map((label) => (
              <button
                key={label}
                onClick={() => setSelectedGameTitle(label)}
                className={`w-1/3 py-1 text-xs ${
                  selectedGameTitle === label
                    ? "bg-orange-200 text-orange-800 font-semibold"
                    : "bg-orange-50 text-orange-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 本文（投稿作成 or カード一覧） */}
        <div className="flex-1 px-2 py-2 pb-24 space-y-2">
          <>

            {/* ランクレンジ選択 */}
            {selectedGameTitle === "ランク" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">ランク帯</label>
                <div className="w-[70%] mx-auto relative flex flex-col items-center space-y-2">
                  {/* Track */}
                  <div className="relative w-full h-6 flex items-center rank-slider-track">
                    {/* Background track */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-300 rounded" />

                    {/* Selection range */}
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-orange-500 rounded z-10"
                      style={{
                        left: `${selectedRankRange[0] * (100/7)}%`,
                        width: `${(selectedRankRange[1] - selectedRankRange[0]) * (100/7)}%`,
                      }}
                    />

                    {/* Rank dots */}
                    {ranks.map((rank, idx) => (
                      <div
                        key={idx}
                        className="w-3 h-3 rounded-full absolute top-1/2 transform -translate-y-1/2 border border-gray-400 z-20"
                        style={{ 
                          left: `${idx * (100/7)}%`, 
                          transform: "translate(-50%, -50%)",
                          backgroundColor: rank.color
                        }}
                      />
                    ))}

                    {/* Left handle */}
                    <div
                      className="w-5 h-5 rounded-full absolute top-1/2 transform -translate-y-1/2 border-2 border-orange-500 shadow-md cursor-pointer z-30"
                      style={{ 
                        left: `${selectedRankRange[0] * (100/7)}%`, 
                        transform: "translate(-50%, -50%)",
                        backgroundColor: ranks[selectedRankRange[0]].color
                      }}
                      onMouseDown={(e) => {
                        setActiveHandle("left");
                        setDragPosition({ x: e.clientX, y: e.clientY });
                        e.preventDefault();
                      }}
                      onTouchStart={(e) => {
                        setActiveHandle("left");
                        const touch = e.touches[0];
                        setDragPosition({ x: touch.clientX, y: touch.clientY });
                        e.preventDefault();
                      }}
                    />

                    {/* Right handle */}
                    <div
                      className="w-5 h-5 rounded-full absolute top-1/2 transform -translate-y-1/2 border-2 border-orange-500 shadow-md cursor-pointer z-30"
                      style={{ 
                        left: `${selectedRankRange[1] * (100/7)}%`, 
                        transform: "translate(-50%, -50%)",
                        backgroundColor: ranks[selectedRankRange[1]].color
                      }}
                      onMouseDown={(e) => {
                        setActiveHandle("right");
                        setDragPosition({ x: e.clientX, y: e.clientY });
                        e.preventDefault();
                      }}
                      onTouchStart={(e) => {
                        setActiveHandle("right");
                        const touch = e.touches[0];
                        setDragPosition({ x: touch.clientX, y: touch.clientY });
                        e.preventDefault();
                      }}
                    />
                  </div>
                </div>

                {/* Tooltip overlay */}
                {activeHandle && dragPosition && (
                  <div
                    className="fixed z-50 bg-gray-800 text-white px-2 py-1 rounded text-xs pointer-events-none"
                    style={{
                      left: dragPosition.x - 20,
                      top: dragPosition.y - 40,
                    }}
                  >
                    {ranks[activeHandle === "left" ? selectedRankRange[0] : selectedRankRange[1]].name}
                  </div>
                )}
              </div>
            )}

            {/* マッチング条件と最大人数 */}
            <div className="mb-4">
              <div className="flex gap-4">
                {/* マッチング条件 */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">マッチング条件</label>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">フルパで成立</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={requireFull}
                        onChange={(e) => setRequireFull(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500 relative" />
                    </label>
                  </div>
                </div>

                {/* 最大人数ドロップダウン */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">最大人数</label>
                  <select
                    value={maxMembers}
                    onChange={(e) => setMaxMembers(Number(e.target.value))}
                    className="w-full text-sm border rounded px-2 py-1 shadow-sm hover:bg-gray-50 bg-white text-gray-800 border-gray-300"
                  >
                    <option value={2}>2人</option>
                    <option value={3}>3人</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 容認デバイス選択 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">募集対象デバイス</label>
              <div className="flex gap-2 flex-wrap">
                {["PC", "PS", "Switch", "Xbox"].map((device) => (
                  <button
                    key={device}
                    onClick={() => toggleDevice(device)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm transition-colors ${
                      selectedDevices.includes(device)
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <img src={getDeviceIconPath(device)} alt={device} className="w-4 h-4" />
                    <span>{device}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* VCツール選択 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">VCツール</label>
              <div className="flex gap-1 flex-wrap">
                {["なし", "Discord", "PS Party Chat", "Switch Online", "LINE", "ゲーム内", "その他"].map((tool) => (
                  <button
                    key={tool}
                    onClick={() => setSelectedVcTool(tool)}
                    className={`px-2 py-1 rounded-full text-[10px] transition-colors ${
                      selectedVcTool === tool
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>

            {/* プレイスタイル選択 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">プレイスタイル</label>
              <div className="flex gap-1 justify-between">
                {["キルムーブ", "アンチムーブ", "ハイド", "エンジョイ"].map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedPlayStyle(style)}
                    className={`px-1 py-1 rounded-full text-[10px] transition-colors flex-1 ${
                      selectedPlayStyle === style
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* 年齢層スタンス選択 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">年齢スタンス</label>
              <div className="flex gap-1 justify-between">
                {["10代歓迎", "20代歓迎", "30代以上歓迎", "誰でも歓迎"].map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAgeStance(age)}
                    className={`px-1 py-1 rounded-full text-[10px] transition-colors flex-1 ${
                      selectedAgeStance === age
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            {/* メッセージ入力 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">ひとことメッセージ</label>
              <textarea
                name="message"
                rows={2}
                maxLength={56}
                placeholder="VCできません、エンジョイ勢です！よろしく〜"
                className="w-full border rounded px-3 py-2 text-sm resize-none shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-800"
              />
              <div className="text-xs text-gray-400 mt-1 text-right">最大56文字まで</div>
            </div>

          </>
        </div>
      </div>
    </SmartphoneLayout>
  );
}