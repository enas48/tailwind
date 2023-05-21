import { Link, animateScroll as scroll } from "react-scroll";
import { TiSocialTwitter, TiSocialFacebook } from 'react-icons/ti'
import { FaSlackHash, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const handleSetActive = (to) => {

    };
    return (
        <>
            <footer className=" flex items-center flex-col justify-center mx-auto bg-[#09142e] px-4 py-[100px] gap-10 ">
                <img
                    className="cursor-pointer"
                    alt="logo"
                    onClick={scrollToTop}
                    src={process.env.PUBLIC_URL + "assets/logo2.png"}
                />

                <ul className={` 
                                flex 
                                flex-col
                                sm:flex-row
                                nav-items  
                                items-center 
                              text-[white]
                                gap-4
                                text-center
                                    `}>

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
                </ul>
                <div className="flex gap-4">
                    <TiSocialFacebook className="text-3xl transition delay-100 hover:text-white" />
                    <TiSocialTwitter className="text-3xl transition delay-100 hover:text-white" />
                    <FaSlackHash className="text-3xl transition delay-100 hover:text-white" />
                    <FaGithubSquare className="text-3xl transition delay-100 hover:text-white" />
                </div>
                <span className="text-sm text-[#5f636e]">Copyright© Arifur Rahman Tushar 2019. All rights reserved</span>

            </footer>


        </>
    );
}
