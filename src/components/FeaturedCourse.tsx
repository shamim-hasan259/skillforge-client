import { getCourses } from "@/lib/api/course";
import { Course } from "@/lib/type/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaClock, FaSignal, FaUsers } from "react-icons/fa";

export default async function FeaturedCourses() {
  const { data: courses } = await getCourses();

  return (
    <section className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header Section */}
        <div className="text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            Featured Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Start Learning Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Explore our most popular courses and start building real-world
            skills with hands-on projects.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course: Course) => (
            <article
              key={course?._id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900 dark:shadow-black/20 dark:hover:shadow-2xl dark:hover:shadow-indigo-500/5"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition duration-500 grouphover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  {course.level}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                  {course.title}
                </h3>

                <p className="mt-3 text-slate-600 transition-colors dark:text-slate-400">
                  {course.description}
                </p>

                {/* Metadata (Icons & Info) */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 transition-colors dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-indigo-500 dark:text-indigo-400" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUsers className="text-indigo-500 dark:text-indigo-400" />
                    <span>{course.students}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaSignal className="text-indigo-500 dark:text-indigo-400" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Single Course Link */}
                <Link
                  href={`/courses/${course._id}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:gap-3 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  View Course
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/courses"
            className="rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
