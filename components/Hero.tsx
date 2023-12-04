import Image from "next/image";
import React from "react";

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
      </div>
    </section>
  );
};

export default Hero;
