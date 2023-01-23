import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../UI/Button/Button";
import classes from "./Navbar.module.css";
import Container from "../Container/Container";
import avatar from "../../public/images/avatar.jpg";

function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
  ];

  return (
    <nav className={classes.navbar}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <Link href="/">
              <Image
                src={avatar}
                width={60}
                height={60}
                alt="my avatar"
                className="rounded-full"
              />
            </Link>
            <div className="md:hidden">
              <Button className={classes.btn} onClick={() => setState(!state)}>
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
          <div className={`${classes.state} ${state ? "block" : "hidden"}`}>
            <ul className={classes.list}>
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className={`${classes.list_items}`} onClick={() => setState(!state)}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:inline-block">
            <Link href="#contact">
              <Button className={classes.btn_link}>Contact me</Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
