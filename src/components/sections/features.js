import React from "react";
import Button from "../button";
import Card from "../card";
import { useCallback } from "react";

export default function Features() {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <div id="section2" className="p-4">
        {/* features */}
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
                  mb-4"
        >
          <div className="md:w-1/2 ">
            <img
              className="w-4/5 mx-auto "
              alt="icon"
              src={process.env.PUBLIC_URL + "assets/features/img1.png"}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-bold my-6 text-3xl/[40px] ">
              Awesome apps
              <br />
              features
            </h3>
            <p className="text-base mb-6 text-slate-500 max-w-sm">
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
            <Card
              icon="assets/features/icon1.png"
              row
              titleColor="#f55767"
              title="Fast Performance"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/features/icon2.png"
              row
              titleColor="#2563ff"
              title="Prototyping"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/features/icon3.png"
              row
              titleColor="#40975f"
              title="Vector Editing"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
          </div>
        </div>
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
                  p-4"
        >
          <div className="md:w-1/2 md:border-r-2">
            <h3 className="font-bold  md:px-6 text-3xl/[40px] max-w-sm ml-auto">
              Smart jackpots that you may love this anytime & anywhere
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
              Designed & built by the latest code integration
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
        {/* choose us */}
        <div className="py-10 lg:py-20 lg:pb-10 md:text-center  flex flex-col items-center">
          <h3 className="font-bold my-6 text-3xl/[40px] max-w-sm ">
            Why you should choose our app
          </h3>
          <p className="text-base mb-6 text-slate-500 max-w-xl">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
                  max-w-[1200px]
                  mx-auto
                  p-4"
          >
            <Card
              icon="assets/choose-us/icon1.png"
              center
              titleColor="#242f51"
              title="App Development"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/choose-us/icon2.png"
              center
              titleColor="#242f51"
              title="10 Times Award"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/choose-us/icon3.png"
              center
              titleColor="#242f51"
              title="Cloud Storage"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/choose-us/icon4.png"
              center
              titleColor="#242f51"
              title="Customization"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/choose-us/icon5.png"
              center
              titleColor="#242f51"
              title="UX Planning"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/choose-us/icon6.png"
              center
              titleColor="#242f51"
              title="Customer Support"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
          </div>
        </div>
          {/* ultimite features */}
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
                  mb-4"
        >
      
          <div className="md:w-1/2">
            <h3 className="font-bold my-6 text-3xl/[40px] ">
            Ultimate features
            <br/>
that we built
            </h3>
            <p className="text-base mb-6 text-slate-500 max-w-sm">
            The rise of mobile devices transforms the way we
consume information entirely.
            </p>
            <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2 gap-4
                  max-w-[1200px]
                  mx-auto
                  p-4"
          >
            <Card
              icon="assets/ultimate-features/icon1.png"
              titleColor="#242f51"
              title="App Development"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/ultimate-features/icon2.png"
              titleColor="#242f51"
              title="UX Planing"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/ultimate-features/icon3.png"
              titleColor="#242f51"
              title="Cloud Storage"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
            <Card
              icon="assets/ultimate-features/icon4.png"
    
              titleColor="#242f51"
              title="Customer support"
              body="Get your blood tests delivered at
              home collect a sample from the
              news your blood tests."
            />
           
          </div>
           
          </div>
          <div className="md:w-1/2 ">
            <img
              className="w-auto ml-auto relative right-[-1.9rem] lg:right-[-10.9rem]"
              alt="icon"
              src={process.env.PUBLIC_URL + "assets/ultimate-features/img.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
