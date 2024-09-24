import React from 'react';

const CustomBox = ({ children, height = "200px", width = "100%" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="bg-[#212428] rounded-xl flex justify-evenly items-center"
        style={{
          height: height, 
          width: width,
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomBox;
