import { Outlet } from 'react-router';
import Sidebar from '../components/shared/Sidebar';
import { SquareMenu } from 'lucide-react';

type Props = {};

function Layout({ }: Props) {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <div className='hidden md:block'>
        <Sidebar />
      </div>
      <main className='flex-1 bg-zinc-100'>
        <div className='w-full h-16 bg-white border-b border-gray-200'>
          <div className='flex md:hidden w-fit h-full items-center'>
            <SquareMenu className='p-2 bg-white text-blue-500' size={40}/>
          </div>
        </div>
        <div className='max-w-7xl mx-auto p-8'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
