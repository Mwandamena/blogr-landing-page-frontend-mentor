// image
import open from "../../../assets/images/icon-hamburger.svg";
import close from "../../../assets/images/icon-close.svg";
import { useState } from "react";

function MobileToggler({ handleOpen }) {
  const [show, setShow] = useState(false);

  // function to handle the mobile nav
  const handleShow = () => {
    setShow((current) => !current);
    handleOpen();
  };

  return (
    <div className="flex items-center justify-center md:hidden z-[999]">
      <span className="sr-only">Menu</span>
      <button onClick={() => handleShow()}>
        <img src={show ? close : open} alt="Menu" className="w-6" />
      </button>
    </div>
  );
}

export default MobileToggler;
