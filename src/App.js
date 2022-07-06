import "./App.css";
import {React,useState} from "react";
import Product_list from "./Product_list";
import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
         <Product_list />
    </div>
  );
}

export default App;
