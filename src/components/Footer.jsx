import React from "react";
import logo from "../assets/pngs/travelUnboundLogo.png";
import linkedin from "../assets/pngs/linkedin.svg";
import gmail from "../assets/pngs/gmail.svg";
import whatsapp from "../assets/pngs/whatsapp.svg";

export default function Footer() {
  return (
    <div className="bg-slate-400 py-10 px-5 md:px-auto text-gray-800">
      <div className="w-full md:w-10/12 mx-auto">
        <div className="flex">
          <div>
            <img className="w-full" src={logo} alt="logo" />
          </div>
        </div>
        <div className="grid grid-rows md:grid-cols-12 gap-x-2 mt-5 justify-items-start md:justify-items-center md:mx-auto">
          <div className="col-span-12 md:col-span-4 py-5">
            <p className="text-md md:text-xl">
              Our guests don't travel with us for what we do, they travel bcos
              why we do
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 grid grid-cols-2 text-md md:text-xl py-5">
            <div>
              <p className="pb-2">Phone1:</p>
              <p className="pb-2">Phone2:</p>
              <p className="pb-2">Phone3:</p>
              <p className="pb-2">Website:</p>
            </div>
            <div className="text-md md:text-xl">
              <p className="pb-2">+919845090014</p>
              <p className="pb-2">+919739255255</p>
              <p className="pb-2">+919884023028</p>
              <p className="pb-2">Travelunbound.com</p>
            </div>
          </div>
          <div className="col-span-12 flex flex-col md:col-span-2 md:mx-auto py-5">
            <div className="">
              <p className="text-xl lg:text-3xl font-bold pb-2 md:pb-5">
                Follow Me
              </p>
            </div>
            <div className="flex flex-row gap-3 pt-5 md:pt-1">
              <img className="w-6 md:w-8" src={linkedin} alt="" />
              <img className="w-6 md:w-8" src={gmail} alt="" />
              <img
                className="w-6 md:w-18 -mt-1 md:mt-0"
                src={whatsapp}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <hr className="w-full h-[2px] mt-10" />
        </div>
      </div>
    </div>
  );
}
