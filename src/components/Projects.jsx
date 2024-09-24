import React from 'react';
import ProjectSwiperContainer from './ProjectSwiperContainer';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element name="projects" className="lg:p-12 sm:p-12 p-2">
      <div className="text-blue-400 font-semibold sm:text-4xl lg:text-4xl text-2xl flex justify-center pb-14">
        PROJECTS
      </div>

      {/* Optional loading state */}
      {/* 
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <p className="text-neutral-300">Loading projects...</p>
        </div>
      ) : (
        <ProjectSwiperContainer />
      )} */}

      <ProjectSwiperContainer />
    </Element>
  );
};

export default Projects;
