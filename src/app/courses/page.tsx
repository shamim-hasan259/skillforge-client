import { getCourses } from "@/lib/api/course";

import {
  FaClock,
  FaUserGraduate,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";
import CourseFilterControls from "./CourseFilterControls";
import { Course } from "@/lib/type/types";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
}

const CoursesPage = async ({ searchParams }: PageProps) => {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || "All";
  const currentSearch = resolvedParams.search || "";

  // আপনার API ফাংশনে অবজেক্ট আকারে প্যারামিটার পাস করা হচ্ছে
  const response = await getCourses({
    category: currentCategory,
    search: currentSearch,
  });

  const courses = response?.data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-screen dark:bg-slate-950">
      {/* হেডার */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          Explore Our Professional Courses
        </h1>
      </div>

      {/* সার্চ এবং ফিল্টার কন্ট্রোলস (ক্লায়েন্ট সাইড ইনপুট হ্যান্ডেল করবে) */}
      <CourseFilterControls
        currentCategory={currentCategory}
        currentSearch={currentSearch}
      />

      {/* কোর্সের গ্রিড লেআউট */}
      {courses.length === 0 ? (
        <div className="text-center py-20 dark:text-white text-gray-500 font-medium">
          No courses found for your search criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course: Course) => (
            <div
              key={course._id?.toString()}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between dark:bg-slate-900 dark:border-slate-800"
            >
              <div>
                {/* ১. ইমেজ সেকশন */}
                <div className="relative h-52 w-full overflow-hidden bg-blue-50 dark:bg-slate-850 flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* ২. কন্টেন্ট সেকশন */}
                <div className="p-6 space-y-4">
                  {/* লেভেল ব্যাজ */}
                  <div>
                    <span className="inline-block bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 text-xs font-semibold px-4 py-1.5 rounded-full">
                      {course.level || "Intermediate"}
                    </span>
                  </div>

                  {/* টাইটেল - আপনার ইমেজের মতো সুন্দর Serif এবং Italic ফন্ট স্টাইল দেওয়া হয়েছে */}
                  <h3 className="text-2xl font-bold font-serif italic text-slate-900 dark:text-white leading-tight line-clamp-2">
                    {course.title}
                  </h3>

                  {/* ডেসক্রিপশন */}
                  <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* মেটা ইনফো (icons) */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-medium text-gray-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <FaClock className="text-indigo-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaUserGraduate className="text-indigo-500" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaChartLine className="text-indigo-500" />
                      <span>{course.level || "Intermediate"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={`/courses/${course._id}`}
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-bold text-base transition-colors group/link"
                >
                  <span>View Course</span>
                  <FaArrowRight className="text-sm transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
