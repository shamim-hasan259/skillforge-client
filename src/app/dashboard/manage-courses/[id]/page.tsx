import { getSingleCourse } from "@/lib/api/course";

import { getUserSession } from "@/lib/user/user";
import EditForm from "./EditForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const CourseEditPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const user = await getUserSession();
  const response = await getSingleCourse(id);
  const course = response.data;

  return (
    <div>
      <EditForm user={user} course={course} />
    </div>
  );
};

export default CourseEditPage;
