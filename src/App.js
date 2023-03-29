import React, { useState } from "react";
import "antd/dist/reset.css";
import ComponentLifeCycle from "./components/ComponentLifecycle";
import FcLifecycle from "./components/FcLifecycle";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? "Hide" : "Show"}
        </button>
      </div>
      {isToggle && <FcLifecycle />}
    </div>
  ); //jsx
}

export default App;
