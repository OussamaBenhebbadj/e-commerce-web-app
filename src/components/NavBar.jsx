import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import cart from './images/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Vérifier si un token existe au montage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true si token existe
  }, []);

  const handleClick = (item) => {
    setMenu(item);
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <header className='bg-gradient-to-r from-[#a8e6cf] via-[#dcedc1] to-[#ffecb3] border-b-[1px] border-gray-600'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          {/* Logo */}
          <div className='flex justify-between items-center gap-4'>
            <Link to="/"><img className='w-12 cursor-pointer' src={logo} alt="Shopper Logo" /></Link>
            <Link to="/"><h1 className='my-6 cursor-pointer text-lg font-semibold'>SHOPPER</h1></Link>
          </div>

          {/* Menu */}
          <div className={`md:static absolute md:min-h-fit min-h-[70vh] left-0 ${menuOpen ? 'top-[0]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
            <ul className='flex md:flex-row flex-col md:items-center gap-8'>
              <li>
                <Link to="/" onClick={() => handleClick("Home")} className='hover:text-gray-500'>Home {menu === "Home" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
              <li>
                <Link to="/men" onClick={() => handleClick("Men")} className='hover:text-gray-500'>Men {menu === "Men" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
              <li>
                <Link to="/women" onClick={() => handleClick("Women")} className='hover:text-gray-500'>Women {menu === "Women" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
              <li>
                <Link to="/kids" onClick={() => handleClick("Kids")} className='hover:text-gray-500'>Kids {menu === "Kids" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
            </ul>
          </div>

          {/* Boutons à droite */}
          <div className='flex justify-between items-center gap-4'>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className='border-2 border-black rounded-3xl px-6 py-2 shadow-2xl bg-red-500 text-white hover:scale-95'
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className='border-2 border-black rounded-3xl px-6 py-2 shadow-2xl hover:bg-green-500 hover:text-white hover:scale-95'>
                  Login
                </button>
              </Link>
            )}

            <Link to="/mycart">
              <img className='w-8 cursor-pointer rounded-xl shadow-2xl hover:opacity-45 hover:scale-95' src={cart} alt="Shopping Cart" />
            </Link>

            <ion-icon
              name={menuOpen ? "close" : "menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              class="text-3xl cursor-pointer md:hidden"
            ></ion-icon>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
