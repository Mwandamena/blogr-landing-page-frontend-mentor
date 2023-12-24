// components
import pattern from "../../assets/images/bg-pattern-circles.svg";
import Container from "../common/Container";

// images
import phones from "../../assets/images/illustration-phones.svg";

function DescriptionTwo() {
  return (
    <div className="mb-8 relative mt-[15rem] w-full description-2 rounded-tr-[6rem] rounded-bl-[6rem] lg:max-h-[25rem]">
      <Container>
        <div className="relative flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* mobile section */}
          <div className="basis-[40%] mx-auto">
            <img
              src={phones}
              alt="Blogr Phones"
              className="transfrom md:scale-[1.2] -translate-y-[30%] md:-translate-y-[5%]"
            />
          </div>

          {/* text section */}
          <div className="basis-[40%] mb-24 md:mb-0 py-12 text-center md:text-start text-[--grayish-blue]">
            <h4 className="mb-4 text-[1.5rem] text-[--white] font-[--fw-700]">
              State of the Art Infrastructure
            </h4>
            <p className="text-sm sm:text-md">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DescriptionTwo;
