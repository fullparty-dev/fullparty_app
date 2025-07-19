import Link from "next/link";

import { ReactNode } from "react";

export default function SmartphoneWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center pt-10 sm:pt-10 overflow-hidden h-screen relative">
      <Link
        href="/"
        className="absolute top-2 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full shadow z-50 hover:bg-gray-100"
      >
        ◀️ トップページに戻る
      </Link>
      <div className="w-[393px] h-[852px] overflow-hidden">
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}