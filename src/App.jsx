import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './Components/Home';
import Explore from './Components/Explore';
import Locations from './Components/Locations';
import Book from './Components/Book';
import './App.css'



function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
        <Route path='/locations' element={<Locations></Locations>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
      </Routes>
    </Router>
    
  );
}
export default App