import { navLinks } from "../../../constants/navbar";
import Dropdown from "./Dropdown";
import Button from "../../common/Button";
import { useState } from "react";

// framer motion
import { motion } from "framer-motion";

function NavLinks({ open }) {
  // dropdown state
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: "-5%",
          visibility: "hidden",
        }}
        animate={{
          opacity: 1,
          y: "0%",
          visibility: "visible",
        }}
        transition={{
          duration: 0.3,
        }}
        className={`${
          open
            ? "absolute w-[100%] z-[999] py-8 top-[5.5rem] bg-white shadow-2xl text-[--very-dark-blue] rounded-lg"
            : "relative hidden md:flex w-full justify-between items-center transition-all"
        }`}
      >
        {/* dropdowns */}
        <div
          className={`flex items-center gap-8 ${
            open ? "flex-col" : "flex-row"
          }`}
        >
          {navLinks.map((link) => (
            <Dropdown
              key={link.id}
              {...link}
              isOpen={link.id === openDropdown}
              toggleOpen={() => {
                setOpenDropdown((prev) => (prev === link.id ? null : link.id));
              }}
              open={open}
            />
          ))}
        </div>
        <div
          className={`flex gap-2 ${
            open ? "flex-col items-center justify-center mt-4" : "flex-row"
          }`}
        >
          <Button label={`Login`} styles={`hover:underline focus:underline`} />
          <Button
            label={`Sign Up`}
            styles={`${
              open
                ? "bg-[--bright-red] text-[--white]"
                : "bg-[--white] text-[--bright-red] hover:bg-[--very-bright-red] hover:text-[--white]"
            } font-bold inline-flex justify-center items-center transition duration-200`}
          />
        </div>
      </motion.div>
      {/* overlay */}
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 h-screen w-full z-[100] bg-black/60"
        ></motion.div>
      ) : null}
    </>
  );
}

export default NavLinks;
