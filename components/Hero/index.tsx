import React from "react";
import Image from "next/image";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <Container>
        <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 p-10 rounded-md">
        <div>
          <div>
            <h2 className="text-2xl">
              Hi! I am <span className="text-red-500">Ridwan Mohamed</span> and
            </h2>
            <h1 className="text-6xl font-bold my-5">Web developer</h1>
          </div>
          <div className="leading-7 max-w-4xl">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              tempora magnam possimus ullam veniam harum quam sint temporibus
              animi vel! Quisquam ea quia mollitia ipsa ipsum recusandae in
              necessitatibus! Perferendis!
            </p>
          </div>
          <div>
            <button>Connect with me</button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            width={500}
            height={500}
            alt="hero"
          />
        </div>
        </div>
    </Container>
  );
};

export default Hero;
