import React from "react";
import Head from "next/head";

import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={`bg-ternary dark:bg-bg dark:text-[#fff] ${className}`}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
