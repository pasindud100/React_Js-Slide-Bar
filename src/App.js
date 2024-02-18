import React from 'react';
import './App.css';
import Slidebar from './components/Slidebar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Comment from './pages/Comment.jsx';
import Analytics from './pages/Analytics.jsx';
import Contact from './pages/Contact.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';

function App() {
  return ( 
   <BrowserRouter>
      <Slidebar>
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />}  />  
          <Route path="/comment"  element={<Comment />} />
          <Route path="/analytics"  element={<Analytics />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/product"  element={<Product />} />
          <Route path="/productList"  element={<ProductList/>} />
         
      </Routes>
      </Slidebar>
   </BrowserRouter>
  );
}

export default App;
