import React, { useEffect, useState } from "react";

import { BiShoppingBag } from "react-icons/bi";
import { HiHeart, HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQty, setOpenCart } from "../app/CartSlice";

import logo from "../assets/logo.png";

const NavBar = () => {
  const [navState, setNavstate] = useState(false);
  const totalQty = useSelector(selectTotalQty);

  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavstate(true);
    } else {
      setNavstate(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt=""
              className={`${navState && "filter brightness-0"} w-16 h-auto`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <HiMagnifyingGlass
                className={`icon-style ${
                  navState && "text-black transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HiHeart
                className={`icon-style ${
                  navState && "text-black transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                onClick={onCartToggle}
                type="button"
                className="border-none active:scale-110 duration-300 transition-all relative outline-none "
              >
                <BiShoppingBag
                  className={`icon-style ${
                    navState && "text-black transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 bg-white text-slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 `}
                >
                  {totalQty}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
