import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import Square from './Square';

function App() {

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


  useEffect(() => {
    fillArray()
  },[])


  return (
    <div className="App">
      <div className="container" >
        {renderSqaures()}
      </div>
    </div>
  
  );
}

export default App;
