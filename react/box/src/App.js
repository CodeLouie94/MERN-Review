import React, { useState } from 'react'
import Form from './components/Form';
import Box from './components/Box';

function App() {
  
  const [array, setArray] = useState([])

  const addColor = (newColor) => {
    setArray([...array, newColor])
  }

  return (
    <div className="App">
      <Form addColor = {addColor}></Form>
    {
      array.map((color, i) => (
        <Box
          color = {color}
          key = {i}/>
      )) 
    }
    </div>
  );
}

export default App;
