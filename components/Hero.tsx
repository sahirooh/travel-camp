import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <section
      className="border-2 border-black max-container padding-container py-10
    flex flex-col gap-20 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h1 className="bold-52 lg:bold-88 xl:max-w-[540px]">Putuk Truno Camp Area</h1>
        <p className="text-gray-50 xl:max-w-[520px] mt-6">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="flex flex-wrap gap-5 my-10">
          <div className="flexCenter gap-2">
            {
              Array(5).fill(1).map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))
            }
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-2 ">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Buttons
          type="button"
          variant="btn_green"
          title='Download Now' />

          <Buttons 
          type="button"
          variant="btn_white_text"
          title='How we work?'
          icon="/play.svg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
