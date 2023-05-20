import React from "react";

import Card from "../../card";


export default function Ourfeatures() {


  return (
    <>
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
  
    </>
  );
}
