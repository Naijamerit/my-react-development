import React from 'react';
import CardComponent from './component/Card';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        alignSelf: 'center',
      }}
    >
      <CardComponent
        cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        cardTitle="Introduction to React"
        btnText="ReadMore"
      />

      <CardComponent
        cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        cardTitle="How to become a programmer"
        btnText="ViewMore"
      />
    </div>
  );
}
export default App;
