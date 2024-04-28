import React from "react";
import RegisterForm from "./components/RegisterForm";

function RegisterPage() {
  return (
    <div className="flex md:h-screen items-start md:items-center">
      <section className="w-0 md:w-1/2 p-0 md:p-6 pb-0 overflow-hidden flex items-end">
        <img
          src="/images/illustrations/warehouse.png"
          alt="girl-gray-shirt"
          className="mt-auto w-[32rem] object-top"
        />
      </section>
      <section className="w-full md:w-1/2 md:p-6 flex justify-center md:justify-start items-center">
        <RegisterForm />
      </section>
    </div>
  );
}

export default RegisterPage;
