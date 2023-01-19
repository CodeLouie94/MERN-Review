import React, { useState } from 'react'
import Tabs from './components/Tabs';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';



function App() {

  const [array, setArray] = useState([
    <Tab1/>,
    <Tab2/>,
    <Tab3/>
  ])
  const [clickedTab, setclickedTab] = useState(0)

  const currentTab = (newTab) => {
    setclickedTab(newTab)
  }


  return (
    <div className="App">
      <Tabs currentTab = { currentTab }/>

      {
        array[clickedTab]
      }
    </div>
  );
}

export default App;
