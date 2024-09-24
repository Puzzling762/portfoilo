import React from "react";
import SecEdu from "../assets/SecEdu.gif";

const EducationCard = ({
  Year = "2019 - 2020",
  Education = "Secondary Education",
  Institute = "IIT Delhi",
  Score = "100",
  Text = "ICSE",
  Icon = SecEdu
}) => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      {/* Year */}
      <div className="p-7 pb-4">
        <p className="bg-green-500 text-white py-2 px-5 rounded-3xl w-[150px] text-center">
          {Year}
        </p>
      </div>

      {/* Details */}
      <div className="px-4">
        <p className="text-blue-400 text-2xl sm:text-3xl font-semibold tracking-tight">
          {Education}
        </p>
        <p className="pt-2 sm:pt-4 text-lg sm:text-2xl text-neutral-300">
          {Institute}
        </p>
        <p className="pt-2 sm:pt-4 text-lg sm:text-2xl text-neutral-300">
          Score: {Score}%
        </p>
        <p className="pt-2 sm:pt-4 text-lg sm:text-2xl text-neutral-300">
          {Text}
        </p>

        {/* Icon */}
        <div className="flex justify-center pt-4 sm:pt-6">
          <img className="w-16 sm:w-20" src={Icon} alt="Education Icon" />
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
