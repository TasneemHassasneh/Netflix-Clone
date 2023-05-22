import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FavList from './components/FavList';


function App() {
  return (
    <div className="App">
     
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/favorites" element={<FavList/>} />
    </Routes>
    </div>
  );
}

export default App;
