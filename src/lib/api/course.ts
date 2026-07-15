import { serverFetch } from "../core/server";
import { Course, GetCoursesParams, GetCoursesResponse } from "../type/types";

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

export const getSingleCourse = (id: string): Promise<Course> => {
  return serverFetch<Course>(`/api/get/course/${id}`);
};
