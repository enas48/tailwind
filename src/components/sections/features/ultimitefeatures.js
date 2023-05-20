import React from "react";
import Button from "../../button";
import Card from "../../card";
import { useCallback } from "react";


export default function Ultimitefeatures() {
    const handleClick = useCallback(() => {
        console.log("clicked");
      }, []);

    return (
        <>
            {/* ultimite features */}
            <div
                className="grid
                grid-cols-6
               p-4
               "
            >

                <div className="col-span-6 md:col-span-3  lg:col-span-3 xl:col-start-2   xl:col-span-3">
                    <h3 className="font-bold my-6 text-3xl/[40px]     md:px-3 ">
                        Ultimate features
                        <br />
                        that we built
                    </h3>
                    <p className="text-base mb-6 text-slate-500 max-w-sm md:px-3">
                        The rise of mobile devices transforms the way we
                        consume information entirely.
                    </p>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2 gap-4
                  max-w-[1200px]
                  mx-auto mb-4
                "
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
                    <Button onClick={handleClick} large label="See all" />
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2">
                    <img
                        className="w-auto ml-auto relative right-[-2rem] py-4"
                        alt="icon"
                        src={process.env.PUBLIC_URL + "assets/ultimate-features/img.png"}
                    />
                </div>
            </div>

        </>
    );
}
