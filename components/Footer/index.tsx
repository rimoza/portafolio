import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Container from '../Container/Container';

function Footer() {
    let date = new Date();
  return (
    <Container>
      <div className="flex justify-around items-center text-center p-5 mt-10">
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
    </Container>
  );
}

export default Footer;
