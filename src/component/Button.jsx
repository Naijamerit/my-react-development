import React from 'react';

const Button = ({
  width,
  padding,
  margin,
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
        margin,
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
