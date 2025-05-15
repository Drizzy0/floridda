'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Box, DollarSign, PlusSquare, Tech } from 'lucide-react'

export default function Sidebar() {
  const path = usePathname() || ''

  const items = [
    { href: '/dashboard', icon: Home,      label: 'Dashboard' },
    { href: '/products',  icon: Box,       label: 'Products'  },
    { href: '/sales',     icon: DollarSign,label: 'Sales'     },
    { href: '/add',       icon: PlusSquare,label: 'Add'       },
  ]

  return (
    <aside className="w-64 bg-white dark:bg-white-900 h-screen p-6 shadow">
      <div className="mb-10 text-2xl font-bold text-blue-600">📞 Floridda</div>
      <nav>
        <ul className="space-y-1">
          {items.map(({ href, icon: Icon, label }) => {
            const isActive = path === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors
                    ${isActive
                      ? 'bg-blue-100 text-gray-900 font-semibold'
                      : 'text-gray-400 hover:bg-gray-100 dark:text-gray-900 dark:hover:bg-blue-800'
                    }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}