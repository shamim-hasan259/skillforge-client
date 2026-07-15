import UpadteAndDelete from "@/components/UpadteAndDelete";
import { getCourses } from "@/lib/api/course";
import { Course } from "@/lib/type/types";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const DEFAULT_IMAGE_URL =
  "data:image/svg+xml;charset=UTF-8,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%23E2E8F0'/%3E%3Cpath d='M20 10l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z' fill='%2394A3B8'/%3E%3C/svg%3E";

const ManageCourse = async () => {
  const response = await getCourses();
  const courses: Course[] = response?.data || response || [];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Manage Courses</h2>
          <p className="text-sm text-slate-500 mt-1">
            Create, edit, or delete your existing courses from here.
          </p>
        </div>
        <Link
          href="/admin/courses/create"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 px-4 rounded-xl transition-all shadow-md shadow-indigo-600/10"
        >
          <FaPlus size={14} /> Add New Course
        </Link>
      </div>

      <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-700 text-xs font-semibold uppercase border-b border-slate-200">
              <th className="px-6 py-4">Course Info</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4">Level</th>
              <th className="px-6 py-4">Students</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
            {courses && courses.length > 0 ? (
              courses.map((course: Course) => {
                const courseId: string = course._id ?? "";

                return (
                  <tr
                    key={String(courseId)}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">
                      <div className="flex items-center gap-3">
                        <Image
                          src={DEFAULT_IMAGE_URL}
                          alt={course.title || "Course Image"}
                          width={40}
                          height={40}
                          className="rounded-lg object-cover bg-slate-100 flex-shrink-0"
                          priority={false}
                        />
                        <div className="max-w-[200px] sm:max-w-xs truncate">
                          <p className="truncate font-semibold">
                            {course.title}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {course.category || "N/A"}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.duration || "N/A"}
                    </td>
                    <td className="px-6 py-4 capitalize whitespace-nowrap">
                      {course.level || "Beginner"}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.students || 0}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <UpadteAndDelete courseId={courseId} />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-slate-400"
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
