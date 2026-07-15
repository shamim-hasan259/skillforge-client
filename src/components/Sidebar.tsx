"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaPlusCircle,
  FaUser,
  FaHeart,
  FaCog,
  FaBars,
  FaTimes,
  FaGraduationCap,
} from "react-icons/fa";
import { User } from "@/lib/type/types";
import Image from "next/image";

interface userProps {
  user: User | null;
}
const Sidebar = ({ user }: userProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Add Course",
      href: "/dashboard/add-course",
      icon: FaPlusCircle,
    },
    {
      name: "Manage Courses",
      href: "/dashboard/manage-courses",
      icon: FaCog,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: FaUser,
    },
    {
      name: "Favourite",
      href: "/dashboard/favourite",
      icon: FaHeart,
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-16 left-4 z-50 p-2 rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-100 p-5 flex flex-col justify-between transition-transform duration-300 dark:bg-slate-900 dark:border-slate-800/50 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2 py-3 border-b border-gray-100 dark:border-slate-800">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl dark:bg-blue-950/50 dark:text-blue-400">
              <FaGraduationCap size={24} />
            </div>
            <Link href="/dashboard">
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white leading-none">
                  LMS Board
                </h1>

                <span className="text-xs text-gray-400 dark:text-slate-500">
                  Dashboard panel
                </span>
              </div>
            </Link>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
                    }`}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-400 dark:text-slate-500"
                    }
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-2 border-t border-gray-100 dark:border-slate-800 flex items-center gap-3">
          <Image
            src={user?.image as string}
            alt={user?.name as string}
            height={30}
            width={30}
            className="rounded-full"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-gray-800 dark:text-slate-200 truncate">
              {user?.name}
            </p>
            <p className="text-xs text-gray-400 dark:text-slate-500 truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
