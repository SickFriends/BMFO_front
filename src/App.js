import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";
import Signup from "./pages/Signup";
import AddProduct from "./pages/AddProduct";
import ShoppingBasket from "./pages/ShoppingBasket";
import Login from "./pages/Login";
import Snack from "./pages/Snack";
import IceCream from "./pages/IceCream";
import Drink from "./pages/Drink";
import FrozenFood from "./pages/FrozenFood";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/purchase/:id" element={<Purchase />} /> */}
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/addProduct" element={<AddProduct />} /> */}
        {/* <Route exact path="/shoppingBasket" element={<ShoppingBasket />} /> */}
        <Route exact path="/login" element={<Login />}></Route>
        {/* <Route exact path="/snack" element={<Snack />}></Route> */}
        {/* <Route exact path="/iceCream" element={<IceCream />}></Route> */}
        {/* <Route exact path="/drink" element={<Drink />}></Route> */}
        {/* <Route exact path="/frozenFood" element={<FrozenFood />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
