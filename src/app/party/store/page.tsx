"use client";
import SmartphoneWrapper from "@/components/SmartphoneWrapper";
import SmartphoneFrame from "@/components/SmartphoneFrame";

export default function Store() {
  return (
    <SmartphoneWrapper>
      <SmartphoneFrame>
        <div className="h-full flex items-center justify-center bg-white text-6xl">
          🛒
        </div>
      </SmartphoneFrame>
    </SmartphoneWrapper>
  );
}