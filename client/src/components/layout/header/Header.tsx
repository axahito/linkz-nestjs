import React from "react";
import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryButton";
import Dropdown from "./Dropdown";
import axios from "axios";

function Header({ isAuth }: { isAuth: boolean }) {
  const doLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3080/auth/logout");
      console.log(response);
    } catch (error) {
      console.log(error);
      localStorage.clear();
      window.location.href = "http://localhost:3000/login";
    }
  };
  return (
    <header className="w-full h-[6rem] bg-white flex px-4 md:px-16 items-center">
      <h1 className="text-gray-600 font-bold text-2xl md:text-3xl">Welcome!</h1>
      {!isAuth ? (
        <div className=" ml-auto hidden sm:flex justify-between">
          <a href="/login">
            <PrimaryButton onClick={() => {}}>Login</PrimaryButton>
          </a>
          <a href="/register">
            <SecondaryButton onClick={() => {}}>Sign up</SecondaryButton>
          </a>
        </div>
      ) : (
        <div className="ml-auto">
          <SecondaryButton onClick={doLogout}>Logout</SecondaryButton>
        </div>
      )}

      <Dropdown />
    </header>
  );
}

export default Header;
