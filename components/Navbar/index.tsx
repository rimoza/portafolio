"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsList, BsXLg } from 'react-icons/bs';
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
    { title: "Blogs", path: "/blogs" },
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
                  <BsXLg className="text-2xl text-primary" />
                  ) : (
                  <BsList className="text-2xl text-primary" />
                )}
              </Button>
            </div>
          </div>
          <div className={`${classes.state} ${state ? "block" : "hidden"}`}>
            <ul className={classes.list}>
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${classes.list_items}`}
                    onClick={() => setState(!state)}
                  >
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
