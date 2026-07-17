import UpadteAndDelete from "@/components/UpadteAndDelete";
import { getCourses } from "@/lib/api/course";
import { Course } from "@/lib/type/types";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaEye } from "react-icons/fa";

const DEFAULT_IMAGE_URL =
  "data:image/svg+xml;charset=UTF-8,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%23E2E8F0'/%3E%3Cpath d='M20 10l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z' fill='%2394A3B8'/%3E%3C/svg%3E";

const ManageCourse = async () => {
  const response = await getCourses();
  const courses: Course[] = response?.data || response || [];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Manage Courses</h2>
          <p className="text-sm text-slate-500 mt-1">
            Create, edit, or delete your existing courses from here.
          </p>
        </div>
        <Link
          href="/admin/courses/create"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 px-4 rounded-xl transition-all shadow-md shadow-indigo-600/10 w-full sm:w-auto justify-center"
        >
          <FaPlus size={14} /> Add New Course
        </Link>
      </div>

      {/* Main Container: Handles responsive block display on mobile, table layout on desktop */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse dynamic-table">
          {/* Hide the headers on mobile devices */}
          <thead className="hidden lg:table-header-group">
            <tr className="bg-slate-50 text-slate-700 text-xs font-semibold uppercase border-b border-slate-200">
              <th className="px-6 py-4">Course Info</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4">Level</th>
              <th className="px-6 py-4">Students</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 text-sm text-slate-600 flex flex-col lg:table-row-group">
            {courses && courses.length > 0 ? (
              courses.map((course: Course) => {
                const courseId = course._id!;

                return (
                  <tr
                    key={String(courseId)}
                    className="hover:bg-slate-50/80 transition-colors flex flex-col lg:table-row p-4 sm:p-6 lg:p-0 gap-3 lg:gap-0"
                  >
                    {/* Course Info */}
                    <td className="lg:px-6 lg:py-4 font-medium text-slate-900 flex items-center lg:table-cell">
                      <div className="flex items-center gap-3 w-full">
                        <Image
                          src={DEFAULT_IMAGE_URL}
                          alt={course.title || "Course Image"}
                          width={40}
                          height={40}
                          className="rounded-lg object-cover bg-slate-100 flex-shrink-0"
                          priority={false}
                        />
                        <div className="w-full max-w-xs lg:max-w-[200px] xl:max-w-xs">
                          <p className="font-semibold text-slate-900 line-clamp-2 lg:truncate">
                            {course.title}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="lg:px-6 lg:py-4 flex justify-between items-center lg:table-cell border-b border-dashed border-slate-100 pb-2 lg:pb-0 lg:border-none">
                      <span className="text-xs font-semibold text-slate-400 uppercase lg:hidden">
                        Category
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {course.category || "N/A"}
                      </span>
                    </td>

                    {/* Duration */}
                    <td className="lg:px-6 lg:py-4 flex justify-between items-center lg:table-cell border-b border-dashed border-slate-100 pb-2 lg:pb-0 lg:border-none">
                      <span className="text-xs font-semibold text-slate-400 uppercase lg:hidden">
                        Duration
                      </span>
                      <span className="text-slate-700 font-medium lg:font-normal">
                        {course.duration || "N/A"}
                      </span>
                    </td>

                    {/* Level */}
                    <td className="lg:px-6 lg:py-4 flex justify-between items-center lg:table-cell capitalize border-b border-dashed border-slate-100 pb-2 lg:pb-0 lg:border-none">
                      <span className="text-xs font-semibold text-slate-400 uppercase lg:hidden">
                        Level
                      </span>
                      <span className="text-slate-700 font-medium lg:font-normal">
                        {course.level || "Beginner"}
                      </span>
                    </td>

                    {/* Students */}
                    <td className="lg:px-6 lg:py-4 flex justify-between items-center lg:table-cell border-b border-dashed border-slate-100 pb-2 lg:pb-0 lg:border-none">
                      <span className="text-xs font-semibold text-slate-400 uppercase lg:hidden">
                        Students
                      </span>
                      <span className="text-slate-700 font-medium lg:font-normal">
                        {course.students || 0}
                      </span>
                    </td>

                    {/* Actions Panel */}
                    <td className="lg:px-6 lg:py-4 text-left lg:text-right lg:table-cell mt-2 lg:mt-0">
                      <div className="flex items-center justify-end gap-2 w-full lg:w-auto">
                        {/* View Button */}
                        <Link
                          href={`/courses/${courseId}`}
                          className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-slate-200 lg:border-none flex items-center gap-2 lg:gap-0 text-xs lg:text-sm font-medium w-full lg:w-auto justify-center"
                          title="View Course"
                        >
                          <FaEye size={16} />
                          <span className="lg:hidden">View Details</span>
                        </Link>

                        <div className="flex-1 lg:flex-none">
                          <UpadteAndDelete courseId={courseId} />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="flex w-full">
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-slate-400 w-full"
                >
                  No courses found. Click to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourse;
