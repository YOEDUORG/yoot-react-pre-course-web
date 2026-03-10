import { Outlet } from "react-router";
import Sidebar from "../components/shared/Sidebar";
import Header from "../components/shared/Header";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 bg-zinc-100">
        <Header />
        <div className="max-w-7xl mx-auto p-8">
          {/*  hiển thị component của route con   */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
