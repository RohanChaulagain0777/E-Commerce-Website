import { NavLink } from "react-router-dom"

const Product = () => {
  return (
    <div className="flex justify-around items-center flex-wrap mt-10 mb-20">
      <div className="productsContainer">
      <img src="src\assets\simple-leather-jacket-1000x1000.jpg" className="productImg" />
      <NavLink to="/men" className="productsBtn">MENS</NavLink>
      </div>
      <div className="productsContainer">
      <img src="src\assets\milada-vigerova-p8Drpg_duLw-unsplash.jpg" className="productImg" />
      <NavLink to="/women" className="productsBtn">WOMENS</NavLink>
      </div>
      <div className="productsContainer">
      <img src="src\assets\erik-mclean--iJgjj33eEk-unsplash.jpg" className="productImg" />
      <NavLink to="/shoes" className="productsBtn">SHOES</NavLink>
      </div>
      <div className="productsContainer">
      <img src="src\assets\haryo-setyadi-acn5ERAeSb4-unsplash.jpg" className="productImg" />
      <NavLink to="/bestsellers" className="productsBtn">BESTSELLERS</NavLink>
      </div>
    </div>
  )
}

export default Product
