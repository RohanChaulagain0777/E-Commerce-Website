import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/counterSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-6 min-h-screen">
      {
        cartItems.length === 0 ? (
          <div className="text-center">
            <p className="font-bold text-3xl mt-10">Your Cart is Empty</p>
            <button 
              onClick={() => navigate("/")}
              className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 border rounded bg-gray-50">
                  <div className="flex items-center gap-4 flex-1">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </div>
                  <button 
                    className="text-red-500 hover:text-red-700 font-semibold px-4 py-2 rounded border border-red-500 hover:bg-red-50" 
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center p-4 border-t-2 border-gray-300 bg-gray-100 rounded">
              <div>
                <p className="text-xl font-bold">
                  Total: ₹{cartItems.reduce((total, item) => total + parseInt(item.price), 0)}
                </p>
              </div>
              <button className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 font-semibold">
                Checkout
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart
