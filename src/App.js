import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [components, setComponents] = useState([]);

  const handleAddComponent = () => {
    setComponents([...components, <Counter key={components.length} />]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Counter App</h1>
      <button
        onClick={handleAddComponent}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "fit-content",
          padding: "10px 30px",
        }}
      >
        Add Counter
      </button>
      <div
        style={{
          width: "80%",
          margin: "auto",
          gap: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,auto))",
        }}
      >
       {components}
      </div>
    </div>
  );
}

export default App;
