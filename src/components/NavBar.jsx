import React, { useState } from 'react';
import logo from './images/logo.png';
import cart from './images/cart_icon.png';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("Home");

  const handleClick = (item) => {
    setMenu(item);
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <div>
      <header className='bg-gradient-to-r from-[#a8e6cf] via-[#dcedc1] to-[#ffecb3] border-b-[1px] border-gray-600'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div className='flex justify-between items-center gap-4'>
            <Link to="/"><img className='w-12 cursor-pointer' src={logo} alt="Shopper Logo" /></Link>
            <Link to="/"><h1 className='my-6 cursor-pointer text-lg font-semibold'>SHOPPER</h1></Link>
          </div>
          <div className={`md:static absolute md:min-h-fit min-h-[70vh] left-0 ${menuOpen ? 'top-[0]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
            <ul className='flex md:flex-row flex-col md:items-center gap-8'>
              <li>
                <Link to="/" onClick={() => handleClick("Home")} className='hover:text-gray-500' href="#">Home {menu === "Home" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
              <li>
                <Link to="/men" onClick={() => handleClick("Men")} className='hover:text-gray-500' href="#">Men {menu === "Men" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
              <li>
                <Link to="/women" onClick={() => handleClick("Women")} className='hover:text-gray-500' href="#">Women {menu === "Women" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
              <li>
                <Link to="/kids" onClick={() => handleClick("Kids")} className='hover:text-gray-500' href="#">Kids {menu === "Kids" ? <hr className='border-t-2 border-gray-500 mt-2' /> : null}</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <Link to="/login"><button className='border-2 border-black rounded-3xl px-6 py-2 rounded-xl shadow-2xl hover:bg-green-500 hover:text-white  hover:scale-95'>Login</button></Link>
            <Link to="/mycart"><img className='w-8 cursor-pointer rounded-xl shadow-2xl hover:opacity-45 hover:scale-95' src={cart} alt="Shopping Cart" /></Link>
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
