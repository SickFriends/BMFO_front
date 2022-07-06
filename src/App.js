import './App.css';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import JoinPage from './pages/Joinpage';
import Home from './pages/Home';
import Product from './pages/Product';
import BuyPopup from './pages/BuyPopup';
function App() {
  return (
    <Routes>
      <Route exact path='/login' element={<Loginpage />} />
      <Route exact path="/join" element={<JoinPage />} />
      <Route exact path='/' element={<Home />} />
      <Route exact path="/snack" element={<Product />} />
      <Route exact path="/iceCream" element={<Product />} />
      <Route exact path="/drink" element={<Product />} />
      <Route exact path="/iceFood" element={<Product />} />
      <Route exact path='/BuyPopup' element={<BuyPopup />} />
    </Routes>
  );
}

export default App;
