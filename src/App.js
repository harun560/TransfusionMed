import './App.css';
<<<<<<< HEAD
import React  from 'react';
import Header from "./Content/Header"
import Navbar from "./Content/Navbar"
import Main from "./Content/Main"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Specimen from './Content/Specimen';
import Testing from "./Content/Testing"
import ActivePatient from './Content/ActivePatient';
import Emergency from "./Content/Emergency"



function App() {
 
  return (
  <Router>
=======
import React, { useState } from 'react';
import Header from "./Content/Header"
import Navbar from "./Content/Navbar"
import Main from "./Content/Main"
import ActivePatient from './Content/ActivePatient';


function App() {
  const [activePage, setActivePage] = useState('main');
  const handleNavbarClick = (page) => {
    setActivePage(page);
  };
  return (
  
    <div className="App">
     <Header/>
   
     <Navbar onNavbarClick={handleNavbarClick} />
     {activePage === 'main' ? <Main /> : <ActivePatient />}


   
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212

<div className="App">
     <Header/>
     <Navbar/>
     <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ActivePatient" element={<ActivePatient />} />
          <Route path="/Testing" element={<Testing />} />
          <Route path="/Specimen" element={<Specimen />} />
          <Route path="/Emergency" element={<Emergency />} />
        
        </Routes>
 
    </div>
  </Router>

   
  );
}

export default App;
