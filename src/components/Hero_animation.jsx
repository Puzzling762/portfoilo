import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero_animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Raj Lucky',
        1000,
        'An Engineer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }} // Adjusted font size for emphasis
      className='text-blue-400'
      repeat={Infinity}
      aria-live="polite" // Announce updates to screen readers
      role="status" // Indicate that this element updates dynamically
    />
  );
};

export default Hero_animation;
