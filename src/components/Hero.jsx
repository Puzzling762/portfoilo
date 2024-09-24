import React from "react";
import HeroImg from "../assets/animation_workdesk.gif";
import avatar from "../assets/avtar.png";
import CustomBox from "./CustomBox";
import CustomButton from "./CustomButton";
import HeroTypeAnimation from "./Hero_animation";
import mailIcon from "../assets/mail_Icon.gif";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="Hero" className="flex flex-wrap w-full h-auto justify-evenly pb-5 mt-48">
      <div className="sm:w-[95%] lg:w-[45%]">
        <div className="w-full h-auto pb-2">
          <div
            className="h-auto w-full bg-[#212428] rounded-xl"
            style={{
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
            }}
          >
            <div className="w-full p-8 flex flex-col items-start">
              <img className="w-16 h-16" src={avatar} alt="Raj Lucky Avatar" />
            </div>

            <div className="sm:text-5xl lg:text-5xl text-3xl font-bold pl-8 flex gap-3">
              <span>I'm</span>
              <HeroTypeAnimation />
            </div>

            <div className="sm:text-xl lg:text-xl pt-6 pl-8 text-neutral-300">
              A full stack developer with sheer knowledge of DSA and a gist of ML.
            </div>

            <div className="flex pl-8 pt-2 items-center">
              <img className="w-16 h-16" src={mailIcon} alt="Mail Icon" />
              <span className="text-xl p-4 text-neutral-300">raj376457@gmail.com</span>
            </div>
          </div>

          <CustomBox height="140px">
            <p className="hidden lg:block sm:block text-blue-400">Download My CV:</p>
            <CustomButton
              ButtonTxt="DOWNLOAD"
              link="https://drive.google.com/drive/u/0/my-drive"
              textColor="text-yellow-500"
            />
          </CustomBox>
        </div>
      </div>

      <div
        className="relative bg-[#212428] rounded-xl flex justify-center items-center sm:w-[95%] lg:w-[45%] mt-4"
        style={{
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        }}
      >
        <img className="w-[80%] h-[80%] mt-10" src={HeroImg} alt="Animation of a work desk" />
      </div>
    </div>
  );
};

export default Hero;
