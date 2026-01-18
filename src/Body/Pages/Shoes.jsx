 import shoesProducts from "../Products/ShoesCollection/ShoesCol"
import { Link } from "react-router-dom"

const Shoes = () => {
  return (
    <div className="flex justify-around items-center flex-wrap mt-10 mb-20">
      {shoesProducts.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="featuredProductContainer"
        >
          <img src={product.image} alt={product.name} className="productImg" />
          <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
          <p>₹{product.price}</p>
        </Link>
      ))}
    </div>
  )
}

export default Shoes
