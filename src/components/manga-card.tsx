import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

const Mangacard = () => {
  return (
    <Card className="bg-transparent cursor-pointer flex flex-col items-center border-none">
      <CardContent className=" w-[8.3rem] p-0">
        <Link href="/" className="w-full hover:text-red-500">
          <div className="relative w-full h-48 mb-2 overflow-hidden shadow-light rounded-xl">
            <Image
              src="/manga-cover.webp"
              className="h-full w-full object-cover"
              alt="manga cover"
              fill
            />
          </div>
          <h4 className="font-medium max-w-[20ch] line-clamp-1 text-sm">
            How to Live as a Villain
          </h4>
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col p-0 text-xs w-full mt-2 gap-1">
        <div className="flex items-center gap-1">
          <div className="bg-gray-200 text-black rounded-md hover:bg-primary-blue px-1 py-2 hover:text-white">
            Chapter 98
          </div>
          <div>Jul 29, 23</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-gray-200 text-black rounded-md hover:bg-primary-blue px-1 py-2 hover:text-white">
            Chapter 98
          </div>
          <div>Jul 29, 23</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Mangacard;
