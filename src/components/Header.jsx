import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/navSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../constant";
// import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timmer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setshowSuggestions(searchCache[searchQuery]);
      } else {
        searchSuggestions();
      }
    }, 200);

    // Suppose when we clicked on the key i -> its change the state so, the use state will be call use Effect which have function which render after 200ms --> but if i have place another key now it will again do the same process but it will take next 200 ms  so, basically it call  API on evry chnage of state
    // - For that we have use the retuurn clearTimeout which will create only one 200 ms delay

    return () => {
      clearTimeout(timmer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full  h-16 shadow-md flex  justify-between">
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
      <div className="relative my-auto">
        <div className="flex">
          <input
            type="text"
            className="w-[700px] rounded-l-full rounded-r-none border p-4 text-lg border-gray-200 h-12"
            placeholder="Search here ...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button className="rounded-l-none rounded-r-full w-32 bg-gray-300 h-12 cursor-pointer">
            Search
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute top-12 left-0 w-[84.4%] bg-white rounded-sm shadow-md z-50">
            <ul className="text-black p-2">
              {suggestion.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-1 px-3 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
