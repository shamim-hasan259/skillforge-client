import { FooterLink, SocialLink } from "@/lib/type/types";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks: FooterLink[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Courses",
    href: "/courses",
  },
  {
    id: 3,
    label: "Roadmaps",
    href: "/roadmaps",
  },
  {
    id: 4,
    label: "Community",
    href: "/community",
  },
];

const companyLinks: FooterLink[] = [
  {
    id: 1,
    label: "About",
    href: "/about",
  },
  {
    id: 2,
    label: "Contact",
    href: "/contact",
  },
  {
    id: 3,
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: 4,
    label: "Terms & Conditions",
    href: "/terms",
  },
];

const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    id: 2,
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    id: 4,
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    id: 5,
    href: "https://x.com",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <Link
              href="/"
              className="text-3xl font-bold text-slate-900 dark:text-white"
            >
              Skill<span className="text-indigo-600">Forge</span>
            </Link>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Learn modern web development through structured roadmaps,
              practical projects, quizzes, and career-focused learning.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social: SocialLink) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-slate-700 dark:text-slate-300"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link: FooterLink) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link: FooterLink) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-3">
              <p className="text-slate-600 dark:text-slate-400">
                Rangpur, Bangladesh
              </p>

              <p className="text-slate-600 dark:text-slate-400">
                support@skillforge.dev
              </p>

              <p className="text-slate-600 dark:text-slate-400">
                +880 1XXX-XXXXXX
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} SkillForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
