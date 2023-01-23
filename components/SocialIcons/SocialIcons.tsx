import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

import classes from "./SocialIcons.module.css";

const SocialIcons = ({ className = "" }) => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/ridwan-mohamed-363477161/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className={`${classes.icons} ${className}`} />
      </a>
      <a href="https://twitter.com/rimoza_10" target="_blank" rel="noreferrer">
        <BsTwitter className={`${classes.icons} ${className}`} />
      </a>
      <a href="https://github.com/rimoza" target="_blank" rel="noreferrer">
        <BsGithub className={`${classes.icons} ${className}`} />
      </a>
    </>
  );
};

export default SocialIcons;
