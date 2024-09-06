import React from 'react';
import PropTypes from 'prop-types';

function CustomButton({ 
  text, 
  backgroundColor = '#4f46e5', 
  textColor = '#ffffff', 
  onClick, 
  type = 'button', 
  width = 'auto' 
}) {
  return (
    <button
      type={type}
      className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        width: width,
      }}
      onClick={onClick} 
    >
      {text}
    </button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
};

export default CustomButton;
