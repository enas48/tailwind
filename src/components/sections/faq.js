import { React } from "react";
import AccordionComponent from "../accordion";
export default function Faq() {

  return (
    <>
      <div id="section5" className="p-4">
        <div className="py-10  lg:pb-20 md:text-center  flex flex-col items-center">
          <h3 className="font-bold my-6 text-3xl/[40px] max-w-xl px-4">
            Frequently asked questions
          </h3>
          <p className="text-base mb-6 text-slate-500 max-w-2xl px-4">
            The rise of mobile devices transforms the way we consume information entirely
            and the world's most elevant channels such as Facebook.
          </p>
          <div className="container max-w-5xl mt-4">
            <AccordionComponent />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-6 p-4 items-center">
          <div className="col-span-6 md:col-span-3  lg:col-span-3 xl:col-start-2   xl:col-span-3">
            <h3 className="font-bold my-6 text-3xl/[40px]     md:px-3 ">
              Download our App now !
            </h3>
            <p className="text-base mb-6 text-slate-500 max-w-2xl md:px-3">
              The rise of mobile devices transforms the way we consume information entirely
              and the world's most elevant channels such as Facebook.
            </p>
            <div className="grid grid-cols-4 gap-5">
              <a href="#">
                <img
                  className=" "
                  alt="icon"
                  src={process.env.PUBLIC_URL + "assets/google.png"}
                />
              </a>
              <a href="#">
                <img
                  className=""
                  alt="icon"
                  src={process.env.PUBLIC_URL + "assets/apple.png"}
                />
              </a>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2 gap-4
                  max-w-[1200px]
                  mx-auto mb-4
                "
            >
            </div>

          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2">
            <img
              className="w-auto ml-auto relative right-[-2rem] py-4"
              alt="icon"
              src={process.env.PUBLIC_URL + "assets/img2.png"}
            />
          </div>
        </div>
      </div>


    </>
  );
}
