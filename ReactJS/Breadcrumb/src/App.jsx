import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from '../components/Home';
import ProductListings from '../components/ProductListings';
import ProductDetails from '../components/ProductDetails';
import BreadCrumbs from '../components/BreadCrumbs';

function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <h1>BreadCrumbs</h1>

        <BreadCrumbs />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListings />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
