import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import BountyPoster from '../Components/BountyPoster.jsx';
import Index from '../Components/Index';
import Nav from '../Components/NavBar';

function App() {
  return (
    <>
    <div className ="Home">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App