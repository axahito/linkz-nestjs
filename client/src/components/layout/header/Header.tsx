import React from "react";
import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryButton";

function Header() {
  const doLogin = () => {
    console.log("login");
  };
  return (
    <header className="w-full h-[6rem] bg-white flex px-8 md:px-16 items-center">
      <h1 className="text-gray-600 font-bold text-3xl">Welcome!</h1>
      <div className="ml-auto flex justify-between">
        <a href="/login">
          <PrimaryButton onClick={doLogin}>Login</PrimaryButton>
        </a>
        <a href="/register">
          <SecondaryButton onClick={doLogin}>Sign up</SecondaryButton>
        </a>
      </div>
    </header>
  );
}

export default Header;
