import React from "react";
import Image from "next/image";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import Container from "../Container/Container";
import avatar from "../../public/images/avatar.jpg";

function Footer() {
  let date = new Date()
  const footerNavs = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "#about",
      name: "About",
    },
    {
      href: "#contact",
      name: "Contact",
    },
    {
      href: "#projects",
      name: "Projects",
    },
  ];

  return (
    <footer className="text-gray-500 mt-10 px-4 py-5 mx-auto">
      <Container>
        <div className="max-w-lg sm:mx-auto sm:text-center flex flex-col justify-center items-center">
          <Image
            src={avatar}
            width={60}
            height={60}
            alt="my avatar"
            className="rounded-full"
          />
          <p className="leading-relaxed mt-2 text-[15px]">
            I&apos;m a frontend web developer with a passion for crafting beautiful,
            user-friendly digital experiences. Let&apos;s create something amazing
            together!
          </p>
        </div>
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800" key={idx}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; {date.getFullYear()} Ridwan Mohamed All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 bg-white drop-shadow-sm rounded-full flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://www.linkedin.com/in/ridwan-mohamed-363477161/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="text-primary" />
                </a>
              </li>

              <li className="w-10 h-10 bg-white drop-shadow-sm rounded-full flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://twitter.com/rimoza_10"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter className="text-primary" />
                </a>
              </li>

              <li className="w-10 h-10 bg-white drop-shadow-sm rounded-full flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://github.com/rimoza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="text-primary" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </Container>
    </footer>
  );
}

export default Footer;
