import Navbar from "./Navbar/Navbar"
import Header from "./Navbar/Header"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Men from "./Body/Pages/Men"
import Shoes from "./Body/Pages/Shoes";
import Women from "./Body/Pages/Women";
import Products from "./Body/Products/Product";
import FeaturedProduct from "./Body/Products/FeaturedProduct";
import ProductDetails from "./Body/Products/ShoesCollection/ShoesDetails";
import MenDetails from "./Body/Products/MenCollection/MenDetails";
import WomenDetails from "./Body/Products/WomenCollection/WomenDetails";
import Footer from "./Footer/Footer";
import Cart from "./Navbar/Cart";


function AppContent() {
  const location = useLocation();
  const isProductDetail = location.pathname.includes('/product/') || 
                         location.pathname.includes('/men/') || 
                         location.pathname.includes('/women/')||
                         location.pathname.includes('/cart');

  return (
    <>
      <Navbar />   
      <Routes>
        <Route path="/" element={<><Header /><Products /><FeaturedProduct /></>} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/men/:id" element={<MenDetails />} />
        <Route path="/women/:id" element={<WomenDetails />} />
        <Route path="/cart" element={<Cart />} />    
      </Routes>
      {!isProductDetail && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter> 
      <AppContent />
    </BrowserRouter>
  )
}

export default App
