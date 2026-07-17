"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are the courses self-paced or live bootcamps?",
    answer: "Most of our learning roadmaps are completely self-paced, allowing you to learn at your convenience. However, we also host scheduled cohorts with weekly live review calls and mentorship options.",
  },
  {
    question: "Do I get a certificate after completing a roadmap?",
    answer: "Yes, you will receive a shareable digital certificate of completion once you finish all core modules, submit assignments, and pass the quizzes in a roadmap.",
  },
  {
    question: "Can I get direct help if I get stuck on a coding assignment?",
    answer: "Absolutely! We have a dedicated Discord channel for active students where our teaching assistants and peer community answer questions, debug code blocks, and review pull requests.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day, no-questions-asked refund policy on all premium course tracks. Just send an email to support@skillforge.dev within 14 days of your purchase.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API submission wait
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast.success("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex-1 bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      {/* Header section */}
      <section className="relative overflow-hidden py-16 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100/50 via-slate-50 to-slate-50 transition-colors duration-300 dark:from-indigo-950/20 dark:via-slate-950 dark:to-slate-950" />
        <div className="mx-auto max-w-7xl px-5">
          <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400">
            Contact Support & Sales
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            We'd Love to{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Hear From You</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-slate-400">
            Have questions about our curriculums, pricing, enterprise plans, or need technical help? Fill out the form or reach out directly.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <p className="mt-3 text-sm text-gray-600 dark:text-slate-400 leading-6">
                  Fill out the form and our team will get back to you within 24 hours. You can also contact us via email or phone.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                        Our Location
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-slate-400 leading-5">
                        Rangpur, Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                      <FaEnvelope size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                        Support & Email
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-slate-400">
                        support@skillforge.dev
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                      <FaPhoneAlt size={15} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                        Call Us
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-slate-400">
                        +880 1XXX-XXXXXX
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                      <FaClock size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                        Available Hours
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-slate-400">
                        Sunday – Thursday, 10:00 AM – 6:00 PM (GMT+6)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Tech Map Visual */}
              <div className="mt-10 hidden lg:block overflow-hidden rounded-2xl border border-gray-250 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 p-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-slate-800">
                  <span className="text-xs font-bold text-gray-700 dark:text-slate-350">
                    SkillForge Global Hub
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="mt-3 aspect-[16/9] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] rounded-lg opacity-40" />
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-150/60 dark:bg-slate-900 dark:border-slate-850/65">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-gray-750 dark:text-slate-300"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-850 dark:bg-slate-950 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-gray-750 dark:text-slate-300"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-850 dark:bg-slate-950 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold text-gray-750 dark:text-slate-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-850 dark:bg-slate-950 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-gray-750 dark:text-slate-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your details here..."
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-850 dark:bg-slate-950 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-indigo-650 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition disabled:opacity-70 flex items-center justify-center bg-indigo-600"
                  >
                    {isSubmitting ? "Sending message..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-gray-650 dark:text-slate-400">
              Quick answers to common questions about our programs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl bg-white border border-gray-150 dark:bg-slate-900 dark:border-slate-850"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-semibold text-gray-900 dark:text-white focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="text-gray-500">
                      {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-100 bg-slate-50/50 p-5 text-sm leading-6 text-gray-600 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
