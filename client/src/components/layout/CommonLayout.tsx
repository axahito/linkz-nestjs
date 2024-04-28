import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="flex w-full min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow p-0">{props.children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
