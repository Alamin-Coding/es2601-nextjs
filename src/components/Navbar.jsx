"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Desktop link styles
const desktopBase =
  "text-sm font-medium transition-colors hover:text-blue-600";
const desktopActive = "text-blue-600";
const desktopInactive = "text-gray-600";

// Mobile link styles
const mobileBase = "block rounded-md px-3 py-2 text-base font-medium";
const mobileActive = "bg-blue-50 text-blue-600";
const mobileInactive = "text-gray-700 hover:bg-gray-50";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MyBrand
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Suspense
                fallback={
                  <Link
                    href={item.href}
                    className={`${desktopBase} ${desktopInactive}`}
                  >
                    {item.label}
                  </Link>
                }
              >
                <NavLink
                  href={item.href}
                  className={desktopBase}
                  activeClassName={desktopActive}
                  inactiveClassName={desktopInactive}
                >
                  {item.label}
                </NavLink>
              </Suspense>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Suspense
                fallback={
                  <Link
                    href={item.href}
                    className={`${mobileBase} ${mobileInactive}`}
                  >
                    {item.label}
                  </Link>
                }
              >
                <NavLink
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={mobileBase}
                  activeClassName={mobileActive}
                  inactiveClassName={mobileInactive}
                >
                  {item.label}
                </NavLink>
              </Suspense>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
