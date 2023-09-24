import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import navdata from "../impdata/TopMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function TopHeader() {
  const [nav, setNav] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleIconClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <>
      <div className="bg-[#1A1A1A] text-[#626262] flex justify-between items-center mobile:text-[0.75rem] ">
        <ul className="flex  items-center gap-2 alignment pt-2 pb-2 ">
          <li>
            <LocalShippingIcon className="shipicon" />
          </li>
          <li>Free Delivery</li>
          <li className="v-line bg-[#FFFFFF]"></li>
          <li>Return Policy</li>
        </ul>
        <ul className="flex flex-row gap-3 text-sm alignment ">
          <li className="mr-6 mobile:mr-0 mobile:text-[0.85rem]">Login</li>
          <li className="mobile:hidden">Follow US</li>
          <li>
            <FacebookIcon
              style={{ fonstSize: "1.25rem" }}
              className="muiicon"
            />
          </li>
          <li>
            <LinkedInIcon style={{ fontSize: "1.25rem" }} className="muiicon" />
          </li>
          <li>
            <TwitterIcon style={{ fontSize: "1.25rem" }} className="muiicon" />
          </li>
          <li className="mobile:mr-3">
            <InstagramIcon
              style={{ fontSize: "1.25rem" }}
              className="muiicon"
            />
          </li>
        </ul>
      </div>

      <div className="Banner bg-[#161615] flex justify-between pt-5 mobile:pl-3 pr-3">
        <p className="text-[2rem] font-['Poppins'] font-light text-white alignment mobile:text-[1.75rem]">
          <a href="/">Shopkart</a>
        </p>
        <ul className="text-white font-bold font-['Poppins'] flex gap-3 alignment items-center">
          <li className="mobile:hidden">WISHLIST(0)</li>
          <li className="mobile:hidden">BAG(0)</li>

          <div>
            <div className="menu-icon" onClick={handleIconClick}>
              {isMenuOpen ? (
                <AiOutlineClose
                  onClick={handleNav}
                  size={25}
                  className="border"
                />
              ) : (
                <AiOutlineMenu
                  onClick={handleNav}
                  className="z-20 text-white cursor-pointer hidden mobile:block border"
                  size={25}
                />
              )}
            </div>
          </div>
          <div
            className={
              nav
                ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-full bg-black px-4 py-7 flex-col z-10 mt-[6.1rem] pt-[5rem]"
                : "absolute top-  top-[-100%] ease-in duration-300 z-10 "
            }
          >
            <ul className="alignment flex flex-col gap-[3rem] items-center p-3">
              <li className="dd-li">
                <a href="/">{navdata[0].name.toUpperCase()}</a>
              </li>

              <li className="dd-li">
                <a href="#">{navdata[1].name.toUpperCase()}</a>
              </li>

              <li className="dropdown dd-li">
                <button className="dropbtn">
                  {navdata[2].name.toUpperCase()}
                </button>
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
        </ul>
      </div>
      <div className="Nav-links bg-[#161615]  font-['Poppins'] font-bold mt-[-6px]  ">
        <li className="h-line alignment"></li>
        <ul className="alignment mobile:hidden ">
          <li className="dd-li">
            <a href="/">{navdata[0].name.toUpperCase()}</a>
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
    </>
  );
}

export default TopHeader;
