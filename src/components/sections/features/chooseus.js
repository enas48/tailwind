import React from "react";
import Card from "../../card";

export default function Chooseus() {
    return (
        <>
            {/* choose us */}
            <div className="py-10 lg:py-20 lg:pb-10 md:text-center  flex flex-col items-center">
                <h3 className="font-bold my-6 text-3xl/[40px] max-w-md px-4">
                    Why you should choose our app
                </h3>
                <p className="text-base mb-6 text-slate-500 max-w-xl px-4">
                    The rise of mobile devices transforms the way we consume information
                    entirely and the world's most elevant channels such as Facebook.
                </p>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
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

        </>
    );
}
