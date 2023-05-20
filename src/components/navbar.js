import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from "./button";
import { useCallback,useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi';

export default function Navbar() {
    const[navActive,setActive]=useState(false);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <nav className=" mx-auto  bg-white px-4 py-2 h-[60px] sticky z-20 left-0 right-0 top-0">
      <div className={` flex items-center max-w-screen-xl mx-auto
      ${navActive?'flex-col':''}`}>
        <img
        className={`cursor-pointer ${navActive?'self-start':''}`}
          alt="logo"
          onClick={scrollToTop}
          src={process.env.PUBLIC_URL + "assets/logo.png"}
        />
    <GiHamburgerMenu onClick={()=>setActive(!navActive)} className="cursor-pointer  absolute right-6 top-3 lg:hidden z-30"/>
  
        <ul className={` 
        bg-white
        lg:flex 
        nav-items  
        gap-3
        items-center 
        ml-auto
        transition
        duration-150 
        ease-out 
        ${navActive?'flex flex-col m-auto w-full py-2':' hidden'}`}>

          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Key Features
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Pricing
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Testiminial
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
            >
              FAQ
            </Link>
          </li>

          <li className='lg:ml-12 cursor-pointer' >
            <Button onClick={handleClick}  label="Try for free" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
