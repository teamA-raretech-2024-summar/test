import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  h-screen w-full bg-gradient-to-b from-yellow-300 to-green-500">
      <Header />
      <div className="flex h-full">
        <div className="h-full  border-r-2  w-1/12"></div>
        <div className="flex flex-col h-full flex-1">
          <div className="h-12 border-b-2 "></div>
          <div className="flex-1 grid grid-cols-3 py-20 px-14 gap-12">
            <div className="bg-blue-500 bg-opacity-50 rounded-lg shadow-lg"></div>
            <div className="bg-blue-500 bg-opacity-50 rounded-lg shadow-lg"></div>
            <div className="bg-blue-500 bg-opacity-50 rounded-lg shadow-lg"></div>
            <div className="bg-blue-500 bg-opacity-50 rounded-lg shadow-lg"></div>
            <div className="bg-blue-500 bg-opacity-50 rounded-lg shadow-lg"></div>
            <div className="bg-blue-500 bg-opacity-50 rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
