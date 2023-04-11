import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// import components
import Header from './components/Header'
import Footer from './components/Footer'

// import pages
import Home from './pages/Home'
import CameraDetails from './pages/CameraDetails'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/camera/:id' element={<CameraDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
