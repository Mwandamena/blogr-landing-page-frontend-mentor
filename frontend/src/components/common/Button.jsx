import React from "react";

function Button({ label, icon, styles }) {
  return (
    <button
      className={`${styles} ${
        icon ? "inline-block justify-between items-center" : null
      } border-0 outline-none py-2 px-4 md:py-3 md:px-6 rounded-[30px]`}
      onClick={() => {}}
    >
      {label}
    </button>
  );
}

export default Button;
