import React from 'react';
import CustomBox from './CustomBox';
import tailwind from '../assets/tailwind.svg';
import jupyter from '../assets/jupyter.svg';
import numpy from '../assets/numpy.svg';
import pandas from '../assets/pandas.svg';
import powerbi from '../assets/powerbi.svg';

const technologies = [
    {
        src: "https://techstack-generator.vercel.app/js-icon.svg",
        alt: "JavaScript Logo",
    },
    {
        src: "https://techstack-generator.vercel.app/react-icon.svg",
        alt: "React Logo",
    },
    {
        src: "https://techstack-generator.vercel.app/redux-icon.svg",
        alt: "Redux Logo",
    },
    {
        src: tailwind,
        alt: "Tailwind CSS Logo",
    },
    {
        src: "https://techstack-generator.vercel.app/cpp-icon.svg",
        alt: "C++ Logo",
    },
    {
        src: "https://techstack-generator.vercel.app/python-icon.svg",
        alt: "Python Logo",
    },
    {
        src: "https://techstack-generator.vercel.app/mysql-icon.svg",
        alt: "MySQL Logo",
    },
    {
        src: jupyter,
        alt: "Jupyter Logo",
    },
    {
        src: numpy,
        alt: "NumPy Logo",
    },
    {
        src: pandas,
        alt: "Pandas Logo",
    },
    {
        src: powerbi,
        alt: "Power BI Logo",
    },
];

const Technologies = () => {
    return (
        <div id="Technologies" className="lg:p-12 sm:p-12 p-4">
            <CustomBox height="250px">
                <div>
                    <div className="flex justify-center p-4">
                        <div>
                            <span className="text-blue-500 font-semibold sm:text-4xl lg:text-4xl text-2xl">SOFTWARE EXPERIENCE</span>
                        </div>
                    </div>
                    <div className="flex flex-nowrap justify-center items-center lg:gap-10 sm:gap-4 gap-2 p-4 overflow-x-auto">
                        {technologies.map((tech, index) => (
                            <div className="hover:scale-110 transition-transform" key={index}>
                                <img 
                                    className="sm:w-20 w-16" 
                                    src={tech.src} 
                                    alt={tech.alt} 
                                    loading="lazy" 
                                    onError={(e) => {
                                        e.target.onerror = null; 
                                        e.target.src = 'path/to/fallback-image.svg'; // Specify fallback image path
                                    }} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </CustomBox>
        </div>
    );
}

export default Technologies;
