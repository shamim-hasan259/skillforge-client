import { getUserSession } from "@/lib/user/user";
import CourseCreateForm from "./CourseCreateForm";

const AddCoursePage = async () => {
  const user = await getUserSession();
  console.log(user);
  return (
    <div>
      <CourseCreateForm user={user} />
    </div>
  );
};

export default AddCoursePage;
