import Navbar from "./Navbar/Navbar"
import Header from "./Navbar/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./Body/Pages/Men"
import Shoes from "./Body/Pages/Shoes";
import Women from "./Body/Pages/Women";
import Products from "./Body/Products/Product";
import FeaturedProduct from "./Body/Products/FeaturedProduct";
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<><Header /><Products /><FeaturedProduct /></>} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
      </BrowserRouter>
      
      </>
    
  )
}

export default App
