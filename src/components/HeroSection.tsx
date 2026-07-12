import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden transition-colors duration-300">
      {/* Background with Dark/Light Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white transition-colors duration-300 dark:from-indigo-950/20 dark:via-slate-950 dark:to-slate-950" />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center">
        {/* Badge */}
        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400">
          Learn • Practice • Build • Get Hired
        </span>

        {/* Heading */}
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-gray-900 transition-colors md:text-7xl dark:text-white">
          Build Real Skills.
          <br />
          Launch Your
          <span className="text-indigo-600 dark:text-indigo-400">
            {" "}
            Tech Career.
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 transition-colors dark:text-slate-400">
          SkillForge helps you master modern web development through structured
          roadmaps, hands-on projects, quizzes, and progress tracking—all in one
          place.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/courses"
            className="rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-center"
          >
            Explore Courses
          </Link>

          <Link
            href="/roadmaps"
            className="rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900 text-center"
          >
            View Roadmaps
          </Link>
        </div>

        {/* Stats Grid Card */}
        <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-xl transition-all md:grid-cols-4 dark:bg-slate-900 dark:shadow-black/40 border border-transparent dark:border-slate-800/50">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              50+
            </h3>
            <p className="mt-2 text-gray-600 dark:text-slate-400">Courses</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              100+
            </h3>
            <p className="mt-2 text-gray-600 dark:text-slate-400">Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              20K+
            </h3>
            <p className="mt-2 text-gray-600 dark:text-slate-400">Students</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              95%
            </h3>
            <p className="mt-2 text-gray-600 dark:text-slate-400">
              Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
