import { ObjectId } from "mongodb";
import { IconType } from "react-icons";

export interface NavItem {
  name: string;
  href: string;
}
export type Technology = {
  id: number;
  name: string;
  icon: IconType;
};
export interface CreteateCourseFormData {
  userId: string;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  students: string;
  category: string;
}
export type UpdateCourseFormData = {
  title?: string;
  description?: string;
  image?: string;
  level?: string;
  price?: number;
  category?: string;
};
export type Course = {
  _id?: string;
  userId?: string;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  students: string;
  category: string;
};

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image?: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}
export type User = {
  id: string;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};
export type Category = {
  id: number;
  title: string;
  description: string;
  totalCourses: number;
  icon: IconType;
};

export type RoadmapStep = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

export type PlatformFeature = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};
export interface GetCoursesResponse {
  success: boolean;
  message: string;
  data: Course[];
}

export interface GetCoursesParams {
  category?: string;
  search?: string;
}

export type FooterLink = {
  id: number;
  label: string;
  href: string;
};

export type SocialLink = {
  id: number;
  href: string;
  icon: IconType;
};
