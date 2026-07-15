import { serverFetch } from "../core/server";
import {
  Course,
  GetCoursesParams,
  GetCoursesResponse,
  GetSingleCourseResponse,
} from "../type/types";

export const getCourses = async ({
  category,
  search,
}: GetCoursesParams = {}): Promise<GetCoursesResponse> => {
  const params = new URLSearchParams();

  if (category) {
    params.append("category", category);
  }

  if (search) {
    params.append("search", search);
  }

  return serverFetch<GetCoursesResponse>(
    `/api/get/courses?${params.toString()}`,
  );
};

export const getSingleCourse = (
  id: string,
): Promise<GetSingleCourseResponse> => {
  return serverFetch<GetSingleCourseResponse>(`/api/get/course/${id}`);
};
