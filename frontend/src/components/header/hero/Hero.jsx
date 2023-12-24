import React from "react";
import Button from "../../common/Button";

function Hero() {
  return (
    <div className="mt-24 flex items-center justify-center text-center">
      <div>
        {/* hero text */}
        <div>
          <h1 className="font-[--fw-600] text-[24px] md:text-[36px] lg:text-[44px]">
            A modern publishing platform
          </h1>
          <p className="mt-4 text-md md:text-xl font-[--fw-300]">
            Grow your audience and build your online brand
          </p>
        </div>

        {/* hero call to actions */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center gap-6">
          <Button
            label={`Start for Free`}
            styles={`bg-[--white] text-[--bright-red] font-bold inline-flex justify-center items-center hover:bg-[--very-bright-red] hover:text-[--white] transition duration-200`}
          />
          <Button
            label={`Learn More`}
            styles={`ring-1 ring-[--white] text-[--white] font-bold inline-flex justify-center items-center hover:bg-white hover:text-[--bright-red] transition duration-200`}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
