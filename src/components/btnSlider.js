import React from 'react'
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';
export default function BtnSlider({ dir, disabled, moveSlide }) {
    return (
        <button
            disabled={disabled}
            onClick={moveSlide}
            className={`
                p-3 
                text-3xl
                rounded-full 
                border 
                transition ease-in-out delay-100
                text-[#2500f9]
                bg-[#eff3f8]
                hover:text-[#1100ff]
                hover:bg-[#dde0e6]
                disabled:text-slate-500
                disabled:pointer-events-none
                disabled:opacity-50
                disabled:bg-white
        
                 `}>
            {dir == 'next' ? <TbArrowNarrowRight /> : <TbArrowNarrowLeft />}

        </button>
    )
}
