import { NavLink } from "react-router-dom"
import shoes from "../../assets/shoes.jfif"
import women from "../../assets/women.jfif"

const FeaturedProduct = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-20">
      <h2 className="font-semibold text-4xl">Featured Product</h2>
      <p className="text-gray-600 mt-2">Discover our latest featured product with amazing features and quality.</p>
      <div className="flex justify-center items-center flex-row gap-20 mt-10">
        <div className="featuredProductContainer">
          <NavLink to='/shoes'><img src={shoes} className="productImg"/></NavLink>
          <h4 className="font-semibold text-lg mt-2">White Sneaker</h4>
          <p>$99.99</p>
        </div>
        <div className="featuredProductContainer">
          <NavLink to='/women'><img src={women} className="productImg"/></NavLink>
          <h4 className="font-semibold text-lg mt-2">Women's summer Dress</h4>
          <p>$79.99</p>
        </div>
        <div className="featuredProductContainer">
          <NavLink to='/men'><img src="src\assets\805MineralWashHoodie.webp" className="productImg"/></NavLink>
          <h4 className="font-semibold text-lg mt-2">805 Mineral Wash Hoodie</h4>
          <p>$89.99</p>
        </div>
        <div className="featuredProductContainer">
          <NavLink to='/men'><img src="src\assets\haryo-setyadi-acn5ERAeSb4-unsplash.jpg" className="productImg"/></NavLink>
          <h4 className="font-semibold text-lg mt-2">Casual Shirt</h4>
          <p>$59.99</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct
