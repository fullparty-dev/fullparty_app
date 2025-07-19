import SmartphoneFrame from "@/components/SmartphoneFrame";
import BottomNav from "@/components/BottomNav";

export default function PartySuccessPage() {
  return (
    <SmartphoneFrame>
      <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start py-10 px-4">
        <h1 className="text-2xl font-bold text-green-600 mb-4">✅ フルパーティが成立しました！</h1>
        <div className="w-full max-w-xs border rounded-lg p-4 bg-gray-50 space-y-4">
          {/* Host */}
          <div className="flex items-center space-x-3">
            <span className="text-lg">👑</span>
            <div className="flex-1">
              <p className="font-bold">ホスト太郎</p>
              <p className="text-sm text-gray-600">ID: host123</p>
              <p className="text-sm text-gray-600">デバイス: PC</p>
              <p className="text-sm text-gray-600">VC ID: host_voice</p>
            </div>
          </div>
          <hr />
          {/* Member 1 */}
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <p className="font-bold">プレイヤーA</p>
              <p className="text-sm text-gray-600">ID: playerA456</p>
              <p className="text-sm text-gray-600">デバイス: PS5</p>
              <p className="text-sm text-gray-600">VC ID: playerA_voice</p>
            </div>
          </div>
          {/* Member 2 */}
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <p className="font-bold">プレイヤーB</p>
              <p className="text-sm text-gray-600">ID: playerB789</p>
              <p className="text-sm text-gray-600">デバイス: Xbox</p>
              <p className="text-sm text-gray-600">VC ID: playerB_voice</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </SmartphoneFrame>
  );
}