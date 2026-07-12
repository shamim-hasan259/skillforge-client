"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaLink } from "react-icons/fa";
import { RegisterFormData } from "@/lib/type/types";
import { authClient, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword || !imageUrl) {
      setError("All fields are required!");
      return;
    }

    if (password.length <= 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const registrationData: RegisterFormData = {
        name,
        email,
        password,
        confirmPassword,
        image: imageUrl,
      };

      const { data, error: authError } = await authClient.signUp.email({
        ...registrationData,
      });

      if (data) {
        signOut();
        toast.success("Register successfully");
        router.push("/login");
      }
      if (authError) {
        toast.error(authError?.message || "Registration failed");
      }

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setImageUrl("");
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 transition-colors duration-300 dark:bg-slate-950">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/50">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Register
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium mb-4 text-center dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
            />
          </div>

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
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
              Profile Image URL
            </label>
            <div className="relative">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/your-image.jpg"
                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 pointer-events-none">
                <FaLink />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
              Password
            </label>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-slate-300"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition dark:bg-blue-600 dark:hover:bg-blue-500 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Signing Up...</span>
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-slate-400 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
