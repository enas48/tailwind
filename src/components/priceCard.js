import { React, useCallback } from "react";
import Button from "./button";

export default function PriceCard({ price, title, description, body, buttonText, extra, year }) {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div
      className={`
    flex
    flex-col
    overflow-hidden
     m-2
     h-max
     max-w-xs
     shadow-lg 
     shadow-gray-200
     border
     border-transparent
     transition ease-in-out delay-100
     hover:border
     hover:scale-[1.1]
   hover:border-slate-300
     rounded-lg
    `}
    >
      {/* card header */}
      <div className="bg-[#f7f9fa]
         p-5
         px-10
         flex 
         flex-col 
       ">
        <span>
          <span className="text-6xl font-semibold text-[#242f51]">${price}</span>
          <span className="text-[#999ca5] text-md"> {year ? '/ year' : '/ month'}</span>
        </span>
        <span className=" font-semibold text-[#242f51] text-lg pt-5">{title}</span>
        <span className="text-[#999ca5] text-md">{description}</span>
      </div>
      {/* card body */}
      <div className="
       bg-white
         p-5
         px-10
         flex 
         flex-col 
       ">
        {body.map((item, i) => (
          <span key={i} className="text-[#999ca5] text-md py-2">{item}</span>
        ))}
        <div className="py-3">
          <Button onClick={handleClick} label={buttonText} />

        </div>
        <span className="text-[#2500f9] pt-2 text-md">{extra}</span>
      </div>

    </div>
  );
}
