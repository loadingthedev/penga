import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="relative">
        <div
          className="
            relative w-full h-[11rem] xl:h-[17rem] md:h-[14rem]  rounded-xl overflow-hidden  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/30 shadow-light
            "
        >
          <Image
            src="/cover.webp"
            className="h-full w-full object-cover blur-md"
            alt="cover"
            fill
          />
        </div>
        <div className="absolute bottom-0 left-0 px-5 md:px-10 text-white top-0">
          <div className="min-w-[26ch] w-auto flex flex-col justify-center h-full">
            <h3 className="text-xl font-medium line-clamp-2 md:text-2xl lg:text-3xl mb-2">
              Trophy Wives
            </h3>
            <p className="line-clamp-3 text-sm max-w-[40rem] md:text-base mb-2 lg:mb-4">
              A mysterious massage aesthetic shop opens in the new town of
              Pyeongtaek, where people from rich conglomerates live. The shop
              owner is a handsome man with excellent looks and physicality, and
              sets fire to the hearts of married women in the city…
            </p>
            <Link
              href="#"
              className="py-1 md:py-2 px-8 text-sm text-md text-black font-bold border-[3px] border-white bg-[#F7EF2E] rounded-full hover:brightness-95 self-start"
            >
              Read Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
