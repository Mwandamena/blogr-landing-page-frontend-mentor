import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileToggler from "./MobileToggler";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((current) => !current);
    console.log(open);
  };

  return (
    <nav className="relative flex items-center justify-between gap-16 bg-transparent">
      <Logo />
      <NavLinks open={open} />
      <MobileToggler handleOpen={handleOpen} />
    </nav>
  );
}

export default Navbar;
