import { GraduationCap, LayoutDashboard, UsersRound } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router'; // Sử dụng useLocation

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // Lấy thông tin route hiện tại

  const onMenuToggle = () => {
    navigate('/home');
  };

  // Hàm kiểm tra xem route có đang active không
  const isActive = (path: string) => {
    // Kiểm tra path chính xác hoặc path con
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/students', label: 'Student', icon: UsersRound },
  ];

  return (
    <aside className='w-64 bg-white border-r border-gray-200 h-screen'>
      <div className='h-16 flex items-center gap-4 px-6 border-b border-gray-200'>
        <button
          className='inline-flex items-center justify-center gap-2 h-10 rounded-md cursor-pointer hover:bg-gray-50'
          onClick={onMenuToggle}>
          <GraduationCap className="text-blue-600" />
        </button>
        <h1 className='text-xl font-semibold text-gray-900 tracking-tight'>YOOEDU</h1>
      </div>

      <nav className='p-4'>
        <ul className='space-y-1'>
          {menuItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${active
                      ? 'bg-blue-50 text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;