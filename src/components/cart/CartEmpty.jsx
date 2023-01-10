import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import emptybag from '../../assets/emptybag.png'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
      <div className="flex justify-center flex-col h-screen px-11 text-center gap-7 items-center">
        <img src={emptybag} alt="emptybag/img" className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all hover:scale-110 duration-300" />
        <button onClick={onCartToggle} className="button-theme flex items-center gap-5 from-amber-500 to-orange-500 shadow-lg shadow-orange-500 justify-center text-white px-5 font-semibold active:scale-110 py-2 text-sm bg-gradient-to-b">
          <BsArrowLeft className="w-5 h-5 icon-style text-slate-900" /> <span className="">Back to Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
