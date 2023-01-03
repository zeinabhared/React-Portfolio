import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
   <Router>
        <Navbar/>
        <Routes>
          <Route 
            path='/' 
            element={<About/>} 
          />
         
           <Route 
            path='/resume' 
            element={<Resume/>} 
          />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
