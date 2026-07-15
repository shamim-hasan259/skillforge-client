import { getSingleCourse } from "@/lib/api/course";
import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaUserGraduate,
  FaChartLine,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const CourseDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await getSingleCourse(id);
  const course = res.data;

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 dark:bg-slate-950 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Course not found!</h2>
        <Link
          href="/courses"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold"
        >
          <FaArrowLeft /> Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-5">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 mb-8 text-indigo-600 font-semibold"
        >
          <FaArrowLeft />
          Back to Courses
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative w-full h-[250px] md:h-[450px]">
            <Image
              src={course.image}
              alt={course.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="p-8 space-y-8">
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {course.category}
              </span>

              <h1 className="text-4xl font-bold mb-5">{course.title}</h1>

              <p className="text-slate-600 dark:text-slate-400 leading-8">
                {course.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="border rounded-2xl p-5 flex items-center gap-4">
                <FaClock className="text-indigo-600 text-2xl" />

                <div>
                  <p className="text-sm text-slate-500">Duration</p>
                  <h3 className="font-bold">{course.duration}</h3>
                </div>
              </div>

              <div className="border rounded-2xl p-5 flex items-center gap-4">
                <FaUserGraduate className="text-indigo-600 text-2xl" />

                <div>
                  <p className="text-sm text-slate-500">Students</p>
                  <h3 className="font-bold">{course.students}</h3>
                </div>
              </div>

              <div className="border rounded-2xl p-5 flex items-center gap-4">
                <FaChartLine className="text-indigo-600 text-2xl" />

                <div>
                  <p className="text-sm text-slate-500">Skill Level</p>
                  <h3 className="font-bold">{course.level}</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-5">What You Learn</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Build real-world projects",
                  "Understand core concepts",
                  "Create production-ready applications",
                  "Improve problem-solving skills",
                  "Learn industry best practices",
                  "Deploy your projects",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
