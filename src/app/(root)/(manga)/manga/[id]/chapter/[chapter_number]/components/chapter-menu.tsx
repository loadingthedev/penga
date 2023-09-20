"use client";

import Image from "next/image";
import { ChevronDown, StepBack, StepForward } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChapterMenuProps {
  isChapterMenuOpen: boolean;
  setIsChapterMenuOpen: (isChapterMenuOpen: boolean) => void;
}

export default function ChapterMenu({
  isChapterMenuOpen,
  setIsChapterMenuOpen,
}: ChapterMenuProps) {
  return (
    <Sheet open={isChapterMenuOpen} onOpenChange={setIsChapterMenuOpen}>
      <SheetContent className="w-[300px] sm:w-[400px]" side="right">
        <div className="pt-6">
          <div className="mb-4 flex items-start gap-2 border-b border-gray-300 pb-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="block shrink-0 text-lg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path>
            </svg>
            <div className="text-base leading-5 sm:leading-5">
              Not in School!
            </div>
          </div>

          <Card className="w-full border-none bg-transparent shadow-none">
            <CardContent className="px-0 py-2">
              <div className="mb-4 flex gap-2">
                <div className="relative h-32 w-24 overflow-hidden rounded-md">
                  <Image
                    src="https://hentaidexy.net/_next/image?url=https%3A%2F%2Fs1.cdnimg.me%3A9000%2Fhentaidexy%2Fe05d044e-2a8a-473d-a76b-4436580ed98b-1689322452639-mangaCover.jpg&w=3840&q=75"
                    alt="Cover"
                    className="object-fill"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <div className="mb-2 text-xl">Ch.25</div>
                </div>
              </div>
              <div className="mb-16">
                <div className="mb-2 flex gap-2">
                  <button className="dark:bg-colorBoxDark rounded-md border border-gray-400 bg-white px-2 py-4 hover:brightness-95 dark:border-transparent">
                    <StepBack className="text-lg text-black dark:text-white" />
                  </button>
                  <div className="flex-1">
                    <div className="relative h-full">
                      <div className="dark:bg-colorBoxDark flex h-full cursor-pointer items-center justify-between rounded-md border px-4 py-1 dark:border-transparent">
                        <div className="w-full">
                          <div className="text-xs font-medium">page</div>
                          <div className="w-full">
                            <Select>
                              <SelectTrigger className="border-none bg-transparent px-0 focus:ring-0">
                                <SelectValue
                                  placeholder="Page 1"
                                  className="text-sm"
                                />
                              </SelectTrigger>
                              <SelectContent className="dark:bg-gray-500">
                                <SelectItem value="m@example.com">
                                  Page 1
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  Page 2
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  Page 3
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="dark:bg-colorBoxDark  rounded-md border border-gray-400 bg-white px-2 py-4 hover:brightness-95 dark:border-transparent">
                    <StepForward className="text-lg text-black dark:text-white" />
                  </button>
                </div>
                <div className="mb-2 flex gap-2">
                  <button className="dark:bg-colorBoxDark rounded-md border border-gray-400 bg-white px-2 py-4 hover:brightness-95 dark:border-transparent">
                    <StepBack className="text-lg text-black dark:text-white" />
                  </button>
                  <div className="flex-1">
                    <div className="relative h-full">
                      <div className="dark:bg-colorBoxDark flex h-full cursor-pointer items-center justify-between rounded-md border px-4 py-1 dark:border-transparent">
                        <div className="w-full">
                          <div className="text-xs font-medium">Chapters</div>
                          <div className="w-full">
                            <Select>
                              <SelectTrigger className="border-none bg-transparent px-0 focus:ring-0">
                                <SelectValue
                                  placeholder="Chapter 1"
                                  className="text-sm"
                                />
                              </SelectTrigger>
                              <SelectContent className="dark:bg-gray-500">
                                <SelectItem value="m@example.com">
                                  Chapter 1
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  Chapter 2
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  Chapter 3
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="dark:bg-colorBoxDark  rounded-md border border-gray-400 bg-white px-2 py-4 hover:brightness-95 dark:border-transparent">
                    <StepForward className="text-lg text-black dark:text-white" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
