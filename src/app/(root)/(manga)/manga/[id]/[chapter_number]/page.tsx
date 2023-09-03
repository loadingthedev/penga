import { BookOpen } from "lucide-react";
import React from "react";
import ImageSlider from "./components/image-slider";

interface ChaterPageProps {
  params: {
    chapter_number: string;
  };
}

const ChaterPage = ({ params }: ChaterPageProps) => {
  return (
    <main className="mt-4">
      <div>
        <div className="gap-2text-gray-500 mb-4 flex items-center dark:text-gray-400">
          <BookOpen size={20} />
          <h1 className="font-dm text-2xl font-bold italic">Ygret</h1>
        </div>
        <div className="mb-8 grid grid-cols-3 gap-2">
          <div className="relative border border-gray-300 bg-gray-400/5 py-1 text-center dark:border-transparent dark:bg-gray-600">
            Ch. 87
          </div>
          <div className="relative border border-gray-300 bg-gray-400/5 py-1 text-center dark:border-transparent dark:bg-gray-600">
            Pg. 2/68
          </div>
          <button className="relative border border-gray-300 bg-gray-400/5 py-1 hover:backdrop-brightness-95 dark:border-transparent dark:bg-gray-600">
            <div> Menu</div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="absolute right-2 top-[50%] -translate-y-[50%] text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
            </svg>
          </button>
        </div>

        <ImageSlider />
      </div>
    </main>
  );
};

export default ChaterPage;
