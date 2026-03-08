import { GraduationCap, LayoutDashboard, Users ,MirrorRectangular} from "lucide-react";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();

  const onMenuToggle = () => {
    navigate("/home");
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="h-16 flex items-center gap-4 px-6 border-b border-gray-200">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30 disabled:bg-gray-500 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 rounded-md cursor-pointer"
          onClick={onMenuToggle}
        >
          <GraduationCap />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">YOOEDU</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </a>
          </li>
          <li>
            <button
              onClick={() => navigate("/listStudent")}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg w-full text-left"
            >
              <Users className="w-5 h-5" />
              Students
            </button>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg"
            >
              <LayoutDashboard className="w-5 h-5" />
             Teachers
            </a>
          </li>
           <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg"
            >
              <MirrorRectangular className="w-5 h-5" />
              
            Classes
            </a>
          </li>
              <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg"
            >
              <LayoutDashboard className="w-5 h-5" />
            Reports
            </a>
          </li>
              <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg"
            >
              <LayoutDashboard className="w-5 h-5" />
           Setttings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
