import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-b from-yellow-300 to-green-500">
      <Header />
      <div className="flex overflow-hidden flex-1">
        <Sidebar className="hidden sm:block w-16 border-r-2" />
      </div>
    </div>
  );
};

export default page;
