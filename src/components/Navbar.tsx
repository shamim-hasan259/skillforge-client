"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { NavItem } from "@/lib/type/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";

type Session = typeof authClient.$Infer.Session;
type User = Session["user"];

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data } = useSession();
  const user = data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        {/* Desktop Profile & Dropdown */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              {/* প্রোফাইল ইমেজ বাটন */}
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full transition"
              >
                <Image
                  src={user?.image || "/default-avatar.png"}
                  alt={user?.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-200 dark:border-slate-800 hover:opacity-90"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white py-2 shadow-xl border border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-all z-50">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-800">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-slate-400 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800 transition"
                  >
                    Dashboard
                  </Link>

                  <hr className="border-gray-100 dark:border-slate-800 my-1" />

                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogout();
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30 transition text-left"
                  >
                    <FaSignOutAlt className="text-xs" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Login
            </Link>
          )}
        </div>

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
          <nav className="flex flex-col p-4 space-y-3">
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

            <hr className="border-gray-100 dark:border-slate-900 my-1" />

            {/* Mobile Auth & Links */}
            {user ? (
              <div className="flex flex-col space-y-2 pt-2">
                <div className="flex items-center gap-3 px-3 py-1">
                  <Image
                    src={user?.image || "/default-avatar.png"}
                    alt={user?.name || "User"}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      {user?.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-slate-400">
                      {user?.email}
                    </span>
                  </div>
                </div>

                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-900 transition"
                >
                  Profile
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-900 transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-center rounded-lg bg-red-500 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block text-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
