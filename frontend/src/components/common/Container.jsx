import React from "react";

function Container({ children }) {
  return (
    <section className="max-w-[--desktop] mx-auto px-4 sm:px-2 md:px-10 xl:px-20">
      {children}
    </section>
  );
}

export default Container;
