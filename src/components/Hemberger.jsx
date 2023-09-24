import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import navdata from "../impdata/TopMenu";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-black font-bold text-2xl z-20'>Vacations Play</h1>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-black cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full  bg-black px-4 py-7 flex-col z-10'
            : 'absolute top-0  left-[-100%] ease-in duration-500 z-10'
        }
      >
       <ul className="alignment flex flex-col gap-6 items-center">
          <li className="dd-li">
            <a href="#">{navdata[0].name.toUpperCase()}</a>
          </li>

          <li className="dd-li">
            <a href="#">{navdata[1].name.toUpperCase()}</a>
          </li>

          <li className="dropdown dd-li">
            <button className="dropbtn">{navdata[2].name.toUpperCase()}</button>
            <div className="dropdown-content font-['Poppins'] font-light">
              <a href="#">{navdata[2].child[0].name.toLocaleUpperCase()}</a>
              <a href="#">{navdata[2].child[1].name.toLocaleUpperCase()}</a>
              <a href="#">{navdata[2].child[2].name.toLocaleUpperCase()}</a>
              <a href="#">{navdata[2].child[3].name.toLocaleUpperCase()}</a>
            </div>
          </li>
          <li className="dd-li">
            <a href="#">{navdata[3].name.toUpperCase()}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;