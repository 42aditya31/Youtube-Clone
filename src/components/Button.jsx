import React from "react";

const Button = ({ label }) => {
  return (
    <button className="px-4 cursor-pointer py-1 m-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition">
      {label}
    </button>
  );
};

export default Button;
