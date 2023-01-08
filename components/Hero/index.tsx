import React from "react";
import Image from "next/image";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <div className="mx-20">
        <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div>
          <div>
            <h2 className="text-2xl">
              Hi! I am <span className="text-red-500">Ridwan Mohamed</span> and
            </h2>
            <h1 className="text-6xl font-bold my-5">Web developer</h1>
          </div>
          <div className="leading-7 max-w-2xl">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              tempora magnam possimus ullam veniam harum quam sint temporibus
              animi vel! Quisquam ea quia mollitia ipsa ipsum recusandae in
              necessitatibus! Perferendis!
            </p>
          </div>
          <div className="bg-blue-800 my-3 w-48 py-3 text-center text-white text-xl font-bold rounded-md drop-shadow-md border border-blue-800 hover:bg-white hover:text-blue-800">
            <button>Connect with me</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:ml-20">
          <Image
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            width={500}
            height={500}
            alt="hero"
            className="h-96 max-w-md transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          />
        </div>
        </div>
        </Container>
    </div>
  );
};

export default Hero;
