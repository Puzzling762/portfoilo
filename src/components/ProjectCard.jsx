import React from 'react';
import todoListImg from '../assets/todoListImg.jpg';
import CustomButton from './CustomButton';

const ProjectCard = ({
  title = 'Title',
  description = 'Hello World',
  image = todoListImg,
  githubLink = '',
  websiteLink = ''
}) => {
  return (
    <div className='w-full max-w-xs'>
      <div className='p-5 bg-gray-800 rounded-lg shadow-lg'>
        <div 
          className='h-48 bg-cover bg-center rounded-lg' 
          style={{ backgroundImage: `url(${image})` }}
          alt={`Image for ${title}`}
        />
        <div className='pt-4 break-words w-full flex flex-col'>
          <span className='text-blue-400 font-semibold text-xl'>{title}</span>
          <div className='flex break-words'>
            <span className='break-words text-white'>{description}</span>
          </div>
        </div>
        <div className='flex justify-evenly pt-5'>
          <CustomButton ButtonTxt='Link' width='120px' link={websiteLink} />
          <CustomButton ButtonTxt='GitHub' width='120px' link={githubLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
