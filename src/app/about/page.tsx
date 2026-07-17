import Link from "next/link";
import {
  FaBullseye,
  FaEye,
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

export const metadata = {
  title: "About Us - SkillForge",
  description: "Learn about the mission, vision, values, journey, and the talented team behind SkillForge, the leading tech education platform.",
};

const coreValues = [
  {
    id: 1,
    title: "Practical Learning",
    description: "We focus on project-based, hands-on learning. We believe programming is best learned by building real-world applications, not just reading theory.",
    icon: FaGraduationCap,
    color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40",
  },
  {
    id: 2,
    title: "Student-First Success",
    description: "Every roadmap, assignment, and quiz is designed with the student's success in mind. We provide the mentorship and structure needed to land a tech job.",
    icon: FaUsers,
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    id: 3,
    title: "Continuous Innovation",
    description: "Tech moves rapidly. We constantly update our curriculum to cover the latest industry standards, tools, and best practices like Next.js 15, Tailwind v4, and MongoDB.",
    icon: FaLightbulb,
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40",
  },
  {
    id: 4,
    title: "Community Driven",
    description: "We foster an inclusive and highly collaborative community. Students learn together, share project feedback, and network for job opportunities.",
    icon: FaRocket,
    color: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Dr. Shamim Hasan",
    role: "Founder & Lead Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Passionate developer, educator, and system architect with over 10 years of software development experience.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Mahmudul Hasan",
    role: "Senior Frontend Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "React and Next.js specialist dedicated to teaching pixel-perfect UI design, smooth animations, and optimized client logic.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Sara Rahman",
    role: "Community & Career Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Guiding students through portfolio building, resume preparation, mock interviews, and linking graduates with industry partners.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

const milestones = [
  {
    year: "2023",
    title: "The Idea",
    description: "SkillForge was conceived to bridge the gap between traditional computer science degrees and practical industry expectations.",
  },
  {
    year: "2024",
    title: "First Batch Launch",
    description: "Launched our first frontend engineering bootcamp with 500+ enthusiastic students. 80% secured internships or jobs within 6 months.",
  },
  {
    year: "2025",
    title: "Platform Scaling",
    description: "Transitioned to a customized interactive learning platform featuring interactive roadmaps, coding exercises, and progress tracking.",
  },
  {
    year: "2026",
    title: "Going Global",
    description: "Expanding into advanced full-stack systems, Devops roadmaps, and hosting local developer community workshops worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex-1 bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      {/* Header section */}
      <section className="relative overflow-hidden py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100/50 via-slate-50 to-slate-50 transition-colors duration-300 dark:from-indigo-950/20 dark:via-slate-950 dark:to-slate-950" />
        <div className="mx-auto max-w-7xl px-5">
          <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400">
            About SkillForge
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Empowering the Next Generation of{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Tech Talents</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-slate-400">
            We build state-of-the-art learning pathways designed to take you from a absolute beginner to a confident software developer. Our structured roadmaps ensure you never get lost.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-3xl bg-white p-8 shadow-md border border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-all hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 mb-6">
                <FaBullseye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-slate-400">
                To democratize top-tier software engineering education. We aim to break down complex architectural patterns, language syntaxes, and database concepts into bite-sized, practical roadmaps that any motivated learner can master.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-white p-8 shadow-md border border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-all hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 mb-6">
                <FaEye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-slate-400">
                To become the world's most trusted developer sandbox. We envision an ecosystem where students do not just passively watch videos, but write clean code, tackle automated code reviews, deploy real projects, and build lifelong technical relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Values That Drive Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-slate-400">
              Our culture and educational philosophy are built upon these foundational principles.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${value.color} mb-5 transition-transform group-hover:scale-110`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-slate-400">
              How we went from a simple idea to a thriving community of modern web developers.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl border-l border-indigo-200 dark:border-slate-800 pl-6 sm:pl-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative mb-12 last:mb-0 pl-4">
                <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-slate-50 dark:ring-slate-950">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-slate-400 leading-7">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-slate-400">
              The engineers, designers, and mentors behind the SkillForge platform.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-slate-900 dark:border-slate-800 transition-all hover:shadow-md"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-400">
                  {member.bio}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={member.github}
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-slate-800 dark:text-slate-400 transition-all"
                  >
                    <FaGithub size={16} />
                  </Link>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-slate-800 dark:text-slate-400 transition-all"
                  >
                    <FaLinkedin size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 md:p-16 shadow-xl dark:from-indigo-900 dark:to-violet-900">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Upgrade Your Developer Skills?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-indigo-100">
              Browse our custom learning paths and start building projects that get you hired by elite tech teams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/courses"
                className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 transition"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-indigo-400 px-8 py-3.5 text-base font-semibold text-white hover:bg-indigo-500/30 transition"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
