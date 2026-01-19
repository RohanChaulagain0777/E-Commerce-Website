import { NavLink } from "react-router-dom"
import headerImg from "../assets/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg"

const Header = () => {

  return (
    <div className="flex justify-center items-center flex-col relative">
        <img src={headerImg} className="w-[98%] h-screen relative mx-5 my-5 rounded-2xl"/>
        <div className="absolute left-50 bottom-50 flex justify-center items-start flex-col">
            <h1 className="font-extrabold text-[3rem] text-amber-50 leading-relaxed">STYLE MADE SIMPLE</h1>
            <h3 className="font-extrabold text-[2.5rem] text-amber-600 leading-relaxed">DESIGN FOR YOU</h3>
        </div>
        <div className="absolute right-10 bottom-10 flex flex-row gap-2">
            <NavLink to="/men" className="navbar3Btn">SHOP MEN</NavLink>
            <NavLink to="/women" className="navbar3Btn">SHOP WOMEN</NavLink>
        </div>
    </div>
  )
}

export default Header
