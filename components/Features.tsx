import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

interface FeatureProps {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const Features = () => {
  return (
    <section
      className="flex-col lg:flex-row flexCenter
    overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div
        className="max-container flex padding-container relative w-full 
      justify-end"
      >
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            className="feature-phone"
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="grid md:grid-cols-2 mt-10 gap-10 lg:gap-20">
            {
              FEATURES.map((feature) => (
                <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description} />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({title, icon, variant, description}: FeatureProps) => {
  return (
    <li className="flex flex-1 flex-col items-start w-full">
      <div className={`rounded-full p-4 lg:p-7 bg-${variant}`}>
        <Image
          className=""
          src={icon}
          alt='map'
          width={28}
          height={28}
        />
      </div>
      <h3 className="lg:bold-32 capitalize bold-20 mt-5">{title}</h3>
      <p className="text-gray-30 mt-5 lg:mt-[30px] bg-white/80 lg:bg-none">{description}</p>
    </li>
  )
}

export default Features;
