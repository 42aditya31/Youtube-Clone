import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/navSlice";
// import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="w-full h-16 shadow-md flex  justify-between">
      {/* left side */}
      <div className="left flex flex-row h-16 m-2  align-middle ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 m-3 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/12314/12314149.png"
          alt="Menu Hamburg"
        />
        {/* <Link to="/"> */}
        <img 
          className="pl-2 h-12 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2eA040yZrBlL_UmreamLAN_iBh7Ldd0_og&s"
          alt="Youtube Logo"
        />
        {/* </Link> */}
      </div>

    
      <div className="Middle align-middle my-auto">
        <input
          type="text"
          className="w-[700px]  rounded-l-full rounded-r-none border p-4 text-lg border-gray-200 h-12"
          placeholder="Search here ...."
        />
        <button className="rounded-l-none rounded-r-full w-32 bg-gray-300 h-12 cursor-pointer ">
          Search
        </button>
      </div>

      {/* right Side */}
      <div className="Right ">
        <img
          className="h-8 mt-3 mr-6 py-auto"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
