"use client";
import React from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";

import CardHeader from "@/components/ui/cards-header";
import Mangacard from "@/components/manga-card";

const LatestUpdates = () => {
  return (
    <section className="pb-4 border-b border-gray-200 dark:border-gray-700">
      <CardHeader title="Latest Updates" link="/" />

      {/* Scroll Cards */}
      <ScrollContainer
        className="flex gap-4 overflow-x-scroll scrollbar-hide"
        component="div"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Mangacard key={index} />
        ))}
      </ScrollContainer>
    </section>
  );
};

export default LatestUpdates;
