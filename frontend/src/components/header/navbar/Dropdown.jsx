import { useState } from "react";
import { navLinks } from "../../../constants/navbar";

// framer motion
import { motion } from "framer-motion";

// icons
import arrowDark from "../../../assets/images/icon-arrow-dark.svg";
import arrowLight from "../../../assets/images/icon-arrow-light.svg";

function Dropdown({ isOpen, toggleOpen, label, sublinks, open }) {
  const handleOpen = () => {
    // setOpen((current) => !current);
    toggleOpen();
  };

  return (
    <div
      className={`w-full flex  gap-8 items-center ${open && "justify-center"}`}
    >
      <div
        className={`w-full relative ${
          open && "flex items-center justify-center flex-col"
        }`}
      >
        <button
          onClick={() => handleOpen()}
          className="inline-flex items-center gap-2 justify-between hover:underline focus:underline"
        >
          {label}
          {isOpen ? (
            <img src={arrowLight} alt="Dropdown Arrow" className="rotate-180" />
          ) : (
            <img src={arrowLight} alt="Dropdown Arrow" />
          )}
        </button>
        {isOpen && (
          <motion.div
            className={`${
              open
                ? "block w-full"
                : "w-[10rem] absolute top-0 left-0 mt-8 px-4 py-4 z-10 bg-[--white] rounded-lg shadow-xl text-[--very-dark-grayish-blue]"
            }`}
            initial={{ top: "-5%", opacity: 0 }}
            animate={{ top: "15%", opacity: 1 }}
          >
            {sublinks.map((item) => (
              <ul
                className={`flex flex-col gap-2 ${
                  open && "bg-gray-100 mx-4 p-2 justify-center text-center"
                }`}
              >
                <li className="hover:text-[--very-dark-black-blue]">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
