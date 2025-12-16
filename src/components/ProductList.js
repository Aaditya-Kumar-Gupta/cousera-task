import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Fiddle Leaf Fig", price: 25, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor" },
  { id: 4, name: "Aloe Vera", price: 10, category: "Succulent" },
  { id: 5, name: "Cactus", price: 12, category: "Succulent" },
  { id: 6, name: "Echeveria", price: 14, category: "Succulent" },
  { id: 7, name: "Basil", price: 8, category: "Herbs" },
  { id: 8, name: "Mint", price: 7, category: "Herbs" },
  { id: 9, name: "Rosemary", price: 9, category: "Herbs" },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>
      {plants.map(plant => (
        <div key={plant.id}>
          <h4>{plant.name}</h4>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
