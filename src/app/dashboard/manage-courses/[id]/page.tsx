import { getSingleCourse } from "@/lib/api/course";

import { getUserSession } from "@/lib/user/user";
import EditForm from "./EditForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const CourseEditPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const user = await getUserSession();
  const { data: course } = await getSingleCourse(id);
  console.log(course);
  return (
    <div>
      <EditForm user={user} course={course} />
    </div>
  );
};

export default CourseEditPage;
