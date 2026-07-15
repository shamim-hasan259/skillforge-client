"use client"
import { deleteCourse } from "@/lib/action/action";
import Link from "next/link";
import toast from "react-hot-toast";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
const UpadteAndDelete = ({ courseId }: { courseId: string }) => {
  const HandleCourseDelete = async () => {
    const res = await deleteCourse(courseId);
    console.log(res)
    if (res.success) {
      toast.success(`${res.message}`);
    }
  };
  return (
    <div>
      <Link
        href={`/dashboard/manage-courses/${courseId}`}
        className="inline-flex items-center justify-center p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
        title="Edit Course"
      >
        <FaEdit size={16} />
      </Link>

      <button
        onClick={HandleCourseDelete}
        type="button"
        className="inline-flex items-center justify-center p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
        title="Delete Course"
      >
        <FaTrashAlt size={16} />
      </button>
    </div>
  );
};

export default UpadteAndDelete;
