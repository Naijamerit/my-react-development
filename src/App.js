import React from 'react';
import CardComponent from './component/Card';
import Button from './component/Button';

function App() {
  return (
    <div>
      <div
        style={{
          border: 'solid 2px black',
          textAlign: 'center',
          width: '50%',
          borderRadius: '20px',
          padding: '20px',
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
          backgroundColor="white"
          border="solid"
          fontSize="15px"
          borderRadius="5px"
          buttonText="btn1"
        />
      </div>
    </div>
  );
}
export default App;
