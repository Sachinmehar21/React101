// Card.jsx
import React from 'react';
import SubCard from './Subcard';

function Card(props) {
  return (
    <div className='text-red-600'>
      <h2>Card Component</h2>
      <SubCard name={props.name} age={props.age} />
    </div>
  );
}

export default Card;
