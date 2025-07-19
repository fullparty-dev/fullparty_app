import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SmartphoneFrame({ children }: Props) {
  return (
    <div className="flex justify-center items-start w-full h-full overflow-hidden pointer-events-auto touch-auto">
      <div className="origin-top transition-transform duration-200 scale-90 sm:scale-100 flex items-center justify-center aspect-[393/752] w-full max-w-[393px]">
        <div className="border-[14px] border-black rounded-[48px] w-full h-full shadow-xl relative bg-white overflow-hidden flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-10" />
          <div
            className="h-full overflow-hidden relative bg-white flex-1 flex flex-col pb-0"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
              paddingLeft: "env(safe-area-inset-left)",
              paddingRight: "env(safe-area-inset-right)",
            }}
          >
            {children}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-gray-600 opacity-80 z-[60] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}