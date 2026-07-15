"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-md w-full text-center space-y-6 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 dark:bg-slate-900 dark:border-slate-800/60 dark:shadow-slate-950/50">
        <div className="inline-flex p-4 bg-amber-50 text-amber-500 rounded-full dark:bg-amber-950/30 dark:text-amber-400 animate-bounce">
          <FaExclamationTriangle size={40} />
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-extrabold text-gray-900 tracking-tight dark:text-white">
            404
          </h1>
          <h2 className="text-xl font-bold text-gray-800 dark:text-slate-200">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-500 max-w-xs mx-auto dark:text-slate-400 leading-relaxed">
            Oops! The page you are looking for {`doesn'tdoesn't`} exist or has been moved to another URL.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 dark:shadow-none"
          >
            <FaHome size={16} />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;