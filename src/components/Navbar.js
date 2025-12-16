import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav style={{ padding: "10px", background: "#4CAF50", color: "white" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/plants">Plants</Link> |{" "}
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
};

export default Navbar;
