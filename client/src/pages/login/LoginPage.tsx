import React from "react";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div className="flex md:h-screen">
      <section className="w-full md:w-1/2 md:p-6 flex justify-center md:justify-end items-center">
        <LoginForm />
      </section>
      <section className="w-0 md:w-1/2 md:p-6 pb-0 overflow-hidden flex items-end">
        <img
          src="/images/illustrations/girl.png"
          alt="girl-purple-shirt"
          className="mt-auto ml-auto w-[28rem] object-top"
        />
      </section>
    </div>
  );
}

export default LoginPage;
