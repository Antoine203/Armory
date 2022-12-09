import React from "react";
import Discover from "./Discovery/Disovery"
import Navigation_Bar from "../Components_UI_Model/Navigation_Bar/Navigation_Bar"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Items from "./Items/Items";

// Colors for Project
// Dark Grey : #393939
// Deep Orange: #FF5A09
// Light Orange: #ec7f37
// Orange Yellow: #be4f0c

function App() {
  
 
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Discover />}/>
          <Route exact path='/firearms' element={<Items type='firearms' />}/>
          <Route exact path='/clothes' element={<Items type='clothes'/>} />
          <Route exact path='/blades' element={<Items type='blades'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
