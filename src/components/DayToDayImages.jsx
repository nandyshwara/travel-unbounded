import React from "react";
import Marquee from "react-fast-marquee";
import { wildlifeImages } from "../resources/images";

export default function DayToDayImages() {
  return (
    <div className="mt-[10rem]">
      <Marquee speed={180} className="bg-slate-400 p-10">
        {wildlifeImages.map((currEle, index) => {
          return (
            <div key={index} className="w-11/12">
              <img
                className="h-[30rem] rounded-2xl"
                src={require(`../assets/pngs/${currEle["imageName"]}.png`)}
                alt=""
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
