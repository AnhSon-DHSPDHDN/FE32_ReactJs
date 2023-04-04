import React, { useCallback, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/Main";

function App() {
  const [count, setCount] = useState(0);
  const data1 = "0404";

  const data2 = useMemo(() => {
    return ["0404", "0505"];
  }, []);

  const handleDemoCallback = useCallback(() => {}, []);

  return (
    <div>
      <h1>AppComponent</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <span>{count}</span>
      <Header
        handleDemoCallback={handleDemoCallback}
        data1={data1}
        data2={data2}
      />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
