import React, { useState } from "react";
import FirstIndex from "components/first/FirstIndex";
import SecondIndex from "components/second/SecondIndex";

function App() {
  const [sketchbook, setSketchbook] = useState(0);

  const switchSketchbook = (s: number) => {
    switch (s) {
      case 1:
        return <FirstIndex />;
      case 2:
        return <SecondIndex />;
      default:
        return <div>버튼을 눌러</div>;
    }
  };

  return (
    <>
      <div className="button-area">
        <button onClick={() => setSketchbook(1)}>first</button>
        <button onClick={() => setSketchbook(2)}>second</button>
        <button>third</button>
        <button>fourth</button>
      </div>

      <div className="sketch-book">{switchSketchbook(sketchbook)}</div>
    </>
  );
}

export default App;
