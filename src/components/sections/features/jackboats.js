import React from "react";
import Button from "../../button";
import Card from "../../card";
import { useCallback } from "react";

export default function Jackboats() {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      {/*jackboats */}
      <div
        className="flex 
                  flex-col 
                  md:flex-row 
                  justify-between
                  items-center
                  h-full
                  max-w-[1200px]
                  mx-auto
                  p-4
                  mb-2 lg:mb-4"
      >
        <div className="md:w-1/2 md:border-r-2">
          <h3 className="font-bold pb-6 md:px-6 text-3xl/[40px] max-w-sm ml-auto">
            Smart jackpots that you may love this anytime 	&amp; anywhere
          </h3>
        </div>
        <div className="md:w-1/2">
          <p className="text-base mb-6 md:px-6 text-slate-500 max-w-sm">
            The rise of mobile devices transforms the way we consume
            information entirely and the world's most elevant channels such as
            Facebook.
          </p>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
                  max-w-[1200px]
                  mx-auto
                  p-4"
      >
        <Card
          icon="assets/jackpots/icon1.png"
          titleColor="#f55767"
          title="Automatic Payouts"
          body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
        />
        <Card
          icon="assets/jackpots/icon2.png"
          titleColor="#2500f9"
          title="Network Effect"
          body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
        />
        <Card
          icon="assets/jackpots/icon3.png"
          titleColor="#40975f"
          title="Bigger Rewards Method"
          body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
        />
      </div>
      <div
        className="flex 
                  flex-col 
                  md:flex-row 
                  justify-between
                  items-center
                  h-full
                  max-w-[1200px]
                  mx-auto
                  p-4
                  my-7"
      >
        <div className="md:w-1/2 ">
          <img
            className="w-4/5 mx-auto "
            alt="icon"
            src={process.env.PUBLIC_URL + "assets/img1.png"}
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="font-bold my-6 text-3xl/[40px] max-w-sm">
            Designed 	&amp; built by the latest code integration
          </h3>
          <p className="text-base mb-6 text-slate-500 max-w-sm">
            The rise of mobile devices transforms the way we consume
            information entirely and the world's most elevant channels such as
            Facebook.
          </p>
          <Button onClick={handleClick} label="Learn more" />
        </div>
      </div>
      <hr />



    </>
  );
}
