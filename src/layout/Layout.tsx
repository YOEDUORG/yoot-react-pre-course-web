import { Outlet } from 'react-router';
import Sidebar from '../components/shared/Sidebar';

type Props = {};

function Layout({}: Props) {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar />

      <main className='flex-1 bg-zinc-100'>
        <div className='w-full h-16 bg-white border-b border-gray-200'></div>
        <div className='max-w-7xl mx-auto p-8'>
          <Outlet />

        </div>
      </main>
    </div>
  );
}

export default Layout;
