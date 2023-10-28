import Image from "next/image";
import React from "react";

const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src={"/documents.png"}
            alt="Documents"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src={"/documents-dark.png"}
            alt="Documents"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={"/reading.png"}
            alt="reading image"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src={"/reading-dark.png"}
            alt="reading image"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heros;
