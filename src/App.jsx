import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants</p>
      <button onClick={() => navigate("/plants")}>
        Get Started
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
