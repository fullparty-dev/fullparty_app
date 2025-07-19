

"use client";

import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="absolute bottom-0 left-0 w-full h-14 bg-gray-100 border-t border-gray-300 flex justify-around items-center">
      <button className="text-xl" onClick={() => router.push("/party/home")}>🏠</button>
      <button className="text-xl" onClick={() => router.push("/party/search")}>🔍</button>
      <button className="text-xl" onClick={() => router.push("/profile")}>👤</button>
      <button className="text-xl" onClick={() => router.push("/store")}>🛒</button>
      <button className="text-xl" onClick={() => router.push("/dm")}>✉️</button>
    </div>
  );
}