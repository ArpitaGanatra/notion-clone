"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "flex items-center w-full p-6 z-50 bg-background fixed",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className=" flex items-center md:justify-end w-full md:ml-auto justify-between gap-x-2">
        Login
      </div>
    </div>
  );
};

export default Navbar;
