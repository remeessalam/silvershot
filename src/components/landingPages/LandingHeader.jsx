import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { logoImg } from "../../constant";
import { X } from "lucide-react";
import { Helmet } from "react-helmet";

const options = [
  {
    name: "Home",
    path: "banner",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change on 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all group duration-300 hover:bg-white hover:text-black ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {" "}
      <div className="wrapper flex justify-between items-center gap-10 py-4">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <Link
            aria-label="Home"
            smooth={true}
            to="banner"
            className="cursor-pointer"
          >
            <img
              width="150"
              height="100"
              src={logoImg}
              className="h-[3rem] md:h-[3.75rem] scale-125 object-contain"
              alt="logo"
            />
          </Link>
          <div className="lg:flex items-center gap-10 hidden">
            {options
              .filter((option) => option.path !== "contact")
              .map((option) => (
                <Link
                  to={`${option.path}`}
                  className={`text-sm link group-hover:text-black ${
                    isScrolled
                      ? "text-primary font-medium"
                      : "text-white font-medium"
                  }`}
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  // activeClass=" text-white"
                >
                  {option.name}
                </Link>
              ))}
            <Link
              to="contact"
              className={`primary-btn group-hover:text-black transition-colors duration-300 group-hover:border-black ${
                isScrolled && `!text-black !border-black`
              }`}
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <X size={35} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {options.map(({ name, path, id }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
          aria-label="toggle drawer"
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
