"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";

interface FilterProps {
  currentCategory: string;
  currentSearch: string;
}

const CourseFilterControls = ({
  currentCategory,
  currentSearch,
}: FilterProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(currentSearch);
  const categories = [
    "All",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
  ];

  // ইউআরএল আপডেট করার মূল লজিক
  const updateFilters = (selectedCat: string, searchText: string) => {
    const params = new URLSearchParams();

    if (selectedCat && selectedCat !== "All") {
      params.set("category", selectedCat);
    }

    if (searchText) {
      params.set("search", searchText);
    }

    // নতুন ইউআরএল তৈরি করে পুশ করা হচ্ছে, যাতে সার্ভার কম্পোনেন্ট রি-ফেচ করে
    router.push(`${pathname}?${params.toString()}`);
  };

  // সার্চ ইনপুটের জন্য ৪০০ মিলিসেকেন্ড ডিবান্সিং (যাতে প্রতি অক্ষরে এপিআই কল না হয়)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== currentSearch) {
        updateFilters(currentCategory, search);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="space-y-6 mb-12">
      {/* সার্চ বার */}
      <div className="relative max-w-xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search courses by title..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 text-gray-900 rounded-2xl focus:outline-none focus:border-blue-500 dark:bg-slate-900 dark:border-slate-800 dark:text-white"
        />
      </div>

      {/* ক্যাটাগরি বাটন সমূহ */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => updateFilters(category, search)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
              currentCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-200 text-gray-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilterControls;
