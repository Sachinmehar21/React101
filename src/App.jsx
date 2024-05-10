// App.jsx
import React from 'react';
import Cards from './Components/Cards';

function App() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Cards name="John" age={30} />
    </div>
  );
}

export default App;
