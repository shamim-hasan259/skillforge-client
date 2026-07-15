import { serverMutuations } from "../core/server";
import { CreteateCourseFormData, UpdateCourseFormData } from "../type/types";

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
