"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="flex h-[4.5rem] items-center justify-between gap-6 px-5">
      <div className="flex items-center gap-5">
        <BiMenuAltLeft
          className="cursor-pointer text-4xl dark:text-white"
          onClick={() => setIsSidebarOpen(true)}
        />
        <Link href="/" className="hidden md:block">
          <div className="relative flex h-8 w-36">
            <Image
              src="/logo.webp"
              alt="logo"
              width={250}
              height={100}
              className="object-contain"
              quality={1}
              priority
            />
          </div>
        </Link>
        <Link href="/" className="md:hidden">
          <div className="relative w-24">
            <Image
              src="/logo.webp"
              alt="logo"
              width={250}
              height={100}
              priority
            />
          </div>
        </Link>
      </div>

      <div className="ml-auto flex items-center gap-2 sm:ml-0 md:gap-3">
        <AiOutlineSearch className="shrink-0 cursor-pointer text-2xl" />
        <ModeToggle />
        <Button
          size="sm"
          className="rounded-md bg-[#2858d9] text-white transition-all hover:bg-[#2858d9] hover:opacity-80"
        >
          Login
        </Button>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </header>
  );
};

export default Header;
