import { Category } from "@/lib/type/types";
import Link from "next/link";

import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";

const categories: Category[] = [
  {
    id: 1,
    title: "Frontend",
    description: "React, Next.js, Tailwind CSS & TypeScript",
    totalCourses: 18,
    icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "Backend",
    description: "Node.js, Express & REST API",
    totalCourses: 14,
    icon: FaServer,
  },
  {
    id: 3,
    title: "Database",
    description: "MongoDB, Mongoose & Prisma",
    totalCourses: 10,
    icon: FaDatabase,
  },
  {
    id: 4,
    title: "TypeScript",
    description: "Master TypeScript from beginner to advanced",
    totalCourses: 8,
    icon: FaCode,
  },
  {
    id: 5,
    title: "UI / UX",
    description: "Create beautiful user interfaces",
    totalCourses: 9,
    icon: FaPaintBrush,
  },
  {
    id: 6,
    title: "Mobile Development",
    description: "Build Android & iOS applications",
    totalCourses: 7,
    icon: FaMobileAlt,
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-24 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
            Explore Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Learn by Category
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Choose your learning path and master the technologies that power
            modern web development.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category: Category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href="#"
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 transition-colors group-hover:bg-indigo-600 dark:bg-indigo-500/20">
                  <Icon className="text-3xl text-indigo-600 transition-colors group-hover:text-white dark:text-indigo-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {category.totalCourses} Courses
                  </span>

                  <span className="text-lg font-semibold text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-400">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
