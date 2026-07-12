import { RoadmapStep } from "@/lib/type/types";
import { IconType } from "react-icons";
import {
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const roadmap: RoadmapStep[] = [
  {
    id: 1,
    title: "HTML & CSS",
    description: "Build responsive layouts and modern web interfaces.",
    icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "JavaScript",
    description: "Learn programming fundamentals and DOM manipulation.",
    icon: FaCode,
  },
  {
    id: 3,
    title: "TypeScript",
    description: "Write scalable and type-safe applications.",
    icon: SiTypescript,
  },
  {
    id: 4,
    title: "React.js",
    description: "Build reusable UI components and SPA applications.",
    icon: FaReact,
  },
  {
    id: 5,
    title: "Next.js",
    description: "Create fast full-stack web applications.",
    icon: SiNextdotjs,
  },
  {
    id: 6,
    title: "Node.js",
    description: "Develop secure REST APIs and backend services.",
    icon: FaNodeJs,
  },
  {
    id: 7,
    title: "MongoDB",
    description: "Design databases and manage application data.",
    icon: FaDatabase,
  },
  {
    id: 8,
    title: "Build Projects",
    description: "Apply your knowledge by creating real-world projects.",
    icon: FaCheckCircle,
  },
];

export default function LearningRoadmap() {
  return (
    <section className="bg-white py-24 dark:bg-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
            Learning Roadmap
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Your Journey to Full Stack Development
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Follow our structured roadmap and become job-ready by learning one
            technology at a time.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-7 top-0 hidden h-full w-1 rounded-full bg-indigo-200 lg:block dark:bg-slate-700" />

          <div className="space-y-8">
            {roadmap.map((step: RoadmapStep) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 lg:flex-row lg:items-center lg:gap-8 lg:pl-24"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
                    <Icon className="text-2xl text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      Step {step.id}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
