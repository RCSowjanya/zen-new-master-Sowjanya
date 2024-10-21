import React from "react";
import GetinTouchForm from "./GetinTouchForm";
import ContactUsForm from "./ContactUsForm";

const ImageFormLayout = () => {
  return (
    <div className="container mx-auto">
      <h1
        className="text-5xl max-[600px]:text-2xl text-center text-[#00cc99] font-[600]  py-6"
        style={{ WebkitTextStroke: "1px #00cc99", color: "transparent" }}
      >
        Get In Touch
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        {/* Left Section: Images */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <div className="about-us-2__wrapper flex flex-col space-y-6">
            {/* Main Image */}
            <div className="flex overflow-hidden">
              <div className="w-2/3">
                <img
                  src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/about-big-img.png"
                  alt="Main"
                  className="rounded-2xl"
                />
              </div>
              <div className="w-1/3">
                <img
                  src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/about-small-img.png"
                  alt="Small"
                  className=" rounded-2xl mt-[5rem]"
                />
              </div>
            </div>

            {/* Second Row: Experience & Medium Image */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/choose-us-circle-img.png"
                  alt="circle-img"
                  className="rotate-animation"
                />
              </div>
              <div className="w-1/2">
                <img
                  src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/about-medium-img.png"
                  alt="Medium"
                  className=" mt-[-12rem] rounded-2xl"
                />
              </div>
            </div>
            {/* Decorative Shape */}
            <div>
              <img
                src="https://wp.rrdevs.net/routex/wp-content/themes/routex/assets/imgs/about/dotted-img.svg"
                alt="Decorative Shape"
                className="w-20 h-20 "
              />
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/2 w-full flex flex-col mt-8  md:mt-0 border border-[#00cc99] shadow-2xl rounded-3xl p-5">
          <div className="flex flex-col  h-full">
            <div className="section__title-wrapper mb-6">
              <h2 className="text-3xl font-bold text-center text-[#00cc99]">
                Contact Us
              </h2>
            </div>
          </div>

          {/*---form---*/}
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ImageFormLayout;
