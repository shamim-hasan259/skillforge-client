import { PlatformFeature } from "@/lib/type/types";
import { IconType } from "react-icons";
import {
  FaAward,
  FaBookOpen,
  FaChartLine,
  FaComments,
  FaLock,
  FaMoon,
  FaTasks,
  FaUserGraduate,
} from "react-icons/fa";

const features: PlatformFeature[] = [
  {
    id: 1,
    title: "Secure Authentication",
    description:
      "Sign up and log in securely with Better Auth and role-based access.",
    icon: FaLock,
  },
  {
    id: 2,
    title: "Interactive Courses",
    description:
      "Learn through structured lessons with real-world examples and projects.",
    icon: FaBookOpen,
  },
  {
    id: 3,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey and continue exactly where you left off.",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "Assignments & Quizzes",
    description:
      "Practice your knowledge with quizzes and hands-on coding assignments.",
    icon: FaTasks,
  },
  {
    id: 5,
    title: "Certificates",
    description:
      "Earn certificates after successfully completing your learning path.",
    icon: FaAward,
  },
  {
    id: 6,
    title: "Community Support",
    description:
      "Discuss with other learners, ask questions, and share your progress.",
    icon: FaComments,
  },
  {
    id: 7,
    title: "Student Dashboard",
    description:
      "Manage courses, bookmarks, certificates, and learning history in one place.",
    icon: FaUserGraduate,
  },
  {
    id: 8,
    title: "Dark Mode",
    description:
      "Switch seamlessly between light and dark themes for a better experience.",
    icon: FaMoon,
  },
];

export default function PlatformFeatures() {
  return (
    <section className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
            Platform Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Everything You Need to Learn Smarter
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            SkillForge provides all the essential tools you need to learn,
            practice, track progress, and become job-ready.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature: PlatformFeature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 transition-colors duration-300 group-hover:bg-indigo-600 dark:bg-indigo-500/20">
                  <Icon className="text-3xl text-indigo-600 transition-colors duration-300 group-hover:text-white dark:text-indigo-400" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
