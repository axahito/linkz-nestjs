import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden ml-auto">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center text-white rounded-full p-2 focus:outline-none focus:ring-0"
      >
        <img src="/burger.png" alt="burger-icon" className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 w-48 bg-white shadow-md rounded-lg py-2 z-20 flex flex-col">
          <a
            href="/login"
            className="p-4 font-semibold text-sm hover:bg-gray-500 hover:text-white"
          >
            Login
          </a>
          <a
            href="/register"
            className="p-4 font-semibold text-sm hover:bg-gray-500 hover:text-white"
          >
            Sign up
          </a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
