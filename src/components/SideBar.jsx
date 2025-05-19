import React from "react";
import { Home, Music2, Gamepad2, Book, Film, Expand } from "lucide-react"; // Optional icons
import { useSelector } from "react-redux";

const SideBar = () => {

  const isMenuOpen = useSelector((store)=> store.nav.isMenuOpen)

  return !isMenuOpen ? null : (
    <div className="w-56 -z-10 h-screen overflow-y-auto bg-white shadow-sm p-4 border-r border-gray-200 text-sm">
      {/* Section 1 */}
      <div className="mb-4">

      <li className="flex items-center font-bold gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Home size={18} />
            <span>Home</span>
          </li>
          <li className="flex items-center font-bold gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Music2 size={18} />
            <span>Shorts</span>
          </li>
          <li className="flex items-center font-bold gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Gamepad2 size={18} />
            <span>Videos</span>
          </li>
          
          <li className="flex items-center gap-3 font-bold px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Expand size={18} />
            <span>Explore</span>
          </li>
        <h2 className="text-gray-600 text-lg font-bold uppercase mb-2">Subscriptions</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Home size={18} />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Music2 size={18} />
            <span>Music</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Gamepad2 size={18} />
            <span>Gaming</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Book size={18} />
            <span>Study</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Film size={18} />
            <span>Dance</span>
          </li>
        </ul>
      </div>

      {/* Section 2 (copied manually) */}
      <div className="mb-4">
        <h2 className="text-gray-600 text-lg font-bold uppercase mb-2">Watch Later</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Home size={18} />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Music2 size={18} />
            <span>Music</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Gamepad2 size={18} />
            <span>Gaming</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Book size={18} />
            <span>Study</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
            <Film size={18} />
            <span>Dance</span>
          </li>
        </ul>
      </div>

      {/* You can repeat more sections here if needed */}

      <p className="text-xs text-gray-400 mt-6">© 2025 Navtech • Clone UI</p>
    </div>
  );
};

export default SideBar;
