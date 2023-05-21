import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { AiOutlinePlus } from 'react-icons/ai'
export default function AccordionComponent() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <Accordion open={open === 1} className=" bg-[#e6e8ec]  px-4 mb-3">
                <AccordionHeader onClick={() => handleOpen(1)}>
                    <div className="flex justify-between w-full items-center gap-4">
                        <h3 className="font-bold text-xl/[40px] ">
                            How to contact with riders emergency?
                        </h3>
                        <AiOutlinePlus className="text-2xl w-[50px]" />
                    </div>

                </AccordionHeader>
                <AccordionBody>
                <p className="text-base mb-6 max-w-4xl text-slate-500 text-left">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} className=" bg-[#e6e8ec]  px-4 mb-3">
                <AccordionHeader onClick={() => handleOpen(2)}>
                    <div className="flex justify-between w-full items-center gap-4">
                        <h3 className="font-bold text-xl/[40px] ">
                            App installation failed, how to update system information?
                        </h3>
                        <AiOutlinePlus className="text-2xl w-[50px]" />
                    </div>

                </AccordionHeader>
                <AccordionBody>
                <p className="text-base mb-6 max-w-4xl text-slate-500 text-left">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} className=" bg-[#e6e8ec]  px-4 mb-3">
                <AccordionHeader onClick={() => handleOpen(3)}>
                    <div className="flex justify-between w-full items-center gap-4">
                        <h3 className="font-bold text-xl/[40px] ">
                            Website reponse taking time, how to improve?
                        </h3>
                        <AiOutlinePlus className="text-2xl w-[50px]" />
                    </div>

                </AccordionHeader>
                <AccordionBody>
                    <p className="text-base mb-6 max-w-4xl text-slate-500 text-left">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} className=" bg-[#e6e8ec]  px-4 mb-3">
                <AccordionHeader onClick={() => handleOpen(4)}>
                    <div className="flex justify-between w-full items-center gap-4">
                        <h3 className="font-bold text-xl/[40px] ">
                            New update fixed all bug and issues
                        </h3>
                        <AiOutlinePlus className="text-2xl w-[50px]" />
                    </div>

                </AccordionHeader>
                <AccordionBody>
                <p className="text-base mb-6 max-w-4xl text-slate-500 text-left">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} className=" bg-[#e6e8ec]  px-4 mb-3">
                <AccordionHeader onClick={() => handleOpen(5)}>
                    <div className="flex justify-between w-full items-center gap-4">
                        <h3 className="font-bold text-xl/[40px] ">
                            How to contact with riders emergency?
                        </h3>
                        <AiOutlinePlus className="text-2xl w-[50px]" />
                    </div>

                </AccordionHeader>
                <AccordionBody>
                <p className="text-base mb-6 max-w-4xl text-slate-500 text-left">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                </AccordionBody>
            </Accordion>
        </Fragment>
    );


}