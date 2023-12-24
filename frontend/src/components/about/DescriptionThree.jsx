import React from "react";
import Container from "../common/Container";

// images
import laptop from "../../assets/images/illustration-laptop-desktop.svg";
import MobileLaptop from "../../assets/images/illustration-laptop-mobile.svg";

function DescriptionThree() {
  return (
    <Container>
      <div className="mb-8 relative flex flex-col md:flex-row items-center justify-between mt-[10rem] md:mt-[20rem] w-full rounded-tr-[6rem] rounded-bl-[6rem]">
        {/* image section */}
        <div className="w-fulll md:scale-[1.7999]">
          <picture>
            <source media="(min-width: 768px )" srcSet={MobileLaptop} />
            <img
              src={laptop}
              alt="Blogr Laptop"
              className="w-full md:w-[100rem] md:-translate-x-[20%]"
            />
          </picture>
        </div>

        {/* text section */}
        <div className="w-full text-[--very-dark-grayish-blue] text-center md:text-start mt-8">
          <div>
            <h4 className="mb-4 text-[1.5rem] text-[--very-dark-blue] font-[--fw-700]">
              Free, open, simple
            </h4>
            <p className="text-sm sm:text-md">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="mt-20">
            <h4 className="mb-4 text-[1.5rem] text-[--very-dark-blue] font-[--fw-700]">
              Powerful tooling
            </h4>
            <p className="text-sm sm:text-md">
              We built a simple and straightforward CLI tool that makes
              customization and deployment a breeze, but capable of producing
              even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DescriptionThree;
