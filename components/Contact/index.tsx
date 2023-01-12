import React from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

import Heading from "../UI/Heading";
import Container from "../Container/Container";

const Contact = () => {
  return (
    <div className="bg-white py-10" id='#contact'>
      <Container>
        <Heading>Get In Tech</Heading>
        <div className="flex justify-center items-center space-x-10 mt-10">
          <a href="https://www.linkedin.com/in/ridwan-mohamed-363477161/" target="_blank" rel="noreferrer">
            <BsLinkedin className="text-6xl text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </a>
          <a href="https://twitter.com/rimoza_10" target="_blank" rel="noreferrer">
            <BsTwitter className="text-6xl text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </a>
          <a href="https://github.com/rimoza" target="_blank" rel="noreferrer">
            <BsGithub className="text-6xl text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
