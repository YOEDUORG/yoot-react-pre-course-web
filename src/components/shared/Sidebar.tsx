import { GraduationCap, LayoutDashboard ,Users  } from 'lucide-react';
import { useNavigate , NavLink} from 'react-router';

function Sidebar() {
  const navigate = useNavigate();
  const linkBase = 'flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg';
  const linkActive = 'bg-blue-50 text-blue-600';
  const linkInactive = 'text-gray-900 hover:bg-gray-100';

  const onMenuToggle = () => {
    navigate('/home');
  };

  return (
    <aside className='w-64 bg-white border-r border-gray-200'>
      <div className='h-16 flex items-center gap-4 px-6 border-b border-gray-200'>
        <button
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30 disabled:bg-gray-500 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 rounded-md cursor-pointer'
          onClick={onMenuToggle}>
          <GraduationCap />
        </button>
        <h1 className='text-xl font-semibold text-gray-900'>YOOEDU</h1>
      </div>
      <nav className='p-4'>
        <ul className='space-y-2'>
          <li>
            <NavLink
              to='/dashboard'
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              <LayoutDashboard className='w-5 h-5' />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/students'
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              <Users className='w-5 h-5' />
              Students
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
