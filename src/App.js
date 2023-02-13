import React from 'react';
import CardComponent from './component/Card';
import Button from './component/Button';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        alignSelf: 'center',
      }}
    >
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
        <CardComponent cardTitle="Heading 1" />
        <CardComponent
          cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        />
        <Button
          width="100px"
          padding="10px"
          backgroundColor="green"
          border="solid green 3px"
          fontSize="20px"
          borderRadius="5px"
          buttonText="btn1"
        />
      </div>

      <div
        style={{
          border: 'solid 2px blue',
          textAlign: 'center',
          width: '50%',
          borderRadius: '20px',
          padding: '50px',
          margin: '50px',
          marginLift: '30px',
          lineHeight: '30px',
        }}
      >
        <CardComponent cardTitle="Heading 2" />
        <CardComponent
          cardText="Perspiciatis 
          minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
          quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus"
        />
        <Button
          width="100px"
          padding="10px"
          backgroundColor="blue"
          border="solid blue 3px"
          fontSize="20px"
          borderRadius="5px"
          buttonText="btn2"
        />
      </div>
    </div>
  );
}
export default App;
