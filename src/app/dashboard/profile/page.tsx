import Link from "next/link";
import { getUserSession } from "@/lib/user/user";
import { FaUser, FaEnvelope, FaPen, FaBriefcase } from "react-icons/fa";

const ProfilePage = async () => {
  const user = await getUserSession();
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 dark:bg-slate-900 dark:border-slate-800/60 dark:shadow-slate-950/40">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600" />

        <div className="px-6 pb-6 text-center relative">
          <div className="w-24 h-24 mx-auto -mt-12 mb-4">
            {user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.image}
                alt="Avatar"
                className="w-full h-full rounded-2xl object-cover border-4 border-white dark:border-slate-900 shadow-md"
              />
            ) : (
              <div className="w-full h-full rounded-2xl bg-blue-50 text-blue-600 border-4 border-white dark:border-slate-900 dark:bg-slate-800 dark:text-blue-400 flex items-center justify-center shadow-md">
                <FaUser size={36} />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                {user?.name || "User Name"}
              </h3>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50/70 p-3 rounded-xl dark:bg-slate-800/40 dark:text-slate-400">
              <FaEnvelope className="text-gray-400" />
              <span className="truncate">
                {user?.email || "user@example.com"}
              </span>
            </div>
            <Link
              href="/dashboard/profile/edit"
              className="inline-flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/60"
            >
              <FaPen size={12} />
              <span>Edit Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
