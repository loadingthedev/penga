"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({});
    })();
  }, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
