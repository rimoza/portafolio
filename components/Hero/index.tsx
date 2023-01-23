import React from "react";
import Link from "next/link";

import classes from "./Hero.module.css";
import Button from "../UI/Button/Button";
import SocialIcons from "../SocialIcons/SocialIcons";

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.socialIcons_wrapper}>
        <SocialIcons className="text-5xl mb-3" />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.bottom_section}>
          <h1 className={classes.title}>
            HELLO THERE, I&apos;M
            <span className="sm:block"> RIDWAN MOHAMED </span>
          </h1>

          <p className={classes.text}>
            I&apos;m a frontend web developer with a passion for crafting
            beautiful, user-friendly digital experiences. Let&apos;s create
            something amazing together!
          </p>
          <div className={classes.btn_wrapper}>
            <Link href="#projects">
              <Button className={`${classes.btn} ${classes.btn_project}`}>
                {" "}
                PROJECTS
              </Button>
            </Link>

            <Link href="#contact">
              <Button className={`${classes.btn} ${classes.btn_contact}`}>
                CONTACT ME
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
