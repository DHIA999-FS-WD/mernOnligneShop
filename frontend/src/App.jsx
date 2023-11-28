import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Cart from "./pages/Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./pages/ProductsPage";

// context
import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  countProduct: 0,
  setCountProduct: () => {},
});
export const UserContext = createContext({
  user: {},
  setUser: () => {},
});

function App() {
  const [cart, setCart] = useState([]);
  const [countProduct, setCountProduct] = useState(0);
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider
          value={{ cart, setCart, countProduct, setCountProduct }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
