import { serverMutuations } from "../core/server";
import { CreteateCourseFormData } from "../type/types";

export const createCourse = async (courseData: CreteateCourseFormData) => {
  return await serverMutuations("/api/courses", courseData, "POST");
};
