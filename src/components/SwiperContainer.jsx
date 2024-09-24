import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CustomBox from "./CustomBox";
import EducationCard from "./EducationCard";
import UniEdu from "../assets/scholar.gif";
import IntEdu from "../assets/classes.gif";
import useWindowSize from "./window_size";
import { Autoplay, Pagination } from "swiper/modules";

// Education data array
const educationData = [
  {
    Year: "2022 - 2026",
    Education: "B. Technology",
    Institute: "NIT Jamshedpur",
    Score: "76.1",
    Text: "PIE",
    Icon: UniEdu,
  },
  {
    Year: "2020 - 2022",
    Education: "Inter. Education",
    Institute: "DAV Bistupur",
    Score: "88",
    Text: "PCM",
    Icon: IntEdu,
  },
  {
    Year: "2018 - 2020",
    Education: "Sec. Education",
    Institute: "KSMS",
    Score: "93",
  },
];

const SwiperContainer = () => {
  const size = useWindowSize();

  return (
    <div className="container mx-auto p-4">
      {size.width < 768 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
        >
          {educationData.map((edu, index) => (
            <SwiperSlide className="flex justify-center" key={index}>
              <CustomBox height="400px" width="350px">
                <EducationCard {...edu} />
              </CustomBox>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex pb-5 gap-2 md:justify-evenly p-2">
            {educationData.map((edu, index) => (
              <div className="hover:scale-105 transition-all" key={index}>
                <CustomBox height="400px" width="350px">
                  <EducationCard {...edu} />
                </CustomBox>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperContainer;
