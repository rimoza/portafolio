import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
