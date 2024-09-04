import React from 'react';
import PropTypes from 'prop-types';

function CustomButton({ text, backgroundColor, textColor, width }) {
  return (
    <button
      type="button"
      className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        width: width,
      }}
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

CustomButton.defaultProps = {
  backgroundColor: '#4f46e5', // Default to indigo-600
  textColor: '#ffffff', // Default to white
  width: 'auto',
};

export default CustomButton;