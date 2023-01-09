import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-50">
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
