"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { fetchTheme } from "@/store/slices/theme";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { SideNavbar } from "@/components/SideNavbar";

import { Next13ProgressBar } from "next13-progressbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeState.theme);

  useEffect(() => {
    if (!theme.mainColor) return;
    document.documentElement.style.setProperty("--primary", theme.mainColor);
  }, [theme]);

  useEffect(() => {
    dispatch(fetchTheme());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Next13ProgressBar height="4px" color="#0A2FFF" showOnShallow />
      <div className="flex flex-grow bg-secondary px-2.5">
        <div className="container mx-auto py-5 xl:px-0 px-4">
          <div className="flex gap-8 h-full ">
            <SideNavbar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
