import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1 style={{ padding: "20px" }}>Paradise Nursery</h1>
              <Link to="/plants">
                <button style={{ margin: "20px" }}>Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
