"use client";

import Image from "next/image";
import { PRIZES } from "../app/constants";

export default function Prizes() {
  return (
    <div className="max-w-[1113px] px-9 xl:px-0 mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-y-0 md:gap-x-4">
      {PRIZES.map(({ title, image }, idx) => (
        <div
          className="flex flex-col items-center justify-center gap-y-2 transition ease-in-out delay-150 hover:scale-105 cursor-pointer"
          key={idx}
        >
          <Image src={image} width="340" height="340" alt="" />
          <div className="gradient-text uppercase font-sm lg:self-start">
            {title}
          </div>
        </div>
      ))}
    </div>
  );
}
