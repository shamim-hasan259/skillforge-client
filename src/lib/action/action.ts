"use server";
import { serverMutuations, removeServer } from "../core/server";
import { CreteateCourseFormData, UpdateCourseFormData } from "../type/types";
import { revalidatePath } from "next/cache";
export const createCourse = async (courseData: CreteateCourseFormData) => {
  return await serverMutuations("/api/courses", courseData, "POST");
};

export const updateCourse = async (
  courseData: UpdateCourseFormData,
  id: string,
) => {
  return await serverMutuations(
    `/api/update/course/${id}`,
    courseData,
    "PATCH",
  );
};

export const deleteCourse = async (id: string) => {
  const res = await removeServer(`/api/delete/course/${id}`, "DELETE");
  revalidatePath("/dashboard/manage-courses");
  return await res;
};
