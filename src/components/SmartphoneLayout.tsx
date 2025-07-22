"use client";

import { Toaster } from "react-hot-toast";
import SmartphoneWrapper from "@/components/SmartphoneWrapper";
import SmartphoneFrame from "@/components/SmartphoneFrame";
import BottomNav from "@/components/BottomNav";

interface SmartphoneLayoutProps {
  children: React.ReactNode;
}

export default function SmartphoneLayout({ children }: SmartphoneLayoutProps) {
  return (
    <main className="min-h-screen bg-primary px-4 flex flex-col items-center justify-center">
      <SmartphoneWrapper>
        <SmartphoneFrame>
          {children}
          <BottomNav />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                marginTop: "7rem", // 出現位置を下にずらす
              },
            }}
          />
        </SmartphoneFrame>
      </SmartphoneWrapper>
    </main>
  );
}