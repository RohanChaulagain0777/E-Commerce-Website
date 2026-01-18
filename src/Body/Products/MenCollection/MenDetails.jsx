import { useParams, useNavigate } from "react-router-dom"
import menProducts from "./MenCols"
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/counterSlice";

const MenDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const menproduct = menProducts.find((prev) => prev.id === id);
    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
      dispatch(addToCart(menproduct));
      navigate("/cart");
    };

  return (
    <div>
      <div className="p-6 grid md:grid-cols-2 gap-8">
      <img src={menproduct.image} alt={menproduct.name} />
      <div>
        <h1 className="text-2xl font-bold">{menproduct.name}</h1>
        <p className="text-xl mt-2">₹{menproduct.price}</p>
        <p className="mt-4 text-gray-600">{menproduct.description}</p>

        <div className="mt-4">
          <p className="font-semibold">Sizes</p>
          <div className="flex gap-2 mt-2">
            {menproduct.sizes.map((size) => (
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
    </div>
  )
}

export default MenDetails
