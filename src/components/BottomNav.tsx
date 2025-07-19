"use client";

import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="absolute bottom-6 left-0 w-full h-14 bg-gray-100 border-t border-gray-300 flex justify-around items-center before:content-[''] before:absolute before:bottom-[-24px] before:left-0 before:w-full before:h-6 before:bg-gray-100 z-50">
      <button className="text-xl" onClick={() => router.push("/party/home")}>🏠</button>
      <button className="text-xl" onClick={() => router.push("/party/search")}>🔍</button>
      <button className="text-xl" onClick={() => router.push("/party/profile")}>👤</button>
      <button className="text-xl" onClick={() => router.push("/party/store")}>🛒</button>
      <button className="text-xl" onClick={() => router.push("/party/messages")}>✉️</button>
    </div>
  );
}