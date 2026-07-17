"use client";

import React from "react";
import {
  FaBookOpen,
  FaUserGraduate,
  FaClock,
  FaPlus,
  FaGraduationCap,
} from "react-icons/fa";

const DashBoardPage = () => {
  const stats = [
    {
      id: 1,
      title: "Total Courses",
      value: "12",
      icon: <FaBookOpen size={22} />,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
    },
    {
      id: 2,
      title: "Total Students",
      value: "4.5K",
      icon: <FaUserGraduate size={22} />,
      color:
        "bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400",
    },
    {
      id: 3,
      title: "Hours Taught",
      value: "120 hrs",
      icon: <FaClock size={22} />,
      color:
        "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400",
    },
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Complete React.js Bootcamp",
      level: "Beginner",
      students: "1.2K",
      status: "Active",
    },
    {
      id: 2,
      title: "Next.js 15 Deep Dive",
      level: "Advanced",
      students: "850",
      status: "Active",
    },
    {
      id: 3,
      title: "Tailwind CSS Masterclass",
      level: "Intermediate",
      students: "2.4K",
      status: "Upcoming",
    },
  ];

  return (
    <div className="space-y-8 p-4 md:p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-5 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/10">
            <FaGraduationCap size={26} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white tracking-tight">
              Instructor Dashboard
            </h2>
            <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">
              Welcome back! Here is {`what's`} happening today.
            </p>
          </div>
        </div>

        <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-600/10 dark:shadow-none self-start sm:self-auto">
          <FaPlus size={14} />
          <span>Create New Course</span>
        </button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md dark:bg-slate-900 dark:border-slate-800/60"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-400 dark:text-slate-500">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                {stat.value}
              </h3>
            </div>
            <div className={`p-3 rounded-xl ${stat.color}`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Recent Published Courses Table Container */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-slate-800/60">
        <div className="p-5 border-b border-gray-100 dark:border-slate-800/60">
          <h4 className="font-bold text-gray-900 dark:text-white text-base">
            Recent Published Courses
          </h4>
        </div>

        {/* Scrollbar-free scroll container */}
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full text-left border-collapse text-sm min-w-[600px] md:min-w-full">
            <thead>
              <tr className="bg-gray-50 text-gray-400 font-semibold dark:bg-slate-800/30 dark:text-slate-500">
                <th className="p-4 pl-6">Course Name</th>
                <th className="p-4">Level</th>
                <th className="p-4">Students</th>
                <th className="p-4 pr-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-700 dark:divide-slate-800/40 dark:text-slate-300">
              {recentCourses.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-gray-50/40 transition-colors dark:hover:bg-slate-800/10"
                >
                  <td className="p-4 pl-6 font-medium text-gray-900 dark:text-white max-w-[240px] truncate">
                    {course.title}
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                      {course.level}
                    </span>
                  </td>
                  <td className="p-4 font-medium">{course.students}</td>
                  <td className="p-4 pr-6 text-right">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-semibold ${
                        course.status === "Active"
                          ? "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400"
                          : "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
