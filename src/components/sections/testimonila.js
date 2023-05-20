import { React, useCallback, useState } from "react";
import PriceCard from "../priceCard";
import Button from "../button";
import { AiFillStar } from 'react-icons/ai'
export default function Testimonila() {

  return (
    <>
      <div id="section4" className="p-4">
        <div
          className="grid
                 grid-cols-6
                p-4
                my-10"
        >
          <div className="col-span-6 md:col-span-3 lg:col-span-3 ">
            <img
              className="relative left-[-2rem] py-4"
              alt="icon"
              src={process.env.PUBLIC_URL + "assets/client/people.png"}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <h3 className="font-bold my-6 text-3xl/[40px] max-w-sm">
              Meet Client Satisfaction
              by using product
            </h3>
            <p className="text-base mb-6 text-slate-500 max-w-sm">
              The rise of mobile devices transforms the way we consume.
              elevant channels such as Facebook.
            </p>
            <div className="flex gap1 mb-4">
              <AiFillStar className="text-[#ffcc00] text-2xl" />
              <AiFillStar className="text-[#ffcc00] text-2xl" />
              <AiFillStar className="text-[#ffcc00] text-2xl" />
              <AiFillStar className="text-[#ffcc00] text-2xl" />
              <AiFillStar className="text-[#ffcc00] text-2xl" />

            </div>
            <span className=" font-semibold text-lg">User friendly &amp; Customizable</span>
          </div>
        </div>

      </div>

    </>
  );
}
