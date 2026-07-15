"use client";

import { createCourse } from "@/lib/action/action";
import { CreteateCourseFormData, User } from "@/lib/type/types";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaCloudUploadAlt,
  FaBookOpen,
  FaClock,
  FaUserGraduate,
  FaLayerGroup,
  FaTags, // Added icon for category
} from "react-icons/fa";

interface CourseCreateFormProps {
  user: User | null;
}

const CourseCreateForm = ({ user }: CourseCreateFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [category, setCategory] = useState("Web Development"); // Added Category State
  const [duration, setDuration] = useState("");
  const [students, setStudents] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (
      !title ||
      !description ||
      !duration ||
      !students ||
      !image ||
      !category
    ) {
      setMessage({
        type: "error",
        text: "All fields including the course image and category are required!",
      });
      return;
    }

    if (!user) {
      setMessage({
        type: "error",
        text: "You must be logged in to create a course.",
      });
      return;
    }

    try {
      setLoading(true);

      const imgBbFormData = new FormData();
      imgBbFormData.append("image", image);

      const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMAGE_API;

      const imgBbResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imgBbFormData,
        },
      );
      const imgBbData = await imgBbResponse.json();

      if (!imgBbData.success) {
        throw new Error("Image upload to ImgBB failed.");
      }

      const uploadedImageUrl = imgBbData.data.url;

      const courseData: CreteateCourseFormData & { category: string } = {
        title,
        description,
        level,
        category, // Included Category in courseData object
        duration,
        students,
        image: uploadedImageUrl,
        userId: user?.id,
      };

      const response = await createCourse(courseData);
      console.log("Course creation response:", response);
      if (response.status) {
        toast.success(`${response.message}`);
      }

      setMessage({
        type: "success",
        text: "Course published successfully with ImgBB image!",
      });

      setTitle("");
      setDescription("");
      setLevel("Beginner");
      setCategory("Web Development"); // Reset to default category
      setDuration("");
      setStudents("");
      setImage(null);
      setImagePreview(null);
    } catch (err: Error | unknown) {
      setMessage({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl transition-colors duration-300 dark:bg-slate-900 dark:shadow-slate-950/40">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4 dark:border-slate-800">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl dark:bg-blue-950/50 dark:text-blue-400">
          <FaBookOpen size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create New Course
          </h2>
          <p className="text-xs text-gray-400 dark:text-slate-500">
            Fill up the details to publish a new course
          </p>
        </div>
      </div>

      {message.text && (
        <div
          className={`p-4 rounded-xl text-sm font-medium mb-6 text-center transition-all ${
            message.type === "success"
              ? "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400"
              : "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
            Course Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Complete React.js"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="Learn modern React by building real-world projects..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white resize-none"
          />
        </div>

        {/* Updated grid from 3 columns to 4 columns to fit Category beautifully */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
              <FaLayerGroup className="text-gray-400" /> Level
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* New Category Dropdown Field */}
          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
              <FaTags className="text-gray-400" /> Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
            >
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
              <FaClock className="text-gray-400" /> Duration
            </label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g., 8 Weeks"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
              <FaUserGraduate className="text-gray-400" /> Initial Students
            </label>
            <input
              type="text"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
              placeholder="e.g., 4.2K"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 focus:outline-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
            Course Thumbnail
          </label>
          <div className="flex flex-col items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-200 border-dashed rounded-2xl cursor-pointer bg-gray-50/50 hover:bg-gray-50 dark:bg-slate-800/30 dark:border-slate-700 dark:hover:bg-slate-800/50 transition-colors">
              {imagePreview ? (
                <div className="relative w-full h-full p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-medium rounded-xl transition-opacity">
                    Change Image
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                  <FaCloudUploadAlt
                    size={36}
                    className="text-gray-400 dark:text-slate-500 mb-2"
                  />
                  <p className="mb-1 text-sm text-gray-600 dark:text-slate-400 font-medium">
                    Click to upload course image
                  </p>
                  <p className="text-xs text-gray-400 dark:text-slate-500">
                    PNG, JPG or WEBP (Recommended 16:9 ratio)
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition dark:bg-blue-600 dark:hover:bg-blue-500 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20 dark:shadow-none"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Publishing Course...</span>
            </>
          ) : (
            "Publish Course"
          )}
        </button>
      </form>
    </div>
  );
};

export default CourseCreateForm;
