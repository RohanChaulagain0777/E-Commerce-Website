import { NavLink } from "react-router-dom"

const Navbar = () => {

  return (
    <nav className="bg-white sticky top-0 z-50 flex justify-between items-center w-[90%] px-10 py-5 rounded-2xl shadow-xl flex-row mx-auto my-5">
      <h3 className="text-xl font-semibold">DILDO</h3>
      <div className="flex flex-row gap-10">
        <NavLink to="/" className={({ isActive }) =>
    isActive ? "text-black font-bold" : "navbarBtn"
  }>Home</NavLink>
        <NavLink to="/men" className={({ isActive }) =>
    isActive ? "text-black font-bold" : "navbarBtn"
  }>Men</NavLink>
        <NavLink to="/women" className={({ isActive }) =>
    isActive ? "text-black font-bold" : "navbarBtn"
  }>Women</NavLink>
        <NavLink to="/shoes" className={({ isActive }) =>
    isActive ? "text-black font-bold" : "navbarBtn"
  }>Shoes</NavLink>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex relative items-center">
          <input type="text" placeholder="Search" className="border border-gray-400 px-3 py-1 pr-9 rounded-2xl w-40"/>
          <button className="absolute right-3 navbar2Btn" ><i className="fa-solid fa-magnifying-glass text-sm"></i></button>
        </div>
        <NavLink to="/cart" className="navbar2Btn"><i className="fa-solid fa-bag-shopping"></i></NavLink>
      </div>
    </nav>
  )
}

export default Navbar
