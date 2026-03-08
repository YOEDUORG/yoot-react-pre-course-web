import { GraduationCap, LayoutDashboard, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // lấy path hiện tại

  const onMenuToggle = () => {
    navigate("/home");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="h-16 flex items-center gap-4 px-6 border-b border-gray-200">
        <button
          className="h-10 rounded-md cursor-pointer"
          onClick={onMenuToggle}
        >
          <GraduationCap />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">YOOEDU</h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">

          {/* Dashboard */}
          <li>
            <button
              onClick={() => navigate("/dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg
              ${
                isActive("/home")
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
          </li>

          {/* Students */}
          <li>
            <button
              onClick={() => navigate("/students")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg
              ${
                isActive("/students")
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Users className="w-5 h-5" />
              Students
            </button>
          </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;