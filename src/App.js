import "./App.css";
import React from "react";
import Product_list from "./product_list";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BuyPage from './BuyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product_list/>}></Route>
        <Route path="/BuyPage/*" element={<BuyPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
