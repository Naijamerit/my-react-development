import React from 'react';

const CardComponent = ({ cardTitle, cardText }) => {
  return (
    <div>
      <h1>{cardTitle}</h1>
      <p>{cardText}</p>
    </div>
  );
};

export default CardComponent;
