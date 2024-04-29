import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<LayoutProps> = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("session");

    if (session) {
      setIsAuth(true);
      if (
        window.location.href === "http://localhost:3000/login" ||
        window.location.href === "http://localhost:3000/register"
      ) {
        window.location.href = "http://localhost:3000/";
      }
    }

    console.log(window.location.href);
    if (!session && window.location.href === "http://localhost:3000/") {
      window.location.href = "http://localhost:3000/login";
    }
  }, []);
  return (
    <div className="flex w-full min-h-screen flex-col bg-white">
      <Header isAuth={isAuth} />
      <main className="flex-grow p-0">{props.children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
