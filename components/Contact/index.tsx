import React from "react";

import Heading from "../UI/Heading";
import Container from "../Container/Container";
import SocialIcons from "../SocialIcons/SocialIcons";

const Contact = () => {
  return (
    <div className="bg-white py-20" id="contact">
      <Container>
        <Heading>Get In Tech</Heading>
        <div className="flex justify-center space-x-10 mt-10">
          <SocialIcons className="text-6xl" />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
