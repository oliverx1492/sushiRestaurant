import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Speisekarte from './components/Speisekarte'
import About from './components/About'
import Bestellen from './components/Bestellen'
import Checkout from './components/Checkout'


function App() {
 

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speisekarte" element={<Speisekarte />} />
          <Route path="/about"  element={<About />} />
          <Route path="/bestellen" element={<Bestellen />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
