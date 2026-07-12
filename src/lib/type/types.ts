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
export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: string;
};

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}
export interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  name: string | null;
  image: string | null;
  createdAt?: Date | null;
}
