import Sidebar from "@/components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 gap-8 mt-4 ">
      <div className="col-span-12 md:col-span-3 lg:col-span-2">
        <Sidebar />
      </div>
      <main className="col-span-12 md:col-span-9 lg:col-span-10">
        {children}
      </main>
    </div>
  );
};

export default layout;
