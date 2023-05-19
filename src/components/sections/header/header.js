import React from "react";
import { useCallback } from "react";
import Button from "../../button";
import Companies from "./companies";

export default function Header() {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
    <div
      id="section1"
      className="bg-no-repeat bg-cover bg-bottom m-h-full p-4"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/header/bg.png"
        })`,
      }}
    >
      <div
        className="flex 
                  flex-col 
                  md:flex-row 
                  justify-between
                  items-center
                  h-full
                  max-w-[1200px]
                  mx-auto
                  p-4"
      >
        <div className="md:w-1/2">
          <div className="rounded-full w-fit flex items-center bg-[#e2eaed]">
            <img
              className="p-2 bg-[#feaa25] rounded-full"
              alt="icon"
              src={process.env.PUBLIC_URL + "assets/header/icon1.png"}
            />
            <p className="px-3 md:pr-16">#1 Editiors Choice App of 2020</p>
          </div>
          <h1 className="font-bold my-6 text-5xl/[60px] ">
            Best app for your modern lifestyle
          </h1>
          <p className="text-base mb-6 text-slate-500 max-w-sm">
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </p>
          <div className="flex gap-3">
            <Button onClick={handleClick} label="Try for free" />
            <Button
              onClick={handleClick}
              secondary
              ouline
              label="Watch demo video"
            />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img
            className="w-3/5 max-[767px]:mx-auto md:ml-auto mt-4"
            alt="icon"
            src={process.env.PUBLIC_URL + "assets/header/img1.png"}
          />
        </div>
      </div>
    </div>
    <Companies/>
    </>
  );
}
