// SubCard.jsx
import React from 'react';

function SubCard(props) {
  return (
    <div className='text-blue-700'>
      <h3>SubCard Component</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default SubCard;
