import React from "react";
import Container from "../common/Container";

// images
import editor from "../../assets/images/illustration-editor-desktop.svg";
import mobileEditor from "../../assets/images/illustration-editor-mobile.svg";

function DescriptionOne() {
  return (
    <Container>
      <div className="flex flex-col items-center">
        {/* heading */}
        <div className="text-center">
          <h3 className="text-[2rem] text-[--very-dark-blue] font-[--fw-700]">
            Designed for the future
          </h3>
        </div>

        {/* description */}
        <div className="mt-8 flex gap-12 md:gap-12 flex-col-reverse md:flex-row items-center justify-between text-[--very-dark-grayish-blue]">
          {/* text description side */}
          <div className="w-full text-center md:text-start">
            <div className="">
              <h4 className="mb-4 text-[1.5rem] text-[--very-dark-blue] font-[--fw-700]">
                Introducing an extensible editor
              </h4>
              <p className="text-sm sm:text-md">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="mt-10">
              <h4 className="mb-4 text-[1.5rem] text-[--very-dark-blue] font-[--fw-700]">
                Robust content management
              </h4>
              <p className="text-sm sm:text-md">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>

          {/* image section */}
          <div className="w-full relative overflow-x-hidden transform md:scale-[1.5]">
            <picture>
              <source media="(min-width: 768px)" srcSet={editor} />
              <img
                src={mobileEditor}
                alt="Blogr Editor"
                className="w-full md:w-[100rem] md:translate-x-[20%]"
              />
            </picture>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DescriptionOne;
