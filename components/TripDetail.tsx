"use client";

import {
  Cross,
  Crosshair,
  CrossIcon,
  Edit3Icon,
  PlusCircle,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Close } from "@radix-ui/react-dialog";

interface TripDetailProps {
  id?: string;
}

type Variant = "None" | "Edit";

const TripDetail: React.FC<TripDetailProps> = ({ id }) => {
  const [variant, setVariant] = useState<Variant>("None");

  const handleEditmode = () => {
    if (variant === "Edit") {
      setVariant("None");
    }

    if (variant === "None") {
      setVariant("Edit");
    }
  };
  return (
    <div className="flex-1 bg-white bg-opacity-30 pt-10 px-8 md:px-14 lg:px-28 flex flex-col justify-center ">
      <div className="bg-white rounded-3xl flex h-4/5 w-full mb-5 shadow-custom-shadow p-6 relative">
        <div className="w-1/2 flex flex-col pr-5">
          <h2 className="font-bold text-2xl text-gray-700 bg-yellow-200 rounded-lg px-8 py-4 shadow-custom-shadow ">
            {id} の旅名
          </h2>
          <div className="flex-1 w-full grid grid-cols-3 md:grid-cols-4 gap-2 p-8 ">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-blue-600 rounded-lg aspect-square  shadow-custom-shadow "
              ></div>
            ))}
          </div>
          {variant === "Edit" && (
            <>
              <div className="absolute bottom-5 left-10 md:left-16 p-3 bg-green-500 rounded-lg shadow-custom-shadow hover:scale-105 transition md:text-xl">
                <h2 className=" text-sm md:text-xl  font-bold">写真を追加</h2>
              </div>
              <div className="absolute bottom-5 left-40 md:left-52 p-3 bg-pink-300 rounded-lg shadow-custom-shadow hover:scale-105 transition md:text-xl">
                <h2 className=" text-sm md:text-xl  font-bold">写真を削除</h2>
              </div>
            </>
          )}
        </div>
        <div className="flex-1 flex flex-col p-3 pb-2">
          <h2 className="text-gray-600 text-sm self-center mb-3">
            2024年7月10日
          </h2>
          <div className="h-2/3 w-full bg-red-300 rounded-3xl shadow-custom-shadow mb-4 "></div>
          <div className="flex-1 w-full   ">
            <h2>メモ</h2>
            <textarea
              name=""
              id=""
              className=" w-full h-full py-1 px-4  placeholder:underline outline-green-300"
              placeholder="旅のメモを書いてね"
            ></textarea>
          </div>
        </div>
        <div
          className="absolute top-3 right-5 bg-slate-200 rounded-full p-2 hover:scale-105 cursor-pointer"
          onClick={handleEditmode}
        >
          {variant === "None" && (
            <>
              <Edit3Icon className="" />
            </>
          )}

          {variant === "Edit" && (
            <>
              <X />
            </>
          )}
        </div>
      </div>
      {variant === "None" && (
        <div className="flex-1 rounded-lg relative">
          <Button
            variant={"outline"}
            className="top-5 right-5 absolute text-xl shadow-custom-shadow hover:scale-110 transition hover:shadow-none"
          >
            <PlusCircle /> 旅行を追加
          </Button>
        </div>
      )}
      {variant === "Edit" && (
        <div className="flex-1 rounded-lg flex items-center justify-center">
          <Button
            variant={"outline"}
            className="bg-yellow-200 text-xl shadow-custom-shadow hover:scale-110 transition hover:shadow-none"
          >
            旅行カードを保存
          </Button>
        </div>
      )}
    </div>
  );
};

export default TripDetail;
