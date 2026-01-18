import { useParams, useNavigate } from "react-router-dom";
import shoesProducts from "./ShoesCol";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/counterSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = shoesProducts.find((prod) => prod.id === id);
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  
  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.name} />

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2">₹{product.price}</p>
        <p className="mt-4 text-gray-600">{product.description}</p>

        <div className="mt-4">
          <p className="font-semibold">Sizes</p>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="border px-3 py-1 rounded"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
