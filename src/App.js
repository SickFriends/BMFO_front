import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";
import Signup from "./pages/Signup";
import AddProduct from "./pages/AddProduct";
import ShoppingBasket from "./pages/ShoppingBasket";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/purchase" element={<Purchase />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/shoppingBasket" element={<ShoppingBasket />} />
      </Routes>
    </>
  );
}

export default App;
