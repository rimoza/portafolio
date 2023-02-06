import React from "react";

const Spinner = () => {
  return (
    <div className="transform translate-x-2/3 translate-y-2/4 flex justify-center items-center -mt-10 mb-10 mx-auto">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-48 w-48"></div>
    </div>
  );
};

export default Spinner;
