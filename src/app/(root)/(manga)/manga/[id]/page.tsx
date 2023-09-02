import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MangaPageProps {
  params: {
    id: string;
  };
}

const MangaPage = ({ params }: MangaPageProps) => {
  return (
    <main className="mb-8 mt-4">
      <div className="pb-28">
        <section className="mb-12">
          <div className="relative text-black">
            <div className="relative md:mb-3">
              <div
                role="banner"
                style={{
                  backgroundImage: `url("https://s1.cdnimg.me:9000/hentaidexy/1670555956334-mangaCover.jpg")`,
                }}
                className="relative h-[10rem] w-full overflow-hidden rounded-lg bg-cover bg-center  after:absolute after:left-0
          after:top-0 after:h-full after:w-full after:bg-black/30 after:backdrop-blur-[3px] md:h-[17rem]
            lg:h-[19rem] 
          "
              ></div>
              <div className=" relative -mt-[8.5rem] flex  h-full w-full gap-2 px-4 sm:hidden">
                <div className="flex flex-1 flex-col justify-between pt-2">
                  <h1 className="mb-3 text-lg font-bold leading-5 text-white">
                    Ygret
                  </h1>
                  <div className="flex gap-1 pb-7 font-medium text-[#99EB32]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="h-5 w-5 "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                    </svg>
                    <div className="-mb-1 text-sm">
                      <span>0.0</span>
                      <span className="ml-1 font-medium">/ 5</span>
                    </div>
                    <div className="text-xs font-normal text-white">(0)</div>
                  </div>
                </div>
                <div className="light-shadow relative h-[9.5rem] w-[7.2rem] overflow-hidden rounded-md border border-white">
                  <Image
                    alt="Ygret"
                    fill
                    className="h-full w-full "
                    sizes="100vw"
                    src="https://hentaidexy.net/_next/image?url=https%3A%2F%2Fs1.cdnimg.me%3A9000%2Fhentaidexy%2F1670555956334-mangaCover.jpg&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-8 md:gap-4">
              <div className="flex-1 space-y-2">
                <div className="mb-6 hidden items-start justify-between gap-2 sm:flex">
                  <h3 className="text-2xl font-medium leading-7 dark:text-white">
                    Ygret
                  </h3>
                  <div className="flex shrink-0 gap-1 font-bold text-green-500 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="text-2xl sm:text-lg "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                    </svg>
                    <div className="-mt-[2px] text-base  sm:text-sm">
                      <span>0.0</span>
                      <span className="text-colorBlack ml-1 font-medium">
                        / 5
                      </span>
                    </div>
                    <div className="text-colorBlack text-xs font-normal">
                      (0)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3  text-sm dark:text-white">
                  <div className="flex gap-2 text-gray-500 dark:text-white">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                    </svg>
                    <div>15K</div>
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>
                    <span className="ml-1 text-gray-500 dark:text-white">
                      OnGoing
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Updated:</span>
                    <span className="ml-1 text-gray-500 dark:text-white">
                      2 days ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="z -mt-36 hidden flex-col items-center  gap-3 pr-6  sm:flex lg:-mt-44 lg:pr-6 xl:pr-8 2xl:pr-10">
                <div
                  className="light-shadow relative h-[20rem] w-[15rem] 
                  overflow-hidden rounded-lg"
                >
                  <Image
                    alt="Ygret"
                    fill
                    className="h-full w-full"
                    src="https://hentaidexy.net/_next/image?url=https%3A%2F%2Fs1.cdnimg.me%3A9000%2Fhentaidexy%2F1670555956334-mangaCover.jpg&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Chapters */}
        <section className="flex flex-col gap-5 md:flex-row">
          <div className="flex w-full flex-col gap-4 px-2 md:w-[21rem]">
            <div>
              <div className="mb-1 font-bold">Author(s)</div>
              <ul className="flex flex-wrap gap-2">
                <li className="rounded-md bg-gray-100 px-2 py-2 dark:bg-gray-700">
                  GongDeunTab
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-1 font-bold">Genres</div>
              <ul className="flex flex-wrap gap-2">
                <li className="">
                  <a
                    className="hover:bg-colorPrimary2 hover:text-colorWhite ut-animation block cursor-pointer  rounded-md bg-gray-100 px-2 py-2 dark:bg-gray-700"
                    href="/titles/genres?genre=Action"
                  >
                    Action
                  </a>
                </li>
                <li className="">
                  <a
                    className="hover:bg-colorPrimary2 hover:text-colorWhite ut-animation block cursor-pointer  rounded-md bg-gray-100 px-2 py-2 dark:bg-gray-700"
                    href="/titles/genres?genre= Adventure"
                  >
                    Adventure
                  </a>
                </li>
                <li className="">
                  <a
                    className="hover:bg-colorPrimary2 hover:text-colorWhite ut-animation block cursor-pointer  rounded-md bg-gray-100 px-2 py-2 dark:bg-gray-700"
                    href="/titles/genres?genre= Fantasy"
                  >
                    Fantasy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-1 font-bold">Alternate Titles</div>
              <ul className="flex flex-col flex-wrap gap-2 ">
                <li className="border-b-colorGray2/50 dark:border-colorGray2/20 border-b pb-1 font-medium">
                  Egrette
                </li>
                <li className="border-b-colorGray2/50 dark:border-colorGray2/20 border-b pb-1 font-medium">
                  이그레트
                </li>
                <li className="border-b-colorGray2/50 dark:border-colorGray2/20 border-b pb-1 font-medium">
                  Ygret
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold leading-7 text-gray-700 dark:text-white">
                Chapters
              </h2>
              <div className="flex items-center gap-2">
                <Button className="bg-gray-600 text-white">Ascending</Button>
                <Button className="bg-gray-600 text-white">Descending</Button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-md bg-gray-100 px-2 py-2 dark:bg-gray-700"
                  >
                    <div className="flex w-full items-center gap-2">
                      <div className="flex w-full items-center justify-between font-medium text-gray-700 dark:text-white">
                        <span>Chapter {i + 1}</span>
                        <span className="ml-1 text-xs font-normal text-gray-500 dark:text-white">
                          2 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MangaPage;
