import React from "react";

import ImageSlider from "./components/image-slider";
import ChapterClient from "./chapter-client";

interface ChapterPageProps {
  params: {
    chapter_number: string;
  };
}

const ChapterPage = ({ params }: ChapterPageProps) => {
  return (
    <main className="mt-4">
      <ChapterClient />
    </main>
  );
};

export default ChapterPage;
