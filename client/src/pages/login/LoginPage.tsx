import React from "react";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div className="flex h-screen">
      <section className="w-1/2 p-6 flex justify-center items-center">
        <LoginForm />
      </section>
      <section className="w-1/2 p-6 pb-0 overflow-hidden flex justify-start items-end relative">
        <img
          src="/images/illustrations/girl.png"
          alt="girl-purple-shirt"
          className="mt-auto object-scale-down object-top"
        />
      </section>
    </div>
  );
}

export default LoginPage;
