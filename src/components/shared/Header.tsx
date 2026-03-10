import { Menu, Search, Bell, HelpCircle } from "lucide-react";

function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-100">
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-80">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Quick search..."
            className="bg-transparent outline-none ml-2 text-sm w-full"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        <button>
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}

export default Header;
