import React from 'react'
import './App.css';

import PersonCard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Jane" lastName = "Doe" age = {45} hairColor = "Black"><p>Children : 0</p></PersonCard>
      <PersonCard firstName = "Smith" lastName = "John" age = {88} hairColor = "Brown"><p>Children : 1</p></PersonCard>
      <PersonCard firstName = "Millard" lastName = "Fillmore" age = {50} hairColor = "Brown"><p>Children : 2</p></PersonCard>
      <PersonCard firstName = "Maria" lastName = "Smith" age = {62} hairColor = "Brown"><p>Children : 3</p></PersonCard>
    </div>
  );
}

export default App;
