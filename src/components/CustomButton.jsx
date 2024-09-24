import React from 'react';

const CustomButton = ({
  ButtonTxt = "Click Me",
  width = '150px',
  fontSize = '14px',
  link = '',
  textColor = 'text-white'
}) => {
  return (
    <div>
      <button
        className={`bg-gradient-to-tl from-buttonGrey1 to-buttonGrey2 py-[16px] transition-all rounded-md font-bold hover:to-black hover:scale-105 ${textColor}`}
        style={{
          fontSize,
          width: '100%',
          maxWidth: width, // make the width responsive by limiting its max-width
          boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e"
        }}
        onClick={() => window.open(link, '_blank')}
        aria-label={ButtonTxt} // Add aria-label for better accessibility
        role="button" // Ensure it's recognized as a button
      >
        {ButtonTxt}
      </button>
    </div>
  );
};

export default CustomButton;
