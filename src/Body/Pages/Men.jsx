import { Link } from "react-router-dom"
import menProducts from "../Products/MenCollection/MenCols"

const Men = () => {
  return (
      <div className="flex justify-around items-center flex-wrap mt-10 mb-20">
      {menProducts.map((menProduct) =>(
        <Link 
        key={menProduct.id}
        to={`/men/${menProduct.id}`}
        className="featuredProductContainer"
        >
          <img src={menProduct.image} className="productImg" />
          <h2 className="font-semibold text-lg mt-2">{menProduct.name}</h2>
          <p>₹{menProduct.price}</p>
        </Link>

      ))}
    </div>
  )
}

export default Men
