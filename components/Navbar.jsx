"use client";
import { useTheme } from "next-themes";
import { Search, Moon, Sun, Bell, Settings, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between h-16 px-6 bg-white dark:bg-white-900 ml-0.5 shadow">
      <div className="flex items-center space-x-4">
        <Menu size={17} />
      </div>

      <div className="flex-1 mx-2">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 w-4 h-4 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search products…"
            className="w-4/6 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
        </div>
      </div>

      <ul className="flex items-center space-x-4 text-gray-900 dark:text-gray-400 gap-3">
        <li>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </li>
        <li>
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Bell />
            <span className="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </li>
        <li>
          <Link
            href="/settings"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Settings />
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="block w-8 h-8 rounded-full overflow-hidden"
          >
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
