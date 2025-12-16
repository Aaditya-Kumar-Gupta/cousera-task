import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector(state => state.cart.totalQuantity);

  return (
    <nav style={{ padding: "10px", background: "green", color: "white" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/plants">Plants</Link> |{" "}
      <Link to="/cart">Cart ({count})</Link>
    </nav>
  );
};

export default Navbar;
