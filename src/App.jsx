import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Start from './Components/Start';
import Page1 from './Components/Page1';
import Explore from './Components/Explore';


import './App.css'



function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Start></Start>}></Route>
        <Route path="/page1" element={<Page1></Page1>}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
      </Routes>
    </Router>
    
  );
}
export default App