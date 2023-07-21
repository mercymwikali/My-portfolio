import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="w-full h-auto bg-neutral-800 text-gray-300">
      <div className='max-w-screen-2xl mx-4 px-4'>
        <Nav/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        </div>
    </div>
  );
}

export default App;
