import { Book, Expand, Film, Gamepad2, Home, Music2 } from "lucide-react"; // Optional icons
import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="min-w-56 h-screen overflow-y-auto bg-white shadow-sm p-4 border-r border-gray-200 text-sm">
      {/* Section 1 */}
      <div className="mb-4">
        <li className="flex items-center font-bold gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
          <Home size={18} />
          <span><Link to="/">Home </Link></span>
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
        <h2 className="text-gray-600 mt-2 text-lg font-bold uppercase mb-2">
          Subscriptions
        </h2>
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
        <h2 className="text-gray-600 text-lg font-bold uppercase mb-2">
          Watch Later
        </h2>
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
