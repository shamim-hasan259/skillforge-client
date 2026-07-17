"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FaSearch, FaBookOpen, FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: "Frontend" | "Backend" | "DevOps" | "Career";
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Next.js 15: Server Actions & Partial Prerendering",
    excerpt: "Dive deep into the new features of Next.js 15. Learn how to write secure Server Actions, configure Partial Prerendering, and optimize Web Vitals.",
    content: "",
    category: "Frontend",
    author: {
      name: "Shamim Hasan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Founder & Lead Architect",
    },
    readTime: "6 min read",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Unlocking Tailwind CSS v4: What's New and How to Migrate",
    excerpt: "Tailwind CSS v4 introduces a brand new rust-powered engine, CSS-first configuration, and automatic dark mode setups. Here is everything you need to know.",
    content: "",
    category: "Frontend",
    author: {
      name: "Mahmudul Hasan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Senior Frontend Instructor",
    },
    readTime: "5 min read",
    date: "July 10, 2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Designing Scalable MongoDB Schemas for E-commerce Platforms",
    excerpt: "Should you embed or reference? Learn how to structure your MongoDB models for rapid product catalog queries, checkout transactions, and inventory management.",
    content: "",
    category: "Backend",
    author: {
      name: "Shamim Hasan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Founder & Lead Architect",
    },
    readTime: "8 min read",
    date: "July 05, 2026",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "How to Build a Tech Portfolio that Lands 6-Figure Interviews",
    excerpt: "Avoid generic project templates. Discover the types of projects hiring managers actually look for and how to document your engineering decisions.",
    content: "",
    category: "Career",
    author: {
      name: "Sara Rahman",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Community & Career Lead",
    },
    readTime: "4 min read",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Dockerizing Next.js for Production: Best Practices",
    excerpt: "Learn how to write a highly optimized, multi-stage Dockerfile for Next.js applications that reduces image sizes by up to 90% and enables smooth deployments.",
    content: "",
    category: "DevOps",
    author: {
      name: "Shamim Hasan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Founder & Lead Architect",
    },
    readTime: "7 min read",
    date: "June 18, 2026",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Clean Architecture in TypeScript Web APIs",
    excerpt: "Decouple your framework from your business logic. Let's walk through implementing repository patterns and dependency injection in node backend services.",
    content: "",
    category: "Backend",
    author: {
      name: "Mahmudul Hasan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      role: "Senior Frontend Instructor",
    },
    readTime: "9 min read",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Frontend", "Backend", "DevOps", "Career"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return initialPosts.find((post) => post.featured);
  }, []);

  return (
    <div className="flex-1 bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100/50 via-slate-50 to-slate-50 transition-colors duration-300 dark:from-indigo-950/20 dark:via-slate-950 dark:to-slate-950" />
        <div className="mx-auto max-w-7xl px-5">
          <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400">
            SkillForge Articles & Updates
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Insights & Guides for{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Software Engineers</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-slate-400">
            Read engineering guides, career advice, and deep dives written by industry professionals.
          </p>
        </div>
      </section>

      {/* Featured Post (Visible when no active search/category filter is selected) */}
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <section className="pb-12">
          <div className="mx-auto max-w-7xl px-5">
            <div className="overflow-hidden rounded-3xl bg-white shadow-md border border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-all hover:shadow-lg lg:flex">
              <div className="relative aspect-video w-full lg:aspect-auto lg:w-1/2 min-h-[350px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-6 top-6 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold text-white shadow">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-between p-8 lg:w-1/2 lg:p-12">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {featuredPost.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-extrabold text-gray-900 md:text-3xl dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Link href={`/blogs/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-400">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-slate-450">
                        {featuredPost.author.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Controls */}
      <section className="py-8 border-y border-gray-200/60 bg-white/50 dark:border-slate-900 dark:bg-slate-900/10">
        <div className="mx-auto max-w-7xl px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white dark:bg-indigo-600"
                    : "bg-white text-gray-700 hover:bg-gray-150 border border-gray-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-150/60 dark:bg-slate-900 dark:border-slate-850/60 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-slate-900/80 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                        <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">
                            {post.author.name}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-slate-450">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-gray-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt size={10} />
                          {post.date.split(",")[0]}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock size={10} />
                          {post.readTime.split(" ")[0]}m
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-900 dark:text-slate-600">
                <FaBookOpen size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">No posts found</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
                Try adjusting your search criteria or resetting the category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 rounded-full bg-indigo-650 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-md border border-gray-100 dark:bg-slate-900 dark:border-slate-800">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600 dark:text-slate-400">
              Get weekly updates on Next.js releases, Tailwind styling guides, and software engineering career opportunities.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed successfully! (Mock)");
              }}
              className="mx-auto mt-6 flex max-w-md flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
              />
              <button
                type="submit"
                className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
