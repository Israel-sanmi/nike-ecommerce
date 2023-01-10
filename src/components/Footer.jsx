import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <div>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-center grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => {
              return (
                <div className="grid items-center" key={i}>
                  <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                    {val.title}
                  </h1>
                </div>
              );
            })}
            {links.map((list, i) => {
              return (
                <ul className="grid items-center gap-3" key={i}>
                  <li className="text-sm sm:text-xs ">
                    {list.map((link, i) => {
                      return (
                        <li className="cursor-pointer" key={i}>
                          {link.link}
                        </li>
                      );
                    })}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="mt-5 text-center ">
            <p className="text-sm md:text-center">
              Copywright <sup className="text-base font-bold ">&copy;</sup> All
              Resevered Rights 2023{" "}
              <span className="font-semibold text-black">ADETOMOKUN ISRAEL</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
