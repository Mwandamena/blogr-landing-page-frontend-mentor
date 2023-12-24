import React from "react";
import DescriptionOne from "./DescriptionOne";
import DescriptionTwo from "./DescriptionTwo";
import DescriptionThree from "./DescriptionThree";

function About() {
  return (
    <section className="w-full mt-36 bg-[--bg-grayish-blue]">
      {/* description one */}
      <DescriptionOne />

      {/* description two */}
      <DescriptionTwo />

      {/* section three */}
      <DescriptionThree />
    </section>
  );
}

export default About;
