import React from 'react';
import Button from './Button';

const CardComponent = ({ cardTitle, cardText, btnText, }) => {
  return (
    <div
      style={{
        border: 'solid 2px green',
        textAlign: 'center',
        width: '50%',
        borderRadius: '20px',
        padding: '50px',
        margin: '50px',
        marginRight: '30px',
        lineHeight: '30px',
      }}
    >
      <h1>{cardTitle}</h1>
      <p>{cardText}</p>

      <Button
        width="100px"
        padding="20px"
        backgroundColor="green"
        border="solid green 3px"
        fontSize="13px"
        color="white"
        borderRadius="5px"
        buttonText={btnText}
      />
    </div>
  );
};

export default CardComponent;
