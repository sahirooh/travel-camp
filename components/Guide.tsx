import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="max-container w-full padding-container pb-24">

        <Image src="/camp.svg" alt="camp-2" width={50} height={50} />
        <p className="text-green-50 -mt-1 mb-3 regular-18">WE ARE HERE FOR YOU</p>
        
        <div className="flexBetween gap-5 lg:gap-10 flex-wrap mt-10">
          <h2 className="lg:bold-64 bold-40 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="text-gray-50 max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
