import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  bgImage?: string;
  title?: string;
  subtitle?: string;
  peopleJoined?: string;
}

const CampSite = ({ bgImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full min-w-[1100px] ${bgImage} bg-cover 
  bg-no-repeat lg:rounded-r-3xl 2xl:rounded-5xl`}
    >
      <div className="flex py-10 px-16 h-full flex-col justify-between">
        <div className="text-white gap-4 flexStart">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div>
            <p className="bold-20">{title}</p>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt="people"
                width={40}
                height={40}
                className="rounded-full inline-block h-10 w-10"
              />
            ))}
          </span>
          <p className="text-white bold-16 md:bold-20">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section
      className=" 2xl:max-container flex flex-col
    py-10 relative lg:mb-10 lg:py-10 xl:mb-20"
    >
      <div
        className="hide-scrollbar h-[340px] w-full flexStart gap-8 overflow-x-auto
      lg:h-[400px] xl:h-[640px] "
      >
        <CampSite
          bgImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          bgImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
    </section>
  );
};

export default Camp;
