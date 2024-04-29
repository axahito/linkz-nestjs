import React, { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const doLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    e.preventDefault();

    if (formData.email !== "" && formData.password !== "") {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log("User logged in successfully:", response);

        const config = {
          headers: {
            Authorization: `Bearer${await response.user.getIdToken()}`, // Include 'Bearer' prefix for JWT tokens
          },
        };

        const user = await axios.post(
          "http://localhost:3080/auth/login",
          formData,
          config
        );

        console.log("user response", user);
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <form onSubmit={doLogin} className="bg-white rounded-md md:shadow-2xl p-6 md:p-16 flex flex-col justify-center">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
      <span className="w-full flex justify-between gap-2 items-center text-xs text-gray-500 font-semibold mt-1 mb-4">
        <p className="whitespace-nowrap">Welcome back</p>
        <hr className="w-full" />
      </span>
      <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <input
          required
          id="email"
          className=" pl-2 w-full outline-none border-none"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
      </div>
      <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <input
          required
          className="pl-2 w-full outline-none border-none"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />
      </div>
      <PrimaryButton type="submit" onClick={() => {}} className="w-full mx-0">
        Login
      </PrimaryButton>
      <div className="flex justify-between mt-4">
        <a
          href="/register"
          className="text-gray-800 text-sm ml-2 hover:text-purple-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
        >
          Don't have an account yet?
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
