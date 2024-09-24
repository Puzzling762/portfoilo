import React from 'react';
import CustomBox from './CustomBox';
import SwiperContainer from './SwiperContainer';

const Education = () => {
  return (
    <div id="Education" className="lg:p-12 sm:p-12 p-4">
      <CustomBox height="650px">
        <div className="text-center w-full">
          <div className="pb-16">
            <div className="text-blue-400 font-semibold text-2xl sm:text-3xl lg:text-4xl">
              EDUCATION <br />
            </div>
          </div>
          <div>
            <SwiperContainer />
          </div>
        </div>
      </CustomBox>
    </div>
  );
};

export default Education;
