import Image from "next/image";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="h-[4.5rem] flex gap-6 items-center justify-between">
      <div className="flex items-center gap-5">
        <BiMenuAltLeft className="text-white cursor-pointer text-4xl" />
        <Link href="/">
          <div className="relative flex w-36 h-8">
            <Image
              src="/logo.webp"
              alt="logo"
              width={250}
              height={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              quality={1}
              priority
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-6 md:gap-3 ml-auto sm:ml-0">
        <AiOutlineSearch className="text-2xl cursor-pointer shrink-0" />
        <ModeToggle />
        <Button className="bg-[#2858d9] text-white px-5 py-[6px] hover:bg-[#2858d9] hover:opacity-80 transition-all">
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
