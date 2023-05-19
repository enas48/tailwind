import React from 'react'

export default function Companies() {
  return (
    <div className='py-10 lg:py-20  text-center p-4 '>
        <h4 className='mb-7'>Trusted by companies like</h4>
        <div className='flex flex-wrap  items-center gap-12 justify-center'>
        <img
            className="w-[100px]"
            alt="icon"
            src={process.env.PUBLIC_URL + "assets/companies/img1.png"}
          />
          <img
            className="w-[100px]"
            alt="icon"
            src={process.env.PUBLIC_URL + "assets/companies/img2.png"}
          />
          <img
            className="w-[100px]"
            alt="icon"
            src={process.env.PUBLIC_URL + "assets/companies/img3.png"}
          />
          <img
            className="w-[100px]"
            alt="icon"
            src={process.env.PUBLIC_URL + "assets/companies/img4.png"}
          />
          <img
            className="w-[100px]"
            alt="icon"
            src={process.env.PUBLIC_URL + "assets/companies/img5.png"}
          />
        </div>
    </div>
  )
}
