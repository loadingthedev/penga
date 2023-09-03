/* eslint-disable @next/next/no-img-element */

"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";

async function fetchProjects(page = 1) {
  const { data } = await axios.get("/api/images?page=" + page);
  return data;
}

const ImageSlider = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(1);

  const { status, data, error, isFetching, isPreviousData, isLoading } =
    useQuery({
      queryKey: ["images", page],
      queryFn: () => fetchProjects(page),
      keepPreviousData: true,
      staleTime: 5000,
    });

  // Prefetch the next page!
  React.useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ["projects", page + 1],
        queryFn: () => fetchProjects(page + 1),
      });
    }
  }, [data, isPreviousData, page, queryClient]);

  return (
    <div className="relative mb-8">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="relative h-[70vh] w-full">
          <Image
            src={data?.images[0].urls.regular}
            alt="page"
            className="h-full w-full object-contain"
            fill
          />
        </div>
      )}

      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-between">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-opacity-50 text-2xl font-bold text-white"
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            if (!isPreviousData && data?.hasMore) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPreviousData || !data?.hasMore}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 bg-opacity-50 text-2xl font-bold text-white"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
