import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <hr />
      <h1 className="my-2 text-center text-4xl text-secondary font-semibold py-2 rounded-md">
        {children}
      </h1>
      <hr />
    </div>
  );
};

export default Heading;
