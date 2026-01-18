import { Link } from "react-router-dom"
import womenProducts from "../Products/WomenCollection/WomenCols"

const Women = () => {
  return (
    <div className="flex justify-around items-center flex-wrap mt-10 mb-20">
      {womenProducts.map((womenProduct) =>(
        <Link
        id={womenProduct.id}
        to={`/women/${womenProduct.id}`}
        className="featuredProductContainer"
        >
          <img src={womenProduct.image}  className="productImg"/>
          <h2 className="font-semibold text-lg mt-2">{womenProduct.name}</h2>
          <p>₹{womenProduct.price}</p>
        </Link>      
      ))}
    </div>
  )
}

export default Women
