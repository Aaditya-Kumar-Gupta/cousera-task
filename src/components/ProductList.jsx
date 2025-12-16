import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 15, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Peace Lily", price: 18, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Spider Plant", price: 12, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Rubber Plant", price: 22, img: "https://via.placeholder.com/100" },
    { id: 5, name: "ZZ Plant", price: 20, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Fiddle Leaf Fig", price: 30, img: "https://via.placeholder.com/100" }
  ],
  Succulents: [
    { id: 7, name: "Aloe Vera", price: 10, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Cactus", price: 8, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Jade Plant", price: 14, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Echeveria", price: 11, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Haworthia", price: 9, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Zebra Plant", price: 13, img: "https://via.placeholder.com/100" }
  ],
  Herbs: [
    { id: 13, name: "Basil", price: 7, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Mint", price: 6, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Rosemary", price: 8, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Thyme", price: 6, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Parsley", price: 5, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Cilantro", price: 5, img: "https://via.placeholder.com/100" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          {items.map(plant => (
            <div key={plant.id}>
              <img src={plant.img} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>
              <button onClick={() => dispatch(addToCart(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
