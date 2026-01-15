 
const Shoes = () => {
  return (
    <div className="flex justify-around items-center flex-wrap mt-10 mb-20">
      <div className="featuredProductContainer">
                <img src="src\assets\shoes.jfif" className="productImg"/>
                <h4 className="font-semibold text-lg mt-2">White Sneaker</h4>
                <p>$99.99</p>
              </div>
      <div className="featuredProductContainer">
                <img src="src\assets\erik-mclean--iJgjj33eEk-unsplash.jpg" className="productImg"/>
                <h4 className="font-semibold text-lg mt-2">Nike Sneaker</h4>
                <p>$109.99</p>
              </div>
    </div>
  )
}

export default Shoes
