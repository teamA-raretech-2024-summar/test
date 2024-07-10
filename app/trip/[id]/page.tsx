import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TripDetail from "@/components/TripDetail";
import { Button } from "@/components/ui/button";
import {
  Edit2Icon,
  Edit3Icon,
  PencilRuler,
  PercentCircle,
  PlusCircle,
} from "lucide-react";
import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-b from-yellow-300 to-green-500">
      <Header />
      <div className="flex overflow-hidden flex-1">
        <Sidebar className="hidden sm:block w-16 border-r-2" />
        <div className="flex-1 flex flex-col border border-b-2 ">
          <div className="h-12 flex items-center justify-center border border-b-2">
            <h2 className="text-2xl font-bold">{id}</h2>
          </div>
          <div className="h-10 py-8 px-3 flex items-center justify-center space-x-6">
            {[...Array(3)].map((_, index) => (
              <>
                <Button
                  variant={"outline"}
                  className="rounded-lg shadow-custom-shadow hover:scale-105 transition hover:shadow-none"
                >
                  <span className=" ">アリアナグランデ</span>
                </Button>
              </>
            ))}
          </div>
          <TripDetail id={id} />
        </div>
      </div>
    </div>
  );
};

export default page;
