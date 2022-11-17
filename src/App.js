import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, 
  Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Bengal from './components/pages/Bengal';
import SignUp from './components/pages/SingUp';
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    
    <>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/bengal' element ={<Bengal/>}/> 
          <Route path='/menu' element ={<Menu/>}/>
          <Route path='/sign-up' element ={<SignUp/>}/>
        </Routes>
      </Router>

      <div className="App">
      <h1>Modal popup</h1>
      <h4>To trigger the popup click the picture, please! </h4>
      <ImageComponent />

    </div>
    </>
    
  );
  
}

export default App;
