import { React, useCallback, useState } from "react";
import PriceCard from "../priceCard";
import Button from "../button";
export default function Pricing() {
  const [btnOneActive, setBtnOneActive] = useState(false);
  const [btnTwoActive, setBtnTwoActive] = useState(true);
  const handleClickbtnOne = useCallback(() => {
    setBtnOneActive(false);
    setBtnTwoActive(true);
  }, []);
  const handleClickbtnTwo = useCallback(() => {
    setBtnOneActive(true);
    setBtnTwoActive(false);
  }, []);
  return (
    <>
      <div id="section3" className="p-4">

        <div className="py-10  lg:pb-10 md:text-center  flex flex-col items-center">
          <h3 className="font-bold my-6 text-3xl/[40px] max-w-sm px-4">
            Get awesome features, without
            extra charges
          </h3>
          <p className="text-base mb-6 text-slate-500 max-w-2xl px-4">
            The rise of mobile devices transforms the way we consume information entirely
            and the world's most elevant channels such as Facebook.
          </p>

          <div className="p-1 my-4 border rounded-full flex gap-2">
            <Button onClick={handleClickbtnOne} secondary={btnOneActive} label="Monthly" />
            <Button onClick={handleClickbtnTwo} secondary={btnTwoActive} label="Annually" />
          </div>
          {!btnOneActive &&
            <div
              className="grid grid-cols-1 sm:grid-cols-2  gap-8
                  max-w-[1200px] 
                  mx-auto
                  p-4" 
            >
              <PriceCard
                price='0'
                title="Business Class"
                description="For small teams or office"
                body={["Drag & Drop Builder",
                  "1,000's of Templates",
                  "Blog Support Tools",
                  "eCommerce Store"]}
                buttonText="Start free trail"
              />
              <PriceCard
                price='90'
                title="Pro Master"
                description="For Best opportunities"
                body={["Drag & Drop Builder",
                  "1,000's of Templates",
                  "Blog Support Tools",
                  "eCommerce Store"]}
                buttonText="Subscribe Now"
                extra="Or Start 14 days trail"
              />
            </div>
          }
          {!btnTwoActive &&
            <div
              className="grid grid-cols-1 sm:grid-cols-2  gap-8
                  max-w-[1200px]
                  mx-auto
                  p-4"
            >
              <PriceCard
                price='0'
                title="Business Class"
                description="For small teams or office"
                body={["Drag & Drop Builder",
                  "1,000's of Templates",
                  "Blog Support Tools",
                  "eCommerce Store"]}
                buttonText="Start free trail"
                year
              />
              <PriceCard
                price='180'
                title="Pro Master"
                description="For Best opportunities"
                body={["Drag & Drop Builder",
                  "1,000's of Templates",
                  "Blog Support Tools",
                  "eCommerce Store"]}
                buttonText="Subscribe Now"
                extra="Or Start 14 days trail"
                year
              />
            </div>
          }
        </div>


      </div>
      <hr/>
    </>
  );
}
