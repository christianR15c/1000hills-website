import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// import components
import Header from './components/Header'
import Footer from './components/Footer'

// import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
