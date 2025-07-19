"use client";
import SmartphoneWrapper from "@/components/SmartphoneWrapper";
import SmartphoneFrame from "@/components/SmartphoneFrame";
import BottomNav from "@/components/BottomNav";

export default function MessagesPage() {
  return (
    <SmartphoneWrapper>
      <SmartphoneFrame>
        <div className="h-full flex items-center justify-center bg-white text-6xl">
          ✉️
        </div>
        <BottomNav />
      </SmartphoneFrame>
    </SmartphoneWrapper>
  );
}