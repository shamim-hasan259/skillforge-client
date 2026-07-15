import { CreteateCourseFormData, UpdateCourseFormData } from "../type/types";

type mutaionData = CreteateCourseFormData | UpdateCourseFormData;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const serverMutuations = async (
  path: string,
  data: mutaionData,
  method: string,
) => {
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export interface GetCoursesParams {
  category?: string;
  search?: string;
}

export const serverFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, {
    cache: "no-store",
  });

  const data = await res.json();
  console.log(data);
  return data;
};

export const removeServer = async (path: string, method: string) => {
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
