import React from 'react';

const Button = ({
  width,
  padding,
  backgroundColor,
  color,
  border,
  fontSize,
  borderRadius,
  buttonText,
}) => {
  return (
    <button
      style={{
        width,
        padding,
        backgroundColor,
        color,
        border,
        fontSize,
        borderRadius,
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
