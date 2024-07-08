"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Variant = "LogIn" | "SignUp";

const Form = () => {
  const [variant, setVariant] = useState<Variant>("LogIn");
  const router = useRouter();

  const handlevariant = () => {
    if (variant === "LogIn") {
      setVariant("SignUp");
    }

    if (variant === "SignUp") {
      setVariant("LogIn");
    }
  };

  const handleSignUp = () => {
    setVariant("LogIn");
  };

  const handleLogIn = () => {
    router.push("/");
  };

  return (
    <>
      <div className="bg-green-200 bg-opacity-30 rounded-lg shadow-lg  w-full mx-14 md:w-1/2 py-4 px-12 space-y-5">
        {variant === "LogIn" && (
          <>
            <h2 className="text-center text-3xl font-bold">ログイン</h2>
            <div className=" flex flex-col space-y-1">
              <h2 className="text-xl ">E-mail</h2>
              <Input className="shadow-lg" placeholder="・・・@gmail.com" />
            </div>
            <div className=" flex flex-col space-y-1">
              <h2 className="text-xl ">Password</h2>
              <Input className="shadow-lg" placeholder="6文字以上" />
            </div>
            <div className="flex items-center justify-center">
              <Button
                variant={"outline"}
                className="shadow-lg"
                onClick={handleLogIn}
              >
                ログイン
              </Button>
            </div>
            <h2
              onClick={handlevariant}
              className="text-center cursor-pointer underline text-gray-500"
            >
              新規登録へ
            </h2>
          </>
        )}

        {variant === "SignUp" && (
          <>
            <h2 className="text-center text-3xl font-bold ">新規登録</h2>
            <div className=" flex flex-col space-y-1">
              <h2 className="text-xl ">UserName</h2>
              <Input className="shadow-lg" placeholder="ゆうと" />
            </div>
            <div className=" flex flex-col space-y-1">
              <h2 className="text-xl ">E-mail</h2>
              <Input className="shadow-lg" placeholder="・・・@gmail.com" />
            </div>
            <div className=" flex flex-col space-y-1">
              <h2 className="text-xl ">Password</h2>
              <Input className="shadow-lg" placeholder="6文字以上" />
            </div>
            <div className=" flex flex-col space-y-1">
              <h2 className="text-xl ">Password</h2>
              <Input className="shadow-lg" placeholder="2回目を入力してね" />
            </div>
            <div className="flex items-center justify-center">
              <Button
                variant={"outline"}
                className="shadow-lg"
                onClick={handleSignUp}
              >
                新規登録
              </Button>
            </div>
            <h2
              onClick={handlevariant}
              className="text-center cursor-pointer underline text-gray-500"
            >
              ログインへ
            </h2>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
