import { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
// import "primereact/resources/themes/lara-light-cyan/theme.css";

const NavBar = () => {

    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const navLinks = [
        { label: "NOC & Office Order" },
        { label: "Tender" },
        { label: "Event" },
        { label: "Carrer" },
        { label: "APA" },
        { label: "CDT" },
        { label: "Important Link" },
        { label: "About" },
        { label: "Administration" },
        { label: "Academics" },
        { label: "Admission" },
        { label: "Research & Publication" },
        { label: "Students" },
    ]

    return (
        <Container>
            <header className="border-b-1 relative z-20 w-full">
                <div className="relative">
                    <nav
                        aria-label="main navigation"
                        className="flex items-center gap-x-24 justify-between font-medium py-4"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <Link
                            to="/"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap focus:outline-none lg:flex-1"
                        >
                            <img src="/logo.png" alt="" className="w-10 md:w-12" />
                            <div className="text-sm md:text-base">
                                <h3 className="">Begum Rokeya University, Rangpur</h3>
                                <h3 className="">বেগম রোকেয়া বিশ্ববিদ্যালয়, রংপুর</h3>
                            </div>
                        </Link>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                    : ""
                                }
              `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full overflow-hidden justify-end overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 gap-4 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 flex-wrap lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            {navLinks.map((menu, i) => <Link key={i}
                                to={""}
                            >
                                <li role="none" className="flex px-2 py-1 rounded main2Color text-lg font-semibold hover:text-white hover:bg-[#29abe2] duration-300 transition-colors ">
                                    <span>{menu?.label}</span>
                                </li>
                            </Link>)}
                        </ul>
                    </nav>
                </div>
            </header>
        </Container>
    );
};

export default NavBar;