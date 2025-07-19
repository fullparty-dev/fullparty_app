import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

type NavItem = {
  href: string;
  icon: React.ReactNode;
  label?: string;
};

const navItems: NavItem[] = [
  { href: "/party/home", icon: <span>🏠</span> },
  { href: "/party/search", icon: <span>🔍</span> },
  { href: "/party/profile", icon: <span>👤</span> },
  { href: "/party/store", icon: <span>🛒</span> },
  { href: "/party/messages", icon: <span>✉️</span> },
];

export default function SmartphoneFrame({ children }: Props) {
  return (
    <div className="flex justify-center items-start w-full h-full overflow-hidden pointer-events-auto touch-auto">
      <div className="origin-top transition-transform duration-200 scale-90 sm:scale-100 flex items-center justify-center aspect-[393/752] w-full max-w-[393px]">
        <div className="border-[16px] border-black rounded-[40px] w-full h-full shadow-2xl relative bg-white overflow-hidden flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-black rounded-b-lg z-10" />
          <div className="h-full overflow-hidden relative bg-white flex-1 flex flex-col">
            {children}
            <div className="absolute bottom-0 left-0 w-full h-14 bg-gray-100 border-t border-gray-300 flex justify-around items-center text-xl">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="text-xl">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}