"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Box, DollarSign, PlusSquare, Tech } from "lucide-react";
import Footer from "./Footer";

export default function Sidebar() {
  const path = usePathname() || "";

  const items = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/products", icon: Box, label: "Products" },
    { href: "/sales", icon: DollarSign, label: "Sales" },
    { href: "/add", icon: PlusSquare, label: "Add" },
  ];

  return (
    <aside className="hidden md:flex w-50 h-screen p-6 shadow-2xl flex-col justify-between bg-gray-50">
      <nav>
        <div className="mb-10 text-2xl font-bold text-blue-600">📞 Floridda</div>
        <ul className="space-y-1">
          {items.map(({ href, icon: Icon, label }) => {
            const isActive = path === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-blue-200 text-gray-900 font-semibold"
                        : "text-gray-700 hover:bg-gray-500"
                    }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Footer />
    </aside>
  );
}
