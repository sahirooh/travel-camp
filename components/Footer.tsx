import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" max-container pb-10 padding-container">
      <div className="flex pb-14 justify-between gap-6 flex-wrap">
        <Image
          className="flex self-start"
          src="/hilink-logo.svg"
          alt="logo"
          width={80}
          height={80}
        />

        <div className="flex flex-wrap gap-[110px] justify-between h-full">
          {FOOTER_LINKS.map((foot) => (
            <div key={foot.title} className="flex flex-col gap-4">
              <h2 className="bold-18">{foot.title}</h2>
              <ul className="flex flex-col gap-4">
                {foot.links.map((index) => (
                  <li className="text-gray-30 regular-14">{index}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="bold-18">Contact Us</h2>
          {FOOTER_CONTACT_INFO.links.map((contact) => (
            <div className="flex gap-4">
              <label>{contact.label}:</label>
              <p className="bold-16">{contact.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="bold-18">Socials</h2>
          <div className="flex gap-4">
            {SOCIALS.links.map((index) => (
              <Image src={index} alt={index} width={26} height={26} />
            ))}
          </div>
        </div>
      </div>

      <div className="border flex bg-gray-20" />
      <p className="text-gray-30 regular-14 py-10 text-center w-full">2023 Hilink | All rights reserved</p>
    </footer>
  );
};

export default Footer;
