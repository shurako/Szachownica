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



  useEffect(() => {
    fillArray()
  },[])


  return (
    <div className="App">
      <div className="container" >
        <Square/>
      </div>
    </div>
  
  );
}

export default App;
