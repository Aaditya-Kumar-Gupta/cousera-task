import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Cost: ${total}</h3>

      <button>Checkout (Coming Soon)</button>
      <br />
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;
