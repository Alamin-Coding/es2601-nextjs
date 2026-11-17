"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    exact: true,
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Posts",
    href: "/dashboard/posts",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    label: "Comments",
    href: "/dashboard/comments",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
];

const logoutIcon =
  "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1";

const linkBase =
  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors";
const linkActive = "bg-blue-50 text-blue-600";
const linkInactive = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

function Icon({ path }) {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
        <Link href="/admin" className="text-lg font-bold text-gray-900">
          MyBrand <span className="text-blue-600">Admin</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Open sidebar"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
          <Link href="/admin" className="text-xl font-bold text-gray-900">
            MyBrand <span className="text-blue-600">Admin</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Menu
          </p>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Suspense
                  fallback={
                    <Link
                      href={item.href}
                      className={`${linkBase} ${linkInactive}`}
                    >
                      <Icon path={item.icon} />
                      {item.label}
                    </Link>
                  }
                >
                  <NavLink
                    href={item.href}
                    exact={item.exact}
                    onClick={() => setIsOpen(false)}
                    className={linkBase}
                    activeClassName={linkActive}
                    inactiveClassName={linkInactive}
                  >
                    <Icon path={item.icon} />
                    {item.label}
                  </NavLink>
                </Suspense>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom: profile + logout */}
        <div className="border-t border-gray-200 p-3">
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
              A
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-900">
                Admin User
              </p>
              <p className="truncate text-xs text-gray-500">
                admin@mybrand.com
              </p>
            </div>
          </div>

          <Link
            href="/login"
            className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <Icon path={logoutIcon} />
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}