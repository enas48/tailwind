import React from "react";

export default function Card({ icon, title, body, titleColor, center, row }) {
  const divStyle = {
    color: titleColor,
  };
  return (
    <div
      className={`
    flex
     p-3 
     m-2
     max-w-xs
    ${row ? "flex-row items-center" : "flex-col"}
    ${center ? "items-center" : "items-start"}
    `}
    >
      <img
        className=" w-14"
        alt="icon"
        src={`${icon? process.env.PUBLIC_URL + icon : process.env.PUBLIC_URL +  "assets/empty.png"}`}
      />
      <div
        className={`
          ${center ? "text-center" : "text-left"}
          ${row ? "pl-4" : "pt-4"}
        `}
      >
        <h4 className="text-lg pb-2 font-bold" style={divStyle}>
          {title}
        </h4>
        <p className="text-base text-slate-500">{body}</p>
      </div>
    </div>
  );
}
