"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { LoginFormData } from "@/lib/type/types";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      setIsLoading(true);
      const loginData: LoginFormData = {
        email,
        password,
      };

      const { data, error: authError } = await authClient.signIn.email({
        ...loginData,
      });
      if (data) {
        toast.success("Login successful!");
        router.push("/");
      }
      if (authError) {
        toast.error(authError.message || "Login failed. Please try again.");
      }

      // স্টেট ক্লিয়ার করা
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      // কাজ সফল হোক বা এরর আসুক—শেষে লোডিং ফলস করে দেওয়া
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 transition-colors duration-300 dark:bg-slate-950">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/50">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Sign In
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium mb-4 text-center dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-slate-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* ৩. বাটন ডিলিং এবং কন্ডিশনাল রেন্ডারিং */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition dark:bg-blue-600 dark:hover:bg-blue-500 mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <ImSpinner2 className="animate-spin text-lg" />
                <span>Signing In...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-slate-400 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
