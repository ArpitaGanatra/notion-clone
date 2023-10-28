"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "flex items-center w-full p-6 z-50 bg-background dark:bg-[#1f1f1f] fixed",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className=" flex items-center md:justify-end w-full md:ml-auto justify-between gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
