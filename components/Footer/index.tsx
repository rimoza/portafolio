import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./Footer.module.css";
import Container from "../Container/Container";
import avatar from "../../public/images/avatar.jpg";
import SocialIcons from "../SocialIcons/SocialIcons";

function Footer() {
  let date = new Date();
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
      href: "#projects",
      name: "Projects",
    },
  ];

  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.logo}>
          <Image
            src={avatar}
            width={60}
            height={60}
            alt="my avatar"
            className="rounded-full"
          />
          <p className={classes.text}>
            I&apos;m a frontend web developer with a passion for crafting
            beautiful, user-friendly digital experiences. Let&apos;s create
            something amazing together!
          </p>
        </div>
        <ul className={classes.list}>
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-bg" key={idx}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className={classes.bottom}>
          <div className="mt-4 sm:mt-0">
            &copy; {date.getFullYear()} Ridwan Mohamed All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <div className={classes.social_icons_wrapper}>
              <SocialIcons className={classes.social_icons} />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
