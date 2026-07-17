import Sidebar from "@/components/Sidebar";
import { getUserSession } from "@/lib/user/user";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserSession();
  const sidebarUser = user ? { ...user, userId: user.id } : null;
  return (
    <div className="grid grid-cols-12 gap-8 py-8 ">
      <div className="col-span-12 md:col-span-3 lg:col-span-2">
        <Sidebar user={sidebarUser} />
      </div>
      <main className="col-span-12 md:col-span-9 lg:col-span-10">
        {children}
      </main>
    </div>
  );
};

export default layout;
