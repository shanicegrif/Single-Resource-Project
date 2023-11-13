import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "../Components/NavBar";
import Index from "../Components/Index";
import New from "../Components/New";
import Show from "../Components/Show";
import Update from "../Components/Update";
// Example file: src/App.js
import.meta.env.VITE_KEY;
console.log(`${import.meta.env.VITE_BASE_URL}`);

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/characters" element={<Index />} />
            <Route path="/characters/new" element={<New />} />
            <Route path="/characters/:id" element={<Show />} />
            <Route path="/characters/:id/edit" element={<Update />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
