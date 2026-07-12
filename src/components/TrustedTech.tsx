import { Technology } from "@/lib/type/types";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies: Technology[] = [
  {
    id: 1,
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 2,
    name: "React",
    icon: SiReact,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 4,
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    id: 5,
    name: "Express.js",
    icon: SiExpress,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
];

export default function TrustedTech() {
  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            Technologies We Cover
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            Learn the Technologies Used by Modern Companies
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-400">
            Build real-world projects with the most popular technologies used by
            startups and top software companies. Master the complete full-stack
            development journey from frontend to backend.
          </p>
        </div>

        {/* Grid Section */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.id}
                className="group rounded-3xl bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl dark:bg-slate-900 dark:hover:bg-slate-800/80 dark:hover:shadow-black/30 dark:hover:shadow-2xl"
              >
                {/* Icon Container */}
                <div className="flex justify-center">
                  <Icon className="text-5xl text-gray-700 transition-colors duration-300 group-hover:text-indigo-600 dark:text-slate-400 dark:group-hover:text-indigo-400" />
                </div>

                {/* Tech Title */}
                <h3 className="mt-5 text-center text-base font-semibold text-gray-900 transition-colors dark:text-slate-200">
                  {technology.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
