"use client";
import { Search, Bell, Settings, Menu, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [avatarUrl, setAvatarUrl] = useState("/placeholder.svg");

  useEffect(() => {
    const seed = Date.now();
    setAvatarUrl(`https://avatars.dicebear.com/api/avataaars/${seed}.svg`);
  }, []);

  return (
    <nav className="flex items-center justify-between h-16 px-6 shadow bg-gray-50">
      <div className="block md:hidden">
        <button className="flex items-center space-x-4">
          <Menu size={17} />
        </button>
      </div>

      <div className="flex-1 mx-2">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 w-4 h-4 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search product group"
            className="w-1/3 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div>
          
        </div>
        <span className="hidden md:block">
          <Moon className="text-gray-500 cursor-pointer" />
        </span>

        <span className="hidden md:block">
          <Bell className="text-gray-500 cursor-pointer" />
        </span>

        <span className="border-l-2 border-gray-500 hidden md:block">
          <Link href="/profile">
            <Image
              src={avatarUrl}
              alt="User profile"
              height={40}
              width={40}
              href="/profile"
              className="block w-8 h-8 rounded-full overflow-hidden ml-5 border border-gray-400 cursor-pointer"
            />
          </Link>
        </span>

        <span className="block md:hidden">
          <Settings className="text-gray-500 cursor-pointer" />
        </span>
      </div>
    </nav>
  );
}
