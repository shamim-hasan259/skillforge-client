"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { NavItem, User } from "@/lib/type/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Roadmaps", href: "/roadmaps" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();
  const user: User | undefined = data?.user;
  // console.log("user", user);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-colors duration-300 dark:bg-slate-950 dark:shadow-slate-900 border-b border-gray-100 dark:border-slate-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-slate-900 transition-colors dark:text-white"
        >
          Skill<span className="text-blue-600 dark:text-blue-500">Forge</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "font-semibold text-blue-600 dark:text-blue-500"
                  : "text-gray-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        {user ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleLogout}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Logout
            </button>
            <Image
              src={user?.image}
              alt={user?.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Login
            </Link>
          </div>
        )}

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="text-2xl md:hidden text-gray-700 transition-colors dark:text-slate-300"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white border-b border-gray-100 md:hidden transition-colors dark:bg-slate-950 dark:border-slate-900">
          <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2 transition ${
                  pathname === item.href
                    ? "bg-blue-50 font-semibold text-blue-600 dark:bg-blue-950/50 dark:text-blue-500"
                    : "text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  Logout
                </button>
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            ) : (
              <div className="hidden items-center gap-3 md:flex">
                <Link
                  href="/login"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  Login
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
