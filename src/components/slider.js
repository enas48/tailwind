import { React, useState } from "react";
import Card from "./card";
import BtnSlider from "./btnSlider";

export default function Slider() {
    const dataSlider = [
        { name: 'Zoltan Nemeth', job: "CEO of Pixler Lab" },
        { name: 'NICK JHONSON', job: "Chief Accountant" },
        { name: 'CASH HUDSON', job: "Secretary" },
        { name: 'JACK ALVAREZ', job: "Developer" },
        { name: 'STELLA LARSON', job: "Ui Designer" },
        { name: 'Zoltan Nemeth', job: "Office Manager" },
        { name: 'MAY PERRY', job: "Financial Director" },
        { name: 'Bob Roberts', job: "Sales Manager" },

    ]
    const [slideIndex, setSlideIndex] = useState(1);
    const [nextDis, setNextDis] = useState(false);
    const [prevDis, setPrevDis] = useState(true);

    const nextSlide = () => {
        if (slideIndex === dataSlider.length - 1) {
            setNextDis(true)
        }
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        if (slideIndex !== 2) {
            setPrevDis(false)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== dataSlider.length - 1) {
            setNextDis(false)
        }
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        if (slideIndex === 2) {
            setPrevDis(true)
        }

    }
    return (
        <>

            <div className="flex justify-between items-center flex-wrap">
                <div className="slider-container relative  h-[100px]">
                    {dataSlider.map((item, index) => {
                        return (
                            <div key={index} className={slideIndex === index + 1 ? "w-[300px] absolute top-0 transition ease-in-out delay-100 flex opacity-100 scale-100" : "opacity-0 scale-0"}>
                                <Card
                                    icon={`assets/client/${index + 1}.png`}
                                    row
                                    titleColor="#242f51"
                                    title={item.name}
                                    body={item.job}
                                />
                            </div>
                        )
                    })}

                </div>
                <div className="flex gap-4 items-center">
                    <BtnSlider moveSlide={prevSlide} dir='prev' disabled={prevDis} />
                    <span className="border-r-2 h-8"></span>
                    <BtnSlider moveSlide={nextSlide} dir='next' disabled={nextDis} />
                </div>
            </div>

        </>
    );
}
