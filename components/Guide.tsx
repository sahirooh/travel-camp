import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="max-container w-full padding-container pb-24">
        <Image src="/camp.svg" alt="camp-2" width={50} height={50} />
        <p className="text-green-50 -mt-1 mb-3 regular-18">
          WE ARE HERE FOR YOU
        </p>

        <div className="flexBetween gap-5 lg:gap-10 flex-wrap mt-10">
          <h2 className="lg:bold-64 bold-40 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="text-gray-50 max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image
          className="w-full object-cover object-center 2xl:rounded-5xl"
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
        />

        <div
          className="bg-white flex gap-3 py-8 pl-5 pr-7 shadow-md absolute 
        md:left-[5%] lg:top-20 border rounded-3xl"
        >
          <Image src="/meter.svg" alt="meter" width={26} height={26} />
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-2">
              <div className="flexBetween gap-10">
                <p className="text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">50 min</p>
              </div>
              <p className="bold-20">Aguas Calientes</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-20">Start Track</p>
              <p className="bold-20">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
