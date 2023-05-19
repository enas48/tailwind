import React from 'react'

export default function Button({label,secondary,onClick}) {
  return (
    <button onClick={onClick} className={`
    rounded-full
    px-6
    py-3
    font-semibold
    transition
     duration-150 
     ease-out 
     hover:ease-in
     whitespace-nowrap
    ${secondary?'text-[#2500f9]':'text-white'}
    ${secondary?'bg-white':'bg-[#2500f9]'}
    ${secondary?'hover:bg-slate-50':'hover:bg-[#260bc0]'}
    `}
    >{label}</button>
  )
}
