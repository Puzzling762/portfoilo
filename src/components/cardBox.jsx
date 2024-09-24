import React from "react";

const CardBox = ({ children, height = "200px", width = "100%" }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <div
        className="bg-gradient-to-br from-cardGrey to-customGrey rounded-xl flex justify-evenly items-center"
        style={{
          height: height,
          width: width,
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
          padding: '16px', // Add padding for content spacing
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CardBox;
