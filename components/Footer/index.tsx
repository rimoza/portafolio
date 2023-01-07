import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    let date = new Date();
  return (
    <>
      <div className="flex justify-around items-center text-center  p-5 bg-gray-100">
        <h1 className=" text-gray-800 font-semibold flex justify-center items-center">
          © {date.getFullYear()} All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer ml-2">
            Ridwan Mohamed
          </span>
        </h1>
        <div className="flex justify-between items-center text-center space-x-5">
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
