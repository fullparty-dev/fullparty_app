

import { ReactNode } from "react";

export default function SmartphoneWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center pt-10 sm:pt-10 overflow-hidden h-screen">
      <div className="w-[393px] h-[852px]">
        {children}
      </div>
    </div>
  );
}