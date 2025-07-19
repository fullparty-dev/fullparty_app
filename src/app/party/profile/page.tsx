"use client";
import SmartphoneFrame from "@/components/SmartphoneFrame";
import SmartphoneWrapper from "@/components/SmartphoneWrapper";

export default function Profile() {
  return (
    <SmartphoneWrapper>
      <SmartphoneFrame>
        <div className="h-full flex items-center justify-center bg-white text-6xl">
          👤
        </div>
      </SmartphoneFrame>
    </SmartphoneWrapper>
  );
}