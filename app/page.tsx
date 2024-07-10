import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { PlusCircle, PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-b from-yellow-300 to-green-500 relative">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="hidden sm:block w-16 border-r-2" />
        <div className="flex flex-col flex-1">
          <div className="h-12 border-b-2 flex items-center justify-center">
            <h2 className="text-xl">旅行一覧</h2>
          </div>
          <div className="flex-1  overflow-y-auto p-20 sm:p-12 md:p-14 lg:p-20 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-14">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-blue-500 bg-opacity-50 rounded-lg shadow-custom-shadow aspect-square relative overflow-hidden cursor-pointer hover:scale-110 transition"
                >
                  <div className="bg-green-700 bg-opacity-40 absolute w-full h-24 bottom-0 flex flex-col px-4 py-3 gap-6">
                    <h2>タイトル: 黒部宇奈月へ旅行</h2>
                    <h2>Created_At: 2024/7/10</h2>
                  </div>
                  <Link
                    className="absolute inset-0 "
                    href={`/trip/${index + 1}`}
                  ></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PlusCircle className="absolute bottom-5 right-3 md:right-5 cursor-pointer hover:scale-125 transition " />
    </div>
  );
}
