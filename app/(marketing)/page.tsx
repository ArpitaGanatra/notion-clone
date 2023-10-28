import React from "react";
import Heading from "./_components/heading";
import Heros from "./_components/heros";
import Footer from "./_components/footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 py-10">
        <Heading />
        <Heros />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;
