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
  image?: string | null;
}
export interface LoginFormData {
  email: string;
  password: string;
}
export interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  name: string;
  image: string | null;
  createdAt?: Date;
}
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
