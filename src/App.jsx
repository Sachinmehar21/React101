import React from "react";
import CompA from "./Components/CompA";

const context = React.createContext();

const App = () => {
  return (
    <>
      <context.Provider value="I teleported from App.jsx directly to Component C I am not in Context I am the CONTEXT!">
        <CompA />
      </context.Provider>
    </>
  );
};

export default App;
export { context };