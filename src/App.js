
import './App.css';
import Nav from './components/Navbar'
import Cart from './components/cart'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Contact from './components/contact';
import Shop from './components/shop'
import Checkoutfinal from './components/checkoutfinal';
import { ShopContextProvider } from './context/shop-context';
function App() {
  return (
    <ShopContextProvider>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path = "/checkout" element={<Checkoutfinal/>}/>
    </Routes>
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
