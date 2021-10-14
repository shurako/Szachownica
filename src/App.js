import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Square from "./Square";

function App() {
  const [containerSize, setContainerSize] = useState([]);

  // Reference to get container size, and make it always a square
  const container = useRef();

  // Array to map through, and render squares
  const squares = [];
  const fillArray = (counter) => {
    for (let i = 0; i < counter; i++) {
      squares.push(i);
    }
  };

  // Rendering squares
  const renderSqaures = () => {
    fillArray(25);
    return squares.map((item) => <Square />);
  };
  //
  useEffect(() => {
    fillArray();
    setContainerSize([window.innerHeight, window.innerWidth]);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setContainerSize([window.innerHeight, window.innerWidth]);
    };

    window.onresize = handleResize;
  });

  const containerStyle = () => {
    if (window.innerWidth > window.innerHeight) {
      return {
        width: containerSize[0],
        height: "100%",
      };
    } else
      return {
        height: containerSize[1],
        width: "100%",
      };
  };

  // const containerStyle = {
  //   width: containerSize[0],
  //   height: '100%'
  // }

  return (
    <div className="app">
      <div ref={container} style={containerStyle()} className="container">
        {renderSqaures()}
      </div>
    </div>
  );
}

export default App;
