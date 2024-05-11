import React, { useState } from "react";

function TwoWayBindingExample() {
  // Define state variables for input and output
  const [input, setInput] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      {/* Input field bound to state variable */}
      <h1>Enter Text:</h1>
      <input
        type="text"
        id="inputField"
        value={input}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
      />

      <p>
        Output:
        <h1 className="text-7xl">{input}</h1>
      </p>
    </div>
  );
}

export default TwoWayBindingExample;
